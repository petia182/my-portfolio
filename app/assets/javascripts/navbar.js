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
