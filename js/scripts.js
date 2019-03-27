$(document).ready(function(){
  $("#formOne").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var adressInput = $("input#adress").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".adress").text(adressInput);

    $("#endLetter").show();
    event.preventDefault();

  });
});
