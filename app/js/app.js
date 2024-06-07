$(function () {
  $(".region").select2({});
  $(".city").select2({});
  $(".department").select2({});

  $('.u-info__slider').slick({
    slidesToShow: 3,
    vertical: true,
    infinite: false,
    prevArrow: '<button class="slider__arrows left"><svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928935C33.9526 0.538411 33.3195 0.538411 32.9289 0.928935C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-8.74228e-08 9L40 9L40 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#fff"></path></svg></button>',
    nextArrow: '<button class="slider__arrows right"><svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928935C33.9526 0.538411 33.3195 0.538411 32.9289 0.928935C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-8.74228e-08 9L40 9L40 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#fff"></path></svg></button>',
  });

  $(document).ready(function() {
    var $uInfoRight = $(".u-info__right");
    var $reviews = $uInfoRight.find(".review");
  
    if ($reviews.length < 3) {
      $uInfoRight.addClass("auto-height");
    }
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

document.addEventListener("DOMContentLoaded", function () {
  const headerSearch = document.querySelector(".header__search");
  const headerSearchInput = headerSearch.querySelector("input");
  const headerSearchResalt = document.querySelector(".header__search-resalt");

  document.addEventListener("click", function (event) {
    if (!headerSearch.contains(event.target) && !headerSearchResalt.contains(event.target)) {
      headerSearch.classList.remove("active");
    }
  });
  headerSearch.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  headerSearchResalt.addEventListener("click", function (event) {
    event.stopPropagation();
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

document.addEventListener("DOMContentLoaded", function () {
  const categoryList = document.querySelector(".category-list");

  if (categoryList) {
    const filterBtn = document.querySelector(".filter__btn");
    const categoryListClose = document.querySelector(".category-list__close");
    const body = document.body;

    filterBtn.addEventListener("click", function () {
      categoryList.classList.add("open");
      body.classList.add("lock");
    });

    categoryListClose.addEventListener("click", function () {
      categoryList.classList.remove("open");
      body.classList.remove("lock");
    });
  }
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


/*меню особистого кабінету*/
document.addEventListener("DOMContentLoaded", function () {
  const cabinet = document.querySelector(".cabinet");

  if (cabinet) {
    const cabinetBtn = document.querySelector(".cabinet__btn");
    const cabinetLeft = document.querySelector(".cabinet__left");
    const cabinetClose = document.querySelector(".cabinet__close");
    const body = document.body;

    cabinetBtn.addEventListener("click", function () {
      cabinetLeft.classList.add("open");
      body.classList.add("lock");
    });

    cabinetClose.addEventListener("click", function () {
      cabinetLeft.classList.remove("open");
      body.classList.remove("lock");
    });
  }
});


/*кнопки фільру за кольором та розміром товару на сторінці product*/
document.addEventListener("DOMContentLoaded", function () {
  function addActiveClass(selector) {
    const links = document.querySelectorAll(selector);

    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        links.forEach(function (item) {
          item.classList.remove("active");
        });

        this.classList.add("active");
      });
    });
  }

  addActiveClass(".product__size a");
  addActiveClass(".product__color a");
});



/*start animation========*/
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}
/*end animation========*/



var swiper = new Swiper(".intro__slider", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".catalog__slider", {
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  speed: 1000,

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

// var swiper = new Swiper(".u-info__slider", {
//   slidesPerView: 3,
//   direction: "vertical",
//   loop: true,
//   spaceBetween: 20,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },

// });


/*стилізація тіні курсора*/
const cursor = document.querySelector('#cursor');
let mouse = {
  x: 300,
  y: 300
};
let pos = {
  x: 0,
  y: 0
};
const speed = 0.1; // between 0 and 1

const updatePosition = () => {
  pos.x += (mouse.x - pos.x) * speed;
  pos.y += (mouse.y - pos.y) * speed;
  cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
};

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);

function loop() {
  updatePosition();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
/*стилізація тіні курсора*/




if ($('.slick-slider').length > 0){
  $(".slick-slider").slick("refresh"); $(".slick-slider").slick("setPosition");
}