const eleventySass = require("eleventy-sass");
const postcss = require("postcss");
const cssnano = require("cssnano")
const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const autoprefixer = require("autoprefixer");
const yml = require("js-yaml");
const safeLinks = require('eleventy-plugin-automatic-noopener');
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = function(eleventyConfig) {
    {
        eleventyConfig.addDataExtension("yml", contents => yml.load(contents));
        eleventyConfig.addPassthroughCopy("images");
        eleventyConfig.addPassthroughCopy("fonts");
        eleventyConfig.addPassthroughCopy("downloads");
        eleventyConfig.addPlugin(faviconsPlugin, {});
        eleventyConfig.addPlugin(eleventySass, {
            postcss: postcss(
                [purgecss({
                    content: ["./_site/**/*.html", "./_site/*.html"],
                    css: ["./_site/css/*.css"],
                    variables: true,
                    safelist: [/^carousel\-item/]
                }),
                 autoprefixer,
                 cssnano({ preset: require('cssnano-preset-advanced')})]),
            sass: {
                loadPaths: ["node_modules/bootstrap-icons/font/","node_modules/bootstrap/scss"],
                style: "compressed",
                rev: true
            }
        });
        eleventyConfig.addPlugin(safeLinks);
        eleventyConfig.setLiquidOptions({
            dynamicPartials: false
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
