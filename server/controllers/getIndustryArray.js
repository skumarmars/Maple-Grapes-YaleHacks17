const cheerio = require('cheerio');
const axios = require('axios');

const getArticle = (tech, industry) => {
  const type = "news";
  const query = `http://www.google.com/search?q=${industry}+${tech[0]}+${type}`
  axios.get(query)
  .then((htmlString) => {
    const $ = cheerio.load(htmlString.data)
    const targetAnchor = $('.r');
    const showData = targetAnchor[0].children[0].children
    console.log(showData)
    return targetAnchor;
  })
};

const getIndustryArray = (industry) => {
  
  const IndustryArray = [];
  
  const tech = ["machine_learning", "artificial_intelligence", "blockchain", "biometrics", "internet_of_things", "augmented_reality"]
  
  const imgUrl = {
    machine_learning: "goo.gl/3Dh5LM",
    artificial_intelligence: "goo.gl/HAamev",
    blockchain: "goo.gl/pvbLqP",
    biometrics: "goo.gl/woyyL4",
    internet_of_things: "goo.gl/rbp782",
    augmented_reality: "goo.gl/V6FBym",
  }
  // tech.forEach(function(item, index, array) {
  //   const linksObject = {
  //     img: imgUrl[item],
  //     article: getArticle(tech, industry),
  //     // research: getResearch(tech),
  //     // company: getCompany(tech),
  //   };

  //   IndustryArray.push(linksObject);

  // });
  const article = getArticle(tech, industry);
  console.log(article)
  return IndustryArray

}

module.exports = getIndustryArray;