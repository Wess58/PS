$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 650) {
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
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
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
  toggle_open_text = "MENU";
  toggle_close_text = "CLOSE";

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


//INITIALIZE SLICK SLIDER
$(document).ready(function() {
  $('.autoplay').slick({
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    //  centerMode: true,
    // centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{
      breakpoint: 1030,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 4000


      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false

      }
    }, {
      breakpoint: 500,
      settings: {
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px'


      }
    }]
  });
});
