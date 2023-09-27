const eleventySass = require("eleventy-sass");
const postcss = require("postcss");
const cssnano = require("cssnano");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const autoprefixer = require("autoprefixer");
const yml = require("js-yaml");
const purgecss = require("@fullhuman/postcss-purgecss");
const posthtml = require("posthtml");
const htmlnano = require("htmlnano");
const { posthtml: automaticNoopener } = require('eleventy-plugin-automatic-noopener');

module.exports = function(eleventyConfig) {
    {
        eleventyConfig.addDataExtension("yml", contents => yml.load(contents));
        eleventyConfig.addPassthroughCopy("images");
        eleventyConfig.addPassthroughCopy("fonts");
        eleventyConfig.addPassthroughCopy("downloads");
        eleventyConfig.addPlugin(faviconsPlugin, {});
        eleventyConfig.addPlugin(eleventySass, {
            postcss: postcss(
                [
                autoprefixer,
                cssnano({ preset: require('cssnano-preset-advanced') })]),
            sass: {
                loadPaths: ["node_modules/bootstrap-icons/font/","node_modules/bootstrap/scss"],
                style: "compressed",            }
        });
        eleventyConfig.setLiquidOptions({
            dynamicPartials: false
        });
        eleventyConfig.addTransform('posthtml', function(HTMLString, outputPath) {
            if(outputPath && outputPath.endsWith('html')) {
                return posthtml([automaticNoopener(), htmlnano()]).process(HTMLString).then(result => result.html);
            }
            else {
                return HTMLString
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
