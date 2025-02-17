export default async function (eleventyConfig) {
  // Configure Eleventy
  eleventyConfig.addPassthroughCopy("assets/");
  eleventyConfig.addWatchTarget("assets");
}
