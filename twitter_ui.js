var draw = function(){
  var $body = $('body');
  $body['html']('');
  var index = streams['home']['length'] - 1;
  while(index >= 0){
    var tweet = streams['home'][index];
    console['log']('rendering a tweet:', tweet);
    var html = tweet['user'] + ': ' + tweet['message'] + '<br>';
    $body['append'](html);
    index--;
  }
}
setTimeout(draw, 2000);
