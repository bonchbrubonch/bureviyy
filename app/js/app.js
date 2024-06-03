$(function () {
  $(".region").select2({
    minimumResultsForSearch: -1
  });
  $(".city").select2({
    minimumResultsForSearch: -1
  });
  $(".department").select2({
    minimumResultsForSearch: -1
  });

});

/*меню гамбургер*/
document.querySelector(".header__menu-btn").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".header__menu").classList.toggle("open");
  document.body.classList.toggle("lock");
});

document.addEventListener("DOMContentLoaded", function () {
  const categoryTitles = document.querySelectorAll(".header__menu");

  categoryTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});

/*пошук в шапці*/
document.addEventListener("DOMContentLoaded", function () {
  const searchElement = document.querySelector(".header__search");
  const searchButton = document.querySelector(".header__search-btn");
  const searchResult = document.querySelector(".header__search-resalt");

  searchButton.addEventListener("click", function () {
    searchElement.classList.toggle("active");
  });

  searchResult.addEventListener("click", function () {
    searchElement.classList.remove("active");
  });
});

/*кнопка показати більше на головній сторінці*/
document.addEventListener("DOMContentLoaded", function () {
  const showButtons = document.querySelectorAll(".talk__show");

  showButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const talkText = button.previousElementSibling;
      if (talkText && talkText.classList.contains("talk__text")) {
        talkText.classList.toggle("open");
      }
    });
  });
});

/*фільр*/
document.addEventListener("DOMContentLoaded", function () {
  const categoryTitles = document.querySelectorAll(".category-list__title");

  categoryTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const categoryTitles = document.querySelectorAll(".category-list__chek");

  categoryTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const filterBtn = document.querySelector(".filter__btn");
  const categoryList = document.querySelector(".category-list");
  const categoryListClose = document.querySelector(".category-list__close");
  const body = document.body;

  filterBtn.addEventListener("click", function() {
      categoryList.classList.add("open");
      body.classList.add("lock");
  });

  categoryListClose.addEventListener("click", function() {
      categoryList.classList.remove("open");
      body.classList.remove("lock");
  });
});

/*додавання товарy до обраного*/
document.addEventListener("DOMContentLoaded", function () {
  const likeTitles = document.querySelectorAll(".card__like");
  const basketTitles = document.querySelectorAll(".card__basket");

  function toggleActiveClass(elements) {
    elements.forEach(function (element) {
      element.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });
  }

  toggleActiveClass(likeTitles);
  toggleActiveClass(basketTitles);
});



/*иеню особистого кабінету*/
document.addEventListener("DOMContentLoaded", function() {
  const cabinetBtn = document.querySelector(".cabinet__btn");
  const cabinetLeft = document.querySelector(".cabinet__left");
  const cabinetClose = document.querySelector(".cabinet__close");
  const body = document.body;

  cabinetBtn.addEventListener("click", function() {
      cabinetLeft.classList.add("open");
      body.classList.add("lock");
  });

  cabinetClose.addEventListener("click", function() {
      cabinetLeft.classList.remove("open");
      body.classList.remove("lock");
  });
});

var swiper = new Swiper(".intro__slider", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".catalog__slider", {
  spaceBetween: 30,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    470: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
  }
});

var swiper = new Swiper(".talk__slider", {
  spaceBetween: 30,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
  }
});

var swiper = new Swiper(".product__slider-side", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    767: {
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      direction: "vertical",
    },
  }
});
var swiper2 = new Swiper(".product__slider", {
  loop: true,
  effect: "fade",
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".u-info__slider", {
  slidesPerView: 3,
  // freeMode: true,
  // watchSlidesProgress: true,
  direction: "vertical",
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

});