window.draw = function(){
  var body = $("body");
  body.html("")
  for(var i = window.streams.home.length - 1; i >= 0; i-- ){
    tweet = window.streams.home[i]
    console.log(tweet)
    body.append(tweet.user + ": " + tweet.message + "<br>");
  }
}
setTimeout(draw, 2000)