// MODAL
//Grab elements
    // Get the modal
var _modal = document.querySelectorAll('.modals');
let modal=Array.from(_modal)

    // Get the image and insert it inside the modal - use its "alt" text as a caption
var _img = document.querySelectorAll('.galleryImgs figure img');
let img=Array.from(_img)

var _modalImg = document.querySelectorAll('.modalImg');
let modalImg=Array.from(_modalImg);

    //Define
function putToModal(item,index){
    item.onclick = function(){
        console.log(item)
        modal[index].style.display = 'block';
        modalImg[index].src = item.src;
        $('body').addClass('stop-scrolling')
    }
};
function closeModal(item,index){
        // When the user clicks on <span> (x), close the modal
    item.onclick = function() {
        $('body').removeClass('stop-scrolling')
        if(modalImg[index].classList.contains('out')){
            modalImg[index].classList.remove('out');
        }else{
            modalImg[index].classList.add('out');
        }
        setTimeout(function() {
            item.style.display = 'none';
            modalImg[index].classList.remove('out');
            modalImg[index].class='modal-content';
        }, 400);
    }
};
    //Call
img.forEach(putToModal);
modal.forEach(closeModal);
