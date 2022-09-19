window.onscroll = function() {toppy()};
function toppy() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
      document.getElementById("goToTop").style.transform=" translateX(0px)";
    } else {
      document.getElementById("goToTop").style.transform=" translateX(85px)";
    }
  }