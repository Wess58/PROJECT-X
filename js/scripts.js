function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#random-quote").text(response.quoteText + response.quoteAuthor);
      }
  });
}

randomQuote();
