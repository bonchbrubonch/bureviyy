$(function () {
  $(".region").select2({
  });
  $(".city").select2({
  });
  $(".department").select2({
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

document.addEventListener("DOMContentLoaded", function() {
  const headerSearch = document.querySelector(".header__search");
  const headerSearchInput = headerSearch.querySelector("input");
  const headerSearchResalt = document.querySelector(".header__search-resalt");

  document.addEventListener("click", function(event) {
    if (!headerSearch.contains(event.target) && !headerSearchResalt.contains(event.target)) {
      headerSearch.classList.remove("active");
    }
  });
  headerSearch.addEventListener("click", function(event) {
    event.stopPropagation();
  });
  headerSearchResalt.addEventListener("click", function(event) {
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

document.addEventListener("DOMContentLoaded", function() {
  const categoryList = document.querySelector(".category-list");

  if (categoryList) {
    const filterBtn = document.querySelector(".filter__btn");
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
document.addEventListener("DOMContentLoaded", function() {
  const cabinet = document.querySelector(".cabinet");

  if (cabinet) {
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
  }
});


/*кнопки фільру за кольором та розміром товару на сторінці product*/
document.addEventListener("DOMContentLoaded", function() {
  function addActiveClass(selector) {
    const links = document.querySelectorAll(selector);

    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();

        links.forEach(function(item) {
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


/*стилізація тіні курсора*/
const cursor = document.querySelector('#cursor');
let mouse = { x: 300, y: 300 };
let pos = { x: 0, y: 0 };
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


