// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar-wagon").offset().top > 1) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);


// Scroll back to top button:
$(document).ready(function() {
  var offset = 30;
  var duration = 400;
  $('.back-to-top').css({"display": "none"});
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').slideDown(duration);
    } else {
      $('.back-to-top').slideUp(duration);
    }
  });
  $('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
});
