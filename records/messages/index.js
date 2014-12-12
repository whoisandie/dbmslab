var faker = require('faker');

var rand = function(low, high){
    return Math.floor(Math.random() * (high - low + 1) + low);
};

var generateMessages = function(ids, user){
  var chats = []
  for(var i=0; i<rand(5, 20); i++){
    chats.push({
      text: faker.lorem.sentence(),
      timestamp: faker.date.past()
    });
  }

  var message = {
    user_id: user,
    friend_id: faker.random.array_element(ids),
    messages: chats
  };

  return message;
};

function generateMessagesArray(ids){
  var msgArr = [];
  for(var i=0; i<ids.length; i++){
    msgArr.push(generateMessages(ids, ids[i]));
  }
  return msgArr;
}

module.exports = generateMessagesArray;