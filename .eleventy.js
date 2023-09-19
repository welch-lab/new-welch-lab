const eleventySass = require("eleventy-sass");
const postcss = require("postcss");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const autoprefixer = require("autoprefixer");
const yml = require("js-yaml");
const safeLinks = require('eleventy-plugin-automatic-noopener');
const purgeCssPlugin = require("eleventy-plugin-purgecss");

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
                loadPaths: ["node_modules/bootstrap-icons/font/","node_modules/bootstrap/scss"],
                style: "compressed",
                rev: true
            }
        });
        eleventyConfig.addPlugin(safeLinks);
        eleventyConfig.setLiquidOptions({
            dynamicPartials: false
        });
        eleventyConfig.addPlugin(purgeCssPlugin);
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
