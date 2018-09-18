var express = require('express');
var router = express.Router();
const respondData = require('../controllers/chart');
const cheerio = require('cheerio');
const axios = require('axios');
const google = require('google');

router.post('/industry', (req, res) => {
  const industryQuery = req.body.industry;
  const keyword = req.body.keyword;
  const fieldArr = [ "Machine Learning", "Artificial Intelligence", "Augmented Reality","Blockchain","Internet of Things","Biometrics"]
  
  function getField(field) {
    return new Promise(resolve => {
      google.resultsPerPage = 10
      const query = `${industryQuery} ${field} ${keyword} news`;
      google(query, (err, data) => {
        if (err) {
          console.log(err)
          resolve()
        } else {
          const result = {
            field,
            title: data.links[0].title,
            url: ""
          }
          for (var i = 0; i < data.links.length; i ++) {
            var link = data.links[i];
            if (link.href !== null) {
              result.url = link.href
              result.title = link.title
            }
          }
          const query2 = `${industryQuery} ${field} ${keyword} research`;
          google(query2, (err, data) => {
            if (err) {
              console.log(err)
              resolve()
            } else {
              result.researchTitle = data.links[0].title
              for (var i = 0; i < data.links.length; i ++) {
                var link = data.links[i];
                if (link.href !== null) {
                  result.researchUrl = link.href
                  result.researchTitle = link.title
                }
              }
            }
            const query3 = `${industryQuery} ${field} ${keyword} startup`;
            google(query3, (err, data) => {
              if (err) {
                console.log(err)
                resolve()
              } else {
                result.startupTitle = data.links[0].title
                for (var i = 0; i < data.links.length; i ++) {
                  var link = data.links[i];
                  if (link.href !== null) {
                    result.startupUrl = link.href
                    result.startupTitle = link.title
                  }
                }
              }
              resolve(result);
            })
          })
        }
      })
    });
  }

  async function combine() {
    const ML = await getField(fieldArr[0]);
    const AI = await getField(fieldArr[1]);
    const AR = await getField(fieldArr[2]);
    const BC = await getField(fieldArr[3]);
    const IOT = await getField(fieldArr[4]);
    const BIO = await getField(fieldArr[5]);
    return [ML, AI, AR, BC, IOT, BIO];
  }
  combine().then(v => {
    res.json(v)
  });

    // const query = `${industryQuery} ${completeField} news`;
    // google(query, (err, data) => {
    //     const result = {
    //       title: data.links[0].title,
    //       url: ""
    //     }
    //     for (var i = 0; i < data.links.length; i ++) {
    //       var link = data.links[i];
    //       if (link.href !== null) {
    //         result.url = link.href
    //         result.title = link.title
    //       }
    //     }
    //     res.json(result)
    // })
})

router.get('/api/test', (req, res) => {
  console.log(respondData())
  const data = respondData();
  res.json(data);
})
module.exports = router;
