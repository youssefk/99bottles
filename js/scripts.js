$(document).ready(function() {
    for (var bottles = 99; bottles >= 1; bottles -= 1) {
      $("#lyrics").append("<p>" + bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take one down, pass it around " + (bottles - 1) + " bottles of beer on the wall." + "</p>");
    }
});
