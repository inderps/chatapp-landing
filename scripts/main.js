$(document).ready(function(){$.get("http://ipinfo.io",function(i){$("#hidden_div").prepend("<img src='https://landing-page-api.herokuapp.com/visited?currentApp=querply&version=1&ipAddress="+i.ip+"' />"),$(".ipAddress").val(i.ip)},"jsonp"),-1!=window.location.search.indexOf("signedup")&&$("#thankyou").modal();var i=1;setInterval(function(){9>i&&($(".scene-"+i).show(),i+=1)},1500)});