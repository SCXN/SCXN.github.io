// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {resizeHeaderAlt()};
function resizeHeaderAlt() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
    document.getElementById("logoSm").style.width = "33px";
    document.getElementById("logoSm").style.paddingTop = "2px";
    document.getElementById("logoSm").style.paddingBottom = "2px";
    document.getElementById("return").style.fontSize = "15pt";
    document.getElementById("goToTop").style.transform=" translateX(0px)";
  } else {
    document.getElementById("logoSm").style.width = "180px";
    document.getElementById("logoSm").style.paddingTop = "9px";
    document.getElementById("logoSm").style.paddingBottom = "11px";
    document.getElementById("return").style.fontSize = "25pt";
    document.getElementById("goToTop").style.transform=" translateX(85px)";
  }
}
