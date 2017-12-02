const cheerio = require('cheerio');
const axios = require('axios');
const industry = "technology";

const getArticle = (tech) => {
  const type = "news"
  axios.get(`http://www.google.com/search?q=${industry}+${tech}+${type}`)
  .then((data) => {
    const $ = cheerio.load(data)
    const results = $('.srg')[0];
    console.log(results)
    return results;
  })
};

const getIndustryArray = () => {
  
  const IndustryArray = [];
  
  const tech = ["machine learning", "artificial intelligence", "blockchain", "biometrics", "internet of things", "augmented reality"]
  
  const imgUrl = {
    machine_learning: "goo.gl/3Dh5LM",
    artificial_intelligence: "goo.gl/HAamev",
    blockchain: "goo.gl/pvbLqP",
    biometrics: "goo.gl/woyyL4",
    internet_of_things: "goo.gl/rbp782",
    augmented_reality: "goo.gl/V6FBym",
  }

  tech.forEach(function(item, index, array) {
    
    const linksObject = {
      img: imgUrl.item,
      article: getArticle(tech),
      // research: getResearch(tech),
      // company: getCompany(tech),
    };

    IndustryArray.push(linksObject);

  });

}

module.exports = getIndustryArray;