// entrance magic
$(function () {
  $(".z-gallery-item").addClass("show");
  setTimeout(function () {
    $(".z-gallery-item").removeClass("show");
  }, 1500);
});
// initialize isotope
var $grid = $(".z-gallery").isotope({
  itemSelector: ".z-gallery-item",
  percentPosition: true,
  layoutMode: "fitRows",
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress(function () {
  $grid.isotope("layout");
});
//   button controls
$(".z-portfolio-filter button").click(function () {
  $(".z-portfolio-filter button").removeClass("active");
  $(this).addClass("active");

  //  filter functionality
  var selector = $(this).attr("data-filter");
  $(".z-gallery").isotope({
    filter: selector,
  });
  return false;
});
