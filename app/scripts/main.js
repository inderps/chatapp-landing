$(document).ready(function(){
  $.get("http://ipinfo.io", function(response) {
    $('#hidden_div').prepend("<img src='https://landing-page-api.herokuapp.com/visited?currentApp=querply&version=1&ipAddress="+ response.ip + "' />");
    $('.ipAddress').val(response.ip);
  }, "jsonp");

  if (window.location.search.indexOf('signedup') != -1) {
    $('#thankyou').modal();
  }

  var scene = 1;

  setInterval(function(){
    if (scene < 9) {
      $('.scene-' + scene).show();
      scene = scene + 1;
    }
  }, 1500);

});
