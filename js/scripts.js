$(document).ready(function() {

  var clickable = ["header", "paragraph", "image"];

  // var counter = 0;
  clickable.forEach(function(clickit) {
    $("." + clickit).click(function(event) {
      alert("This is a " + clickit);
    });
      // counter++;
    });
  });



  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
  // });


  // $(document).ready(function() {
  //   $("#blanks form").submit(function(event) {
  //
  //     var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
  //     blanks.forEach(function(blank) {
  //       var input = $("input#" + blank).val();
  //       $("." + blank).text(input);
  //     });
