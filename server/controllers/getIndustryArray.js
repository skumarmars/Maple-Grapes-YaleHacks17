const cheerio = require('cheerio');
const axios = require('axios');


 async function getUrl(industry, tech, type) {
  const query = `http://www.google.com/search?q=${industry}+${tech[0]}+${type}`;
  let htmlString = await axios.get(query)
  const $ = cheerio.load(htmlString.data);
  const targetAnchor = $('.r');
  const showData = targetAnchor[0].children[0].attribs.href.slice(7);
  const url = showData.split("&sa=")[0];
  return url;
};

getTitle = (url) => {

  const new_url = url.split('/').slice(-1)[0];
  let modified_url = new_url.split('-');

  for (var i = 0; i < modified_url.length; i ++){
    let word = modified_url[i]
    let modified_word = (word.charAt(0).toUpperCase() + word.slice(1));
    modified_url[i] = modified_word;
  }

  const final_Url = modified_url.join(" ")
  console.log(final_Url)

  return final_Url

};

const getIndustryArray = (industry) => {
  
  const IndustryArray = [];
  
  const tech = ["machine_learning", "artificial_intelligence", "blockchain", "biometrics", "internet_of_things", "augmented_reality"]

  getUrl(industry, tech, "news").then((url) => {
    title = getTitle(url);
  })
  

  // const newsTitle = getTitle("https://www.cbsnews.com/news/machine-learning-helps-science-tackle-alzheimers/")
  // console.log(newsUrl);

  // const imgUrl = {
  //   machine_learning: "goo.gl/3Dh5LM",
  //   artificial_intelligence: "goo.gl/HAamev",
  //   blockchain: "goo.gl/pvbLqP",
  //   biometrics: "goo.gl/woyyL4",
  //   internet_of_things: "goo.gl/rbp782",
  //   augmented_reality: "goo.gl/V6FBym",
  // }
  // tech.forEach(function(item, index, array) {
  //   const linksObject = {
  //     img: imgUrl[item],
  //     article: getArticle(tech, industry),
  //     // research: getResearch(tech),
  //     // company: getCompany(tech),
  //   };

  //   IndustryArray.push(linksObject);

  // });

  return IndustryArray

}

module.exports = getIndustryArray;