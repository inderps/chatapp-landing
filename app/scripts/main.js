$(document).ready(function(){
  $.get("http://ipinfo.io", function(response) {
    $('#hidden_div').prepend("<img src='https://landing-page-api.herokuapp.com/visited?currentApp=querply&version=1&ipAddress="+ response.ip + "' />");
    $('.ipAddress').val(response.ip);
  }, "jsonp");

  if (window.location.search.indexOf('signedup') != -1) {
    $('#thankyou').modal();
  }
});
