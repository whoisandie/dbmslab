var faker = require('faker');

var generateNews = function(ids){
  var news = {
    user_id: faker.random.array_element(ids),
    text: faker.lorem.sentence(),
    timestamp: faker.date.past()
  };
  return news;
};

function generateNewsArray(ids){
  var newsArr = [];
  for(var i=0; i<ids.length; i++){
    newsArr.push(generateNews(ids));
  }
  return newsArr;
}

module.exports = generateNewsArray;