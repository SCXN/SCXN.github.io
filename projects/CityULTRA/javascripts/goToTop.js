window.onscroll = function() {toppy()};
function toppy() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300 ) {
      document.getElementById("goToTop").style.transform=" translateY(0px)";
      document.getElementById("goToTop2").classList.add('revealed');
    } else {
      document.getElementById("goToTop").style.transform=" translateY(200px)";
      document.getElementById("goToTop2").classList.remove('revealed');
    }
  }
