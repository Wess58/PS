$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 630) {
    $('.navbar-brand').css('color', '#000')

  } else {
    $('.navbar-brand').css('color', '#fff')
    
  }
});


//BACK TO TOP BUTTON -->
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


//BACK TO TOP BUTTON END <--



//CIRCLE MENU Toggle
$(document).ready(function() {

  toggle = document.querySelectorAll(".toggle")[0];
  nav = document.querySelectorAll("nav")[0];
  toggle_open_text = "Menu";
  toggle_close_text = "Close";

  toggle.addEventListener(
    "click",
    function() {
      nav.classList.toggle("open");

      if (nav.classList.contains("open")) {
        toggle.innerHTML = toggle_close_text;

      } else {
        toggle.innerHTML = toggle_open_text;
      }
    },
    false
  );

  setTimeout(function() {
    nav.classList.toggle("open");
  }, 100);
});
