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

  });