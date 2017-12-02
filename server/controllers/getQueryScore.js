const cheerio = require('cheerio');
const axios = require('axios');


getQueryScore = () => {
  var queryScore = 0;
  getCrunchBaseScore();
  getGooglePatentScore();
  getGoogleScholarScore();
  getGoogleScholarScore();
}

getCrunchBaseScore = () => {
  queryScore += 1;
  console.log(queryScore);
};

getGooglePatentScore = () => {
  const query = "machine+learning"
  axios.get(`https://patents.google.com/?q=${query}&after=priority:20160101`)
  .then((data) => {
    const $ = cheerio.load(data)
    const results = $('.c');
    console.log(data)
  })
  // https://patents.google.com/?q=machine+learning&after=priority:20160101
}

module.exports = getGooglePatentScore