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

  //Logout simulation
  $('#artists').click(function() {
    $('#id03').css('display', 'block');
  });

  $('#logout').click(function() {
    $('#id03').css('display', 'none');
    window.location.replace("artistPageWess.html");
  });

  $('.close').click(function() {
    $('#id03').css('display', 'none');
  });
  // Get the modal
  var modal = document.getElementById('id02');

  $(document).click(function(event) {
    if (event.target == modal) {
      $('#id03').css('display', 'none');
    }
  });

  //editing the user information
  $("#editInfo").click(function() {
    document.getElementById("namePlate").contentEditable = 'true';
    $('#namePlate').addClass('namePlate');
    document.getElementById("city").contentEditable = 'true';
    $('#city').addClass('namePlate');
    document.getElementById("speciality").contentEditable = 'true';
    $('#speciality').addClass('namePlate');
    document.getElementById("bio").contentEditable = 'true';
    $('#bio').addClass('namePlate');

    $('#editInfo').hide();
    $('#saveInfo').show();
  });

//saving the information
  $("#saveInfo").click(function() {
    document.getElementById("namePlate").contentEditable = 'false';
    $('#namePlate').removeClass('namePlate');
    document.getElementById("city").contentEditable = 'false';
    $('#city').removeClass('namePlate');
    document.getElementById("speciality").contentEditable = 'false';
    $('#speciality').removeClass('namePlate');
    document.getElementById("bio").contentEditable = 'false';
    $('#bio').removeClass('namePlate');

    $('#editInfo').show();
    $('#saveInfo').hide();
  });
});
