//fullCalendar
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
      googleCalendarApiKey:'AIzaSyDH5BQhWT7HzqadcO9pjWhTxew9eYKD1UA',
      events:{
          googleCalendarId:'ujjrp3haj2clujetk8ar7li94s@group.calendar.google.com',
          className: 'gcal-event'
      }
    ,nitialView: 'dayGridMonth'
  });
  calendar.render();
});
// Wait for window load
window.onload = function() {
    $(".se-pre-con").fadeOut("slow");
}
//navPeep
$(function(){
    $('#navCase > nav > ul > li > a').each(function() {
      if (window.location.href.indexOf(this) > -1) {
        $(this).addClass('current');
        $('#homeLink').removeClass('current');
        $('body').addClass(`${this.innerHTML}Bg`);
      }
      });
      $('div.launcher.plux.p-1.ps-md-0.ms-md-0.col-12.col-md-4.relative > a').each(function() {
        if (window.location.href.indexOf(this) > -1) {
          $('body').addClass(`drinksBg`);
          $('#menuLink').addClass('current');
        }
        });
      $('#homeLink').each(function() {
        if (window.location.href.indexOf(this) > -1) {
          $(this).addClass('current');
        }
        });
  });

// mobile hamburger menu
let closer=document.getElementById('closer');
let nav=document.querySelector('nav');
let openner=document.getElementById('wow');
let bodddy=document.querySelector('body');

function navAddFull(){
    nav.classList.add('fullScreenSmall');
    $('body').addClass('stop-scrolling');
}
function navToggleFull(){
    nav.classList.remove('fullScreenSmall');
    $('body').removeClass('stop-scrolling');
}

openner.addEventListener("click", navAddFull);
closer.addEventListener("click", navToggleFull);

//Hide nav bar on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).on('scroll',function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure scroll is more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    //If scrolled down past navbar, add class .nav-up.
    //Necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#navCase').removeClass('nav-down').addClass('nav-up');
        // $('#menuSpy').removeClass('menu-down').addClass('menu-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#navCase').removeClass('nav-up').addClass('nav-down');
            // $('#menuSpy').removeClass('menu-up').addClass('menu-down');
        }
    }
    lastScrollTop = st;
}

// menu switch
let eater=document.getElementById('eatToggle');
let drinker=document.getElementById('drinkToggle');
let eatMenu=document.getElementById('eatMenu');
let drinkMenu=document.getElementById('drinkMenu');
let collapseableEats=document.getElementById('collapseEat');
function eating(){
    collapseableEats.classList.remove('collapse');
    eater.classList.add('current');
    drinker.classList.remove('current');
    eatMenu.classList.replace('hide', 'showFlex');
    drinkMenu.classList.replace('showFlex', 'hide');
}
function drinking(){
    collapseableEats.classList.add('collapse');
    drinker.classList.add('current');
    eater.classList.remove('current');
    eatMenu.classList.replace('showFlex', 'hide');
    drinkMenu.classList.replace('hide', 'showFlex');
}
eater.addEventListener("click", eating);
drinker.addEventListener("click", drinking);


/* Google maps API */
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat:48.059, lng: -123.064 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;

//fullCalendar
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        googleCalendarApiKey:'AIzaSyDH5BQhWT7HzqadcO9pjWhTxew9eYKD1UA',
        events:{
            googleCalendarId:'ujjrp3haj2clujetk8ar7li94s@group.calendar.google.com',
            className: 'gcal-event'
        }
      ,nitialView: 'dayGridMonth'
    });
    calendar.render();
  });