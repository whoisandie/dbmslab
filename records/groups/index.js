var faker = require('faker');

var rand = function(low, high){
    return Math.floor(Math.random() * (high - low + 1) + low);
};

var generateGroups = function(ids){
  var groupMembers = [];
  for(var i=0; i<rand(ids.length/2, ids.length); i++){
    groupMembers.push(faker.random.array_element(ids));
  }

  var groupPosts = [];
  for(var i=0; i<rand(ids.length/2, ids.length); i++){
    groupPosts.push({
      user_id: faker.random.array_element(ids),
      text: faker.lorem.sentence(),
      timestamp: faker.date.past()
    });
  }

  var group = {
    name: faker.hacker.adjective() + ' ' + faker.hacker.noun(),
    desc: faker.lorem.sentence(),
    members: groupMembers,
    posts: groupPosts,
    timestamp: faker.date.past()
  };

  return group;
};

function generateGroupsArray(ids){
  var groupsArr = [];
  for(var i=0; i<ids.length; i++){
    groupsArr.push(generateGroups(ids));
  }
  return groupsArr;
}

module.exports = generateGroupsArray;