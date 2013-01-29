// set up data structures
window['streams'] = {};
streams['home'] = {};
streams['users'] = {};
streams['users']['shawndrost'] = [];
streams['users']['sharksforcheap'] = [];
streams['users']['mracus'] = [];
streams['users']['douglascalhoun'] = [];
window['users'] = Object['keys'](streams['users']);

// utility function for adding tweets to our data structures
var add_tweet = function(new_tweet){
  var username = new_tweet['user'];
  streams['users'][username]['push'](new_tweet);
  streams['home']['push'](new_tweet);
};

// utility function
var randomElement = function(array){
  var random_index = Math['floor'](Math['random']() * array['length']);
  return array[random_index];
};

// random tweet generator
var verbs = ['punched', 'considered', 'laughed at', 'selected', 'marginalized', 'drank', "punk'd"];
var objects = ['my', 'your', 'the'];
var nouns = ['cat', 'elbow', 'potato', 'city-state', 'electoral college', 'gnu', 'pony', 'chair'];
var random_message = function(){
  return 'just ' + random(verbs) + ' ' + random(objects) + ' ' + random(nouns);
};

// generate random tweets on a random schedule
var generate_random_tweet = function(){
  var tweet = {};
  tweet['user'] = randomElement(users);
  tweet['message'] = random_message();
  tweet['created_at'] = new Date();
  add_tweet(tweet);
  setTimeout(generate_random_tweet, Math['random']() * 1500);
};
setTimeout(generate_random_tweet, 0);

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var write_tweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  var tweet = {};
  tweet['user'] = visitor;
  tweet['message'] = message;
  add_tweet(tweet);
};
