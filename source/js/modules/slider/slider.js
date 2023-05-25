import Swiper from '../../vendor/swiper';
const coachesSwiper = document.querySelector('.coaches__wrapper-list');
const reviewsSwiper = document.querySelector('.reviews__list');

const initReviewsSwiper = () => {
  if (reviewsSwiper) {
    (() =>
      new Swiper('.reviews__list', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 0,

        navigation: {
          nextEl: '.reviews__button--next',
          prevEl: '.reviews__button--prev',
        },
      })
    )();
  }
};

const initCoachesSwiper = () => {
  if (coachesSwiper) {
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

export {initCoachesSwiper, initReviewsSwiper};
