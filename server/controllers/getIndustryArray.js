const cheerio = require('cheerio');
const axios = require('axios');

async function getUrl(industry, tech, type) {
  const query = `http://www.google.com/search?q=${industry}+${tech}+${type}`;
  let htmlString = await axios.get(query)
  const $ = cheerio.load(htmlString.data);
  const targetAnchor = $('.r');
  const showData = targetAnchor[0].children[0].attribs.href.slice(7);
  const url = showData.split("&sa=")[0];
  return url;
  console.log(url)
};

// getTitle = (url) => {

//   const new_url = url.split('/').slice(-1)[0];
//   let modified_url = new_url.split('-');

//   for (var i = 0; i < modified_url.length; i ++){
//     let word = modified_url[i]
//     let modified_word = (word.charAt(0).toUpperCase() + word.slice(1));
//     modified_url[i] = modified_word;
//   }

//   const final_Url = modified_url.join(" ")

//   return final_Url

// };

getIndustryArray = (industry) => {

  var IndustryArray = [];

  getUrl(industry, "Machine Learning", "news").then((url) => {
    IndustryArray.push(url);
  }) 

  console.log(IndustryArray);
  return IndustryArray

}

module.exports = getIndustryArray;