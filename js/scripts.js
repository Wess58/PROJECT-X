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
