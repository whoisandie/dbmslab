var faker = require('faker');

var rand = function(low, high){
    return Math.floor(Math.random() * (high - low + 1) + low);
};

var generateFriends = function(ids, user){
  var friends = [];
  for(var i=0; i< rand(ids.length/2, ids.length); i++){
    friends.push({
      friend_id: faker.random.array_element(ids),
      status: faker.random.array_element(['pending', 'accepted']),
      timestamp: faker.date.past()
    });
  }

  var friend = {
    user_id: user,
    friends: friends,
  };
  return friend;
};

function generateFriendsArray(ids){
  var friendsArr = [];
  for(var i=0; i<ids.length; i++){
    friendsArr.push(generateFriends(ids, ids[i]));
  }
  return friendsArr;
}

module.exports = generateFriendsArray;