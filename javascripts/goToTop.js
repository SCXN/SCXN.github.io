window.onscroll = function() {toppy()};
function toppy() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
      document.getElementById("goToTop").style.transform=" translateX(0px)";
      document.getElementById("goToTop2").classList.add('revealed');
    } else {
      document.getElementById("goToTop").style.transform=" translateX(101px)";
      document.getElementById("goToTop2").classList.remove('revealed');
    }
  }
