const eleventySass = require("eleventy-sass");
const postcss = require("postcss");
const esbuild = require('esbuild');
const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const autoprefixer = require("autoprefixer");
const yml = require("js-yaml");
const safeLinks = require('@sardine/eleventy-plugin-external-links');

module.exports = function(eleventyConfig) {
    {
        eleventyConfig.addDataExtension("yml", contents => yml.load(contents));
        eleventyConfig.addPassthroughCopy("images");
        eleventyConfig.addPassthroughCopy("fonts");
        eleventyConfig.addPassthroughCopy("downloads");
        eleventyConfig.addPlugin(faviconsPlugin, {});
        eleventyConfig.addPlugin(eleventySass, {
            postcss: postcss([autoprefixer]),
            sass: {
                loadPaths: ["node_modules/bootstrap/scss"],
                style: "compressed",
                rev: true
            }
        });
        eleventyConfig.addPlugin(safeLinks);
        eleventyConfig.setLiquidOptions({
            dynamicPartials: false
        });
        // simple esbuild per pepelsbey.dev
        eleventyConfig.addTemplateFormats('js');
        eleventyConfig.addExtension('js', {
            outputFileExtension: 'js',
            compile: async function (content, path) {
                if (path !== './index.js') {
                    return;
                }
                let me = this;
                async function anon(){
                    let output = await esbuild.build({
                        target: 'es2020',
                        entryPoints: [path],
                        minify: true,
                        bundle: true,
                        write: false,
                    });
                    me.addDependencies(path, [output.outputFiles[0].path]);
                    return output.outputFiles[0].text;
                }
                return anon
            }

        });
        return {
            dir: {
                input: "./",
                output: "./_site",
                includes: "./_includes",
                layouts: "./_layouts"
            }
        }
    }

};
