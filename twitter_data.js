// set up data structures
window['streams'] = {};
streams['home'] = [];
streams['users'] = {};
streams['users']['shawndrost'] = [];
streams['users']['sharksforcheap'] = [];
streams['users']['mracus'] = [];
streams['users']['douglascalhoun'] = [];
window['users'] = Object['keys'](streams['users']);

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet['user'];
  streams['users'][username]['push'](newTweet);
  streams['home']['push'](newTweet);
};

// utility function
var randomElement = function(array){
  var randomIndex = Math['floor'](Math['random']() * array['length']);
  return array[randomIndex];
};

// random tweet generator
var verbs = ['punched', 'considered', 'laughed at', 'selected', 'marginalized', 'drank', "punk'd"];
var objects = ['my', 'your', 'the'];
var nouns = ['cat', 'elbow', 'potato', 'city-state', 'electoral college', 'gnu', 'pony', 'chair'];
var randomMessage = function(){
  return 'just ' + randomElement(verbs) + ' ' + randomElement(objects) + ' ' + randomElement(nouns);
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet['user'] = randomElement(users);
  tweet['message'] = randomMessage();
  tweet['created_at'] = new Date();
  addTweet(tweet);
};

for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math['random']() * 1500);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  var tweet = {};
  tweet['user'] = visitor;
  tweet['message'] = message;
  addTweet(tweet);
};
