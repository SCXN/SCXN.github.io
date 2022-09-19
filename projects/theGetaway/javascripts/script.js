// Loading animation - Wait for window load
	window.onload = function() {
        $(".se-pre-con").fadeOut("slow");;
      };

//Initialize Bootstrap+Popper.js Tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
