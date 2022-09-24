//Parallax effect
function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}
window.addEventListener("scroll", function() {
    parallax(".mega", window.scrollY, .45);
});
//  //slide scroll transition-in accents
//  window.addEventListener("scroll", function() {
//     var hT = $('.menuDolphy').offset().top,
//         hH = $('.menuDolphy').outerHeight(),
//         wH = $(window).height(),
//         wS = $(this).scrollTop();
//     if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
//        $('#menuDolphy').addClass('slide')
       
//     } else {
//        $('#menuDolphy').removeClass('slide')
//     }
//  });