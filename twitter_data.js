window.streams = {
  users: {
    shawndrost: [],
    sharksforcheap: [],
    mracus: [],
    douglascalhoun: []
  },
  home: []
};
window.users = Object.keys(streams.users);

var random = function(array){
  var random_index = Math.floor(Math.random() * array.length);
  return array[random_index];
}

var verbs = ["punched", "considered", "laughed at", "selected", "marginalized", "drank", "punk'd"];
var objects = ["my", "your", "the"];
var nouns = ["cat", "elbow", "potato", "city-state", "electoral college", "gnu", "pony", "chair"];
var random_message = function(){
  return "just " + random(verbs) + " " + random(objects) + " " + random(nouns);
}

var do_generation = function(){
  generate_tweet();
  setTimeout(do_generation, Math.random() * 1000);
}

setTimeout(do_generation, 0);

var generate_tweet = function(){
  add_tweet({
    user: random(users),
    message: random_message()
  })
};

var add_tweet = function(new_tweet){
  console.log(new_tweet)
  streams.users[new_tweet.user].push(new_tweet);
  streams.home.push(new_tweet);
};

var write_tweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  add_tweet({
    user: visitor,
    message: message
  })
}
