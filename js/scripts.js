$(function() {
  $("#appointmentForm").submit(function(event) {
    var nameInput = $("input#name").val();
    var appointmentInput = $("input#appointment").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start").val();

    $(".name").text(nameInput);
    $(".appointment").text(appointmentInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);

    $("#confirmationPage").show();

    event.preventDefault();
  });
});
