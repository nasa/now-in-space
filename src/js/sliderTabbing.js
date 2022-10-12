import { Swiper, SwiperSlide } from "swiper/vue";

const slideFocus = function slideFocus(e) {
  if (e.key === 'Tab') {
        console.log("Hitting Tab");

      var focusEl = document.activeElement.closest('.swiper-slide');
      if (null != focusEl && !focusEl.classList.contains('swiper-slide-active')) {
          var slideIndex = Array.prototype.indexOf.call(focusEl.parentNode.children, focusEl);
          Swiper.slideTo(slideIndex);
      }
  }
};

document.getElementById("swiper-carousel").addEventListener('keydown', slideFocus);
