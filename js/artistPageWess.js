//hire modal to work
$(document).ready(function() {
  $('#hire').click(function() {
    $('#id02').css('display', 'block');
  });

  $('#login-cancel').click(function() {
    $('#id02').css('display', 'none');
  });

  $('.close').click(function() {
    $('#id02').css('display', 'none');
  });
  // Get the modal
  var modal = document.getElementById('id02');

  $(document).click(function(event) {
    if (event.target == modal) {
      $('#id02').css('display', 'none');
    }
  });

  $('#loginButton').click(function(){
    window.location.replace("artistWess.html");
  });
});
