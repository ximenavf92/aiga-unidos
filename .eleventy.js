module.exports = config => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/site.webmanifest');
  config.addPassthroughCopy('./src/assets/css/');
  config.addPassthroughCopy('./src/assets/images/');
  config.addWatchTarget("./src/assets/css");
  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    pathPrefix: "/",
    markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            includes: "_includes",
            data: "_data",
            output: 'dist'
        }
      }
    };