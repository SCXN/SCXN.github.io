//pop logo at bottom
$(window).on('scroll', function() {
    if($(window).scrollTop() >= $('body').offset().top + $('body').outerHeight() - window.innerHeight) {
        $('.doStuff').removeClass('down').addClass('up');
    }else{
        $('.doStuff').removeClass('up').addClass('down');
    }
  });
//fade scroll transition-in accents
$(window).scroll(function() {
    var hT = $('.ultra').offset().top,
        hH = $('.ultra').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
       $('#ultra').addClass('view')
    } else {
       $('#ultra').removeClass('view')
    }
 });
 //slide scroll transition-in accents
$(window).scroll(function() {
    var hT = $('.slidingPic').offset().top,
        hH = $('.slidingPic').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
       $('#slidingPic').addClass('slide')
    } else {
       $('#slidingPic').removeClass('slide')
    }
 });
//Parallax effect
function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}
window.addEventListener("scroll", function() {
    parallax(".mega", window.scrollY, -.02);
    parallax(".ultra", window.scrollY, -.3);
});
