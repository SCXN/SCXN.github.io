//navPeep
$(function(){
    $('.navLink').each(function() {
      if ($(this).prop('href') == window.location.href) {
        $(this).addClass('current');
      }
    });
    $('#projectCatagories > li > a').each(function() {
        if ($(this).prop('href') == window.location.href) {
          $(this).addClass('current');
        }
      });
  });
  
//Project gallery menu navigation
let projectGalleryItems=document.querySelectorAll('.galleryMenuSelectors');
let projectExhibit=document.getElementById('postFigure');
let postBody=document.getElementById('postBody');
for(let i=0; i<projectGalleryItems.length; i++){
    projectGalleryItems[i].onmouseover=function(){
        projectExhibit.innerHTML=projectGalleryItems[i].innerHTML;
        postBody.innerHTML=projectGalleryItems[i].innerHTML;
    }
}


// Loading animation - Wait for window load
	window.onload = function() {
        $(".se-pre-con").fadeOut("slow");;
      };

//Initialize Bootstrap+Popper.js Tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

//Copy wallet addresses to clipboard
let copyMe=document.querySelectorAll('.copyWallet')
let publicKeys=document.querySelectorAll('.publicKeys')
let walletAddresses=[]
publicKeys.forEach(pushKeys)
copyMe.forEach(copyWallet)
function pushKeys(item){
    walletAddresses.push(item.innerHTML)
}
function copyWallet(item, index){
    item.onclick=function(){
        navigator.clipboard.writeText(walletAddresses[index])
    }
}

//Wallet popovers
$(function () {
    $('[data-toggle="popover"]').popover({
      container: 'body',
      trigger: 'focus'
    })
  })

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
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}

//Present #menuBar aka level two tier of #navBar
    //grab .menuButtons as nodeList
let _buttons = document.querySelectorAll('.menuButtons');
    //grab .menus as nodeList
let _menus = document.querySelectorAll('.level2menus');
    //store _buttons nodeList as array
let buttons=Array.from(_buttons)
    //store _menus nodeList as array
let menus=Array.from(_menus)
let _regularLink=document.querySelectorAll('.navLink');
let regularLink=Array.from(_regularLink);
regularLink.forEach(deactivateOtherNavItems);
function deactivateOtherNavItems(item){
    item.onclick=function(){
        menus.forEach(deactivateMenus)
        buttons.forEach(deactivateButtons)
        function deactivateMenus(item){
            item.classList.add('hide');
            }
        function deactivateButtons(item){
            item.classList.remove('aActive');
            }
        }
    }

for(let i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
        //select menu from nav
        buttons[i].classList.toggle('aActive');
        
        menus[i].classList.toggle('hide');
        menus[i].style.boxShadow = "-10px 0px 20px black";
        //filter out otherbuttons and otherMenus to switch out
        let otherButtons=Object.values(buttons).filter(value => (value !== buttons[i]));
        let otherMenus=Object.values(menus).filter(value => (value !== menus[i]));
        //Switch out otherbuttons and otherMenus
        otherButtons.forEach(deactivateOtherButtons);
        otherMenus.forEach(hideOtherMenus);
        function deactivateOtherButtons(item){
            item.classList.remove('aActive');
        }
        function hideOtherMenus(item){
            item.classList.add('hide');
        }
    }
}

//Act on images from tumbler posts in a gallery capacity
let _figures = document.querySelectorAll('.galleryItem figure img');
    //store _figures nodeList as array
let figures=Array.from(_figures)

let _articles=document.querySelectorAll('.galleryMoreInfo');
let articles=Array.from(_articles);
//grab the a tags in share inc
let _shares=document.querySelectorAll('.birdhouseSharePanes');
let shares=Array.from(_shares);

const galleryBG=document.getElementById('galleryBG');
const galleryCase=document.getElementById('galleryBGCase');
const body=document.querySelector('body');
let reader=document.getElementById('gallerySpyglass');
for(let i=0;i<figures.length;i++){
    figures[i].onclick=function(){
        shares[i].classList.remove('hide');
        reader.classList.remove('hide');
        let x=articles.length;
        let otherShares=Object.values(shares).filter(value => (value !== shares[i]));
        otherShares.forEach(hideOtherShares);
        articles.forEach(makeAShowMe);
        function hideOtherShares(item){
            item.classList.add('hide');
            console.log(item)
        }
        function makeAShowMe(item, index){
            if(item.getAttribute('id')==='showMe'){
                item.classList.remove('reveal');
                icon.classList.remove('fa-check');
            }
            if(index===i){
                item.setAttribute('id','showMe')
                //Toggle gallery item write-up visibilty
                let articleText=document.getElementById('showMe');
                let icon=document.getElementById('icon');
                let _galleryMoreInfoCase=document.querySelectorAll('.galleryMoreInfoCase');
                reader.onclick=function(){
                    articleText.classList.toggle('reveal');
                    icon.classList.toggle('fa-check');
                    _galleryMoreInfoCase.forEach(inify);
                    function inify(item){
                        let icon=document.getElementById('icon');
                        if(icon.classList.contains('fa-check')===true){
                            item.classList.add('in')
                        }else{
                            item.classList.remove('in');
                        }
                    }
                }
            }else{
               item.setAttribute('id','');
            }
        }
        galleryBG.style.backgroundImage=`url(${figures[i].src})`;
        body.style.backgroundImage=`url(${figures[i].src}),linear-gradient(45deg, rgba(132, 8, 93, 0.831), rgba(15, 238, 216, 0.27))`;
    }
}

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