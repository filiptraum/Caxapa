  document.addEventListener("DOMContentLoaded", () => {
      function gabmurgerFunc(gamburderSelector, navigationSelector, itemsSelector) {

    const gamburger = document.querySelectorAll(gamburderSelector);
    const navigation = document.querySelector(navigationSelector);
    const items = document.querySelectorAll(itemsSelector);
    const header = document.querySelector('.header');
    const body = document.querySelector('.body');

    items.forEach(item =>{
      item.addEventListener('click', () => {
        gamburger.forEach(item => {
          item.classList.remove('opened');
        });
        
        header.classList.remove('opened');

        body.classList.remove('opened');

        menuOpen = false;
        navigation.classList.remove('opened');
      });
    });

    let menuOpen = false;
    gamburger.forEach(item => {
      item.addEventListener('click', () => {
        if (!menuOpen) {

          if (header.clientWidth < 600) {
            header.classList.add('opened')
          }

          body.classList.add('opened');

          gamburger.forEach(item => {
            item.classList.add('opened');
          });

          menuOpen = true;
          navigation.classList.add('opened');
        } else {
          header.classList.remove('opened')

          body.classList.remove('opened');

          gamburger.forEach(item => {
            item.classList.remove('opened');
          });

          menuOpen = false;
          navigation.classList.remove('opened');
        }
      });
    });

    navigation.addEventListener('click', (e) => {
      const el = e.target;

      if (el.classList.contains('popup-menu')) {
        header.classList.remove('opened')

        body.classList.remove('opened');

        gamburger.forEach(item => {
          item.classList.remove('opened');
        });

        menuOpen = false;
        navigation.classList.remove('opened');
      }
    });
  }
  gabmurgerFunc(".gamburger", ".popup-menu", ".popup-menu-close");;

    function headerPhonePopup() {
      const link = document.querySelector('.header-top__phones');
      const popupItems = document.querySelectorAll('.header-top__popup-item');

      let menuIsOpen = false;
      link.addEventListener('click', () => {
        if (!menuIsOpen) {
          link.classList.add('opened');
          menuIsOpen = true;
        }else {
          link.classList.remove('opened');
          menuIsOpen = false;
        }
      });

      popupItems.forEach(item => {
        item.addEventListener('click', () => {
          link.classList.remove('opened');
          menuIsOpen = true;
        });
      });

      document.addEventListener('click', (e) => {
        const el = e.target;

        if (!el.classList.contains('header-top__phones') && !el.parentNode.classList.contains('header-top__phones') && !el.parentNode.parentNode.classList.contains('header-top__phones')) {
          link.classList.remove('opened');
          menuIsOpen = false;
        }
      });
    }

    headerPhonePopup();

    function popupVideo() {
      const btnOpen = document.querySelector('.video__btn');
      const btnClose = document.querySelector('.popup-video__gamburger');
      const popupVideo = document.querySelector('.popup-video');
      const video = document.querySelector('.popup-video__item');
      const body = document.querySelector('.body');

      btnOpen.addEventListener('click', () => {
        popupVideo.classList.add('opened');
        body.classList.add('opened');
      });

      btnClose.addEventListener('click', () => {
        popupVideo.classList.remove('opened');
        body.classList.remove('opened');
        video.pause();
      });

    }

    popupVideo();

    function aboutMoreText() {
      const btn = document.querySelector('.about__btn');
      const text = document.querySelector('.about__hidden-text');

      btn.addEventListener('click', () => {
        btn.classList.add('clicked');
        text.classList.remove('hidden');
      });
    }

    aboutMoreText();

    function testimonialMoreBoxes() {
      const items = document.querySelectorAll('.testimonial__hidden-box');
      const btn = document.querySelector('.testimonial__btn');

      btn.addEventListener('click', () => {
        items.forEach(item => {
          item.classList.remove('hidden');
        });
        btn.classList.add('clicked');
      });
    }

    testimonialMoreBoxes();

    function slider(container, track, btnPrev, btnNext, items) {

      let position = 0;
      let slidesToShow = 6;
      const slidesToScroll = 1;
      let sliderContainer = document.querySelector(container);
      const sliderTrack = document.querySelector(track);
      const sliderBtnPrev = document.querySelector(btnPrev);
      const sliderBtnNext = document.querySelector(btnNext);
      const sliderItems = document.querySelectorAll(items);
      const itemsCount = sliderItems.length;
      let itemWidth = sliderContainer.clientWidth / slidesToShow;
      let movePosition = slidesToScroll * itemWidth;

      function widthForItems() {
        let wrapperWidth = +document.querySelector('.wrapper').clientWidth;
        if (wrapperWidth > 1310) {
          slidesToShow = 6;
        }
        if (wrapperWidth < 1310 && wrapperWidth > 1170) {
          slidesToShow = 5;
        }

        if (wrapperWidth < 1170 && wrapperWidth > 1000) {
          slidesToShow = 4;
        }

        if (wrapperWidth < 1000 && wrapperWidth > 720) {
          slidesToShow = 3;
        }

        if (wrapperWidth < 720 && wrapperWidth > 540) {
          slidesToShow = 2;
        }

        if (wrapperWidth < 540) {
          slidesToShow = 1;
        }

        sliderContainer = document.querySelector(container);
        itemWidth = sliderContainer.clientWidth / slidesToShow;
        movePosition = slidesToScroll * itemWidth;
        position = 0;
        setPosition();
        checkBtns();
        sliderItems.forEach((item) => {
          item.style.minWidth = `${itemWidth}px`;
        });
      }

      widthForItems();

      window.addEventListener('resize', () => {
        widthForItems();
      });

      sliderBtnNext.addEventListener('click', () => {
        let itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
      });

      sliderBtnPrev.addEventListener('click', () => {
        let itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
      });

      function setPosition() {
        sliderTrack.style.transform = `translateX(${position}px)`;
      }

      function checkBtns() {
        sliderBtnPrev.disabled = position === 0;
        sliderBtnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
        if (sliderBtnPrev.disabled) {
          sliderBtnPrev.style.opacity = 0.5;
          sliderBtnPrev.style.pointerEvents = 'none';

        } else {
          sliderBtnPrev.style.opacity = 1;
          sliderBtnPrev.style.pointerEvents = 'visible';

        }
        if (sliderBtnNext.disabled) {
          sliderBtnNext.style.opacity = 0.5;
          sliderBtnNext.style.pointerEvents = 'none';
        } else {
          sliderBtnNext.style.opacity = 1;
          sliderBtnNext.style.pointerEvents = 'visible';
        }
      }
      checkBtns();
    }

    slider(".slider-certifications", ".slider-certifications__track", ".certifications__left-arrow", ".certifications__right-arrow", ".slider-certifications__box");;

    function certFullscreen() {
      const items = document.querySelectorAll('.slider-certifications_item');
      const popup = document.querySelector('.popup-document');
      const popupImg = document.querySelector('.popup-document__img');
      const btnClose = document.querySelector('.popup-document__gamburger');
      const body = document.querySelector('.body');

      items.forEach(item => {
        item.addEventListener('click', () => {
          let imgSrc = item.querySelector('.slider-certifications__img').getAttribute('src');
          popupImg.setAttribute('src', imgSrc);
          popup.classList.add('opened');
          body.classList.add('opened');
        });
      });

      btnClose.addEventListener('click', () => {
        popup.classList.remove('opened');
        body.classList.remove('opened');
      });
    }

    certFullscreen();
  });