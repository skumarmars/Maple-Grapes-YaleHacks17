const cheerio = require('cheerio');
const axios = require('axios');

const getUrl = (industry, tech, type) => {
  const query = `http://www.google.com/search?q=${industry}+${tech[0]}+${type}`
  axios.get(query)
  .then((htmlString) => {

    const $ = cheerio.load(htmlString.data)
    const targetAnchor = $('.r');
    const showData = targetAnchor[0].children[0].attribs.href.slice(7)
    const url = showData.split("&sa=")[0]    
    console.log(url);
    return url;

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
  const news = getUrl(industry, tech, "news");
  return IndustryArray

}

module.exports = getIndustryArray;