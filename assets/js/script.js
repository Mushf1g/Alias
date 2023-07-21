//  Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: false,
    },
    pagination: {
      //  el: ".swiper-pagination",
      //  type: "progressbar",
    },
    navigation: {
      // nextEl: ".swiper-button-next",
      // prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  // hamburger menu
  let hamburger = document.querySelector(".bi-list-nested");

  function myFunction() {
    let nav = document.querySelector(".info");
    nav.classList.toggle("active");
    hamburger.classList.toggle("bi-x-lg");
  }



  // Calculate
  function Calc() {
    document.querySelector(".calculate_C").style.display = "block";
  }
  function CalcOff() {
    document.querySelector(".calculate_C").style.display = "none";
  }

  // Search
  function searchOn() {
    document.querySelector(".search__input").style.display = "block";
    document.querySelector(".navbar__links").style.display = "none";
    document.querySelector(".navbar__logo").style.display = "none";
    document.querySelector(".bi-x").style.display = "block";
    document.querySelector(".bi-search").style.opacity = "0";
  }
  function searchOff() {
    document.querySelector(".search__input").style.display = "none";
    document.querySelector(".navbar__links").style.display = "none";
    document.querySelector(".navbar__logo").style.display = "block";
    document.querySelector(".bi-x").style.display = "none";
    document.querySelector(".bi-search").style.opacity = "1";
  }

  // header hover slide

  $(document).ready(function () {
    const animation = () => {
      const activeCarouselElement = $(".flag.mactive");
      activeCarouselElement.removeClass("mactive");

      const nextCarouselElement = activeCarouselElement.next().length
        ? activeCarouselElement.next()
        : activeCarouselElement.siblings()[0];
      $(nextCarouselElement).addClass("mactive");
    };

    let animationInterval = setInterval(animation, 3500);

     $(".flag").hover(function () {
       $(".flag.mactive").removeClass("mactive");
       $(this).addClass("mactive");
       clearInterval(animationInterval);
     });

     $(".flag").mouseleave(function () {
       animationInterval = setInterval(animation, 2500);
     });
  });