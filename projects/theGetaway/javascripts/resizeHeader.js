window.onscroll = function() {scrollEvent()};
function scrollEvent() {
    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110 ) {
      document.getElementById("turtle").style.transform="scale(30%)";
      document.getElementById("goToTop").style.transform=" translateX(0px)";
    } else {
      document.getElementById("turtle").style.transform="scale(100%)";
      document.getElementById("goToTop").style.transform=" translateX(85px)";
    }
  }