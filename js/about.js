
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

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
//  Get the modal
var modal = document.getElementById('id01');

$(document).click(function(event){
  if(event.target==modal){
    $('#id01').css('display','none');
  }
});
 });
