window.onscroll = function() {toppy()};
function toppy() {
    if (document.body.scrollTop > 251 || document.documentElement.scrollTop > 251 ) {
      document.getElementById("goToTop").style.transform=" translateX(0px)";
      document.getElementById("goToTop2").classList.add('revealed');
    } else {
      document.getElementById("goToTop").style.transform=" translateX(101px)";
      document.getElementById("goToTop2").classList.remove('revealed');
    }
  }
