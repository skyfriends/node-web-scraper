const scrape = require('website-scraper');

const websiteUrl = process.argv.length > 2 ? process.argv[2] : console.error('Please specify a site to scrape as the last command line argument. See README for example.')

const scrapeOptions = {
  urls: [websiteUrl],
  urlFilter: (url) => url.indexOf(websiteUrl) === 0,
  recursive: true,
  maxDepth: 50,
  prettifyUrls: true,
  filenameGenerator: 'bySiteStructure',
  directory: websiteUrl
};

const scrapeSite = async () => {
  try {
    await scrape(scrapeOptions);
    console.log('Entire website succesfully downloaded!');
  } catch (err) {
    console.error('An error occurred', err);
  }
};

scrapeSite();
