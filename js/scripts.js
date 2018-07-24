//This is the quto randomizer using the forismatic API and ajax.
function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#quotes").html(response.quoteText + "&dash;" + response.quoteAuthor + "&dash;");
      }
  });
}
randomQuote();


// click event log-in
$(document).ready(function(){
  $('#login-nav').click(function(){
    $('#id01').css('display','block');
  });

  $('#login-cancel').click(function(){
    $('#id01').css('display','none');
  });

  $('.close').click(function(){
    $('#id01').css('display','none');
  });
  // Get the modal
var modal = document.getElementById('id01');

$(document).click(function(event){
  if(event.target==modal){
    $('#id01').css('display','none');
  }
});
 });
