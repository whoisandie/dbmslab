var faker = require('faker');

var schools = [
  'Bishop Dwenger High School',
  'Caroll High School',
  'Wayne High School',
  'Columbus Christian School',
  'Zionsville Community High School',
  'Charlestown High School',
  'Silver Creek High School',
  'East Central High School',
  'Cowan High School',
  'Delta High School',
  'Goshen High School'
];

var colleges = [
  'University of Southern California',
  'Purdue University',
  'New York University',
  'Harvard University',
  'Boston University',
  'University of Pennsylvania',
  'Arizona State University',
  'Indiana University',
  'University of Wisconsin',
  'Stanford University',
  'SUNY Buffalo'
];

var generateUser = function(){
  var user = {
    name: faker.name.findName(),
    username: faker.internet.userName().toLowerCase(),
    email: faker.internet.email().toLowerCase(),
    phone: faker.phone.phoneNumberFormat(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipcode: faker.address.zipCode()
    },
    education:{
      school: faker.random.array_element(schools),
      college: faker.random.array_element(colleges)
    },
    timestamp: faker.date.past()
  };
  return user;
};

function generateUserArray(num){
  var userArr = [];
  var num = num || 10;
  for(var i=0; i < num; i++){
    userArr.push(generateUser());
  }
  return userArr;
}

module.exports = generateUserArray;