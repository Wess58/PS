$(function() {
    var header = $(".navbar");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 525) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });

});
//ONSCROLL OPACITY
$(document).ready(function(){
  $(window).scroll(function(){
    $('.Intro').css("opacity", 1 - $(window).scrollTop() / 800 )
  });
});

//BACK TO TOP BUTTON
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
