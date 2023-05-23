import Swiper from '../vendor/swiper';
const trainersSwiper = document.querySelector('.coaches__wrapper-list');

const initTrainersSwiper = () => {
  if (trainersSwiper) {
    (() =>
      new Swiper('.coaches__wrapper-list', {
        direction: 'horizontal',
        initialSlide: -4,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {

          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },


          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      })
    )();
  }
};

export {initTrainersSwiper};
