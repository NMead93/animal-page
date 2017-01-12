$(document).ready(function() {
  $("#formSection form").submit(function(event) {
    event.preventDefault()
    var animal = $("input:radio[name=animal]:checked").val();
    $(".main").hide();
    $(".options button").show();

    if (animal === "turtle") {
      $(".TurtlePage").show()
    } else if (animal === "snake") {
      $(".SnakePage").show()
    } else {
      $(".InsectPage").show()
    }
  })

  $(".options button").click(function() {
    $(".TurtlePage").hide();
    $(".SnakePage").hide();
    $(".InsectPage").hide();
    $(this).hide();
    $(".main").show();
  });
});
