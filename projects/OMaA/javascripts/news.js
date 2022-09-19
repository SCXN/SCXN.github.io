//Package-up most recent blogged 'news' image.
//Send image to openGraph & body bgImg
let copycopy=document.getElementById('copycopy');
let recentImage=document.querySelector('.feature figure img').src;
document.body.style.backgroundImage=`url(${recentImage})`;