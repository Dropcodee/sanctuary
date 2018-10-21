$(function() {
  const users = {
    name: "Abraham Ugbeshe",
    reg_no: "1700172"
  };
  $(document).on("click", ".change_text", function() {
    $(".change_text").html("<img src='image/loader.gif' />");
    $.ajax({
      method: "GET",
      url: "http://dos.com/users",
      data: { users },
      cache: false,
      success: function() {
        $(".show").html(users.name);

        $(".change_text").html("Changed");
      },
      error: function() {
        $(".show").html("Sorry couldn't connect to the server");

        $(".change_text").html("No change");
      }
    });
  });
});
