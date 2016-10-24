$(document).ready(function() {
  var myElems = ["#myClass", "#myClass2", "#myClass3"];
  myElems.forEach(function(elem) {
    $(elem).click(function() {
      $(elem).toggleClass("pHighlight");
    });
  });

  // $("#myClass").click(function() {
  //   $("#myClass").toggleClass("pHighlight");
  // });
  // $("#myClass2").click(function() {
  //   $("#myClass2").toggleClass("pHighlight");
  // });
  // $("#myClass3").click(function() {
  //   $("#myClass3").toggleClass("pHighlight");
  // });
});
