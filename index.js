var mongo = require('mongojs');
var faker = require('faker');

var db = mongo('dbmslab', ['users', 'news', 'messages', 'friends', 'groups']);
var records = require('./records');

db.users.insert(records.users(), function(err, users){
  console.log('Seeded users collection');
  var ids = []
  users.forEach(function(user){
    ids.push(user._id);
  });

  db.news.insert(records.news(ids), function(err, news){
    console.log('Seeded news collection');
  });

  db.messages.insert(records.messages(ids), function(err, messages){
    console.log('Seeded messages collection');
  });

  db.friends.insert(records.friends(ids), function(err, friends){
    console.log('Seeded friends collection');
  });

  db.groups.insert(records.groups(ids), function(err, groups){
    console.log('Seeded groups collection');
    console.log('\nDatabase seeded. Enjoy !');
  });

  db.close();
});