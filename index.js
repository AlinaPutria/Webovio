window.addEventListener('scroll', function () {
  // const header = document.querySelector('.header-navigation');
  // header.classList.toggle("sticky", window.scrollY > 0);
  // const headerNav = document.querySelector('.burger-header-navigation-list');
  // headerNav.classList.toggle("sticky", window.scrollY > 0);
  const headerSticky = document.querySelector('.header-navigation-sticky');
  headerSticky.classList.toggle("sticky", window.scrollY > 0);
  const headerNavList = document.querySelector('.burger-header-navigation-list-sticky');
  headerNavList.classList.toggle("sticky", window.scrollY > 0);
});

// loader
let maskL = document.querySelector('.maskL');
window.addEventListener('load', () => {
  maskL.classList.add('hide');
  setTimeout(() => {
    maskL.remove();
  }, 3000)
});
// ANIMATION
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
// burger
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-header-navigation-list');
const burgerSticky = document.querySelector('.burger-sticky');
const burgerMenuSticky = document.querySelector('.burger-header-navigation-list-sticky');
burger.addEventListener('click', toggleNav);
burgerSticky.addEventListener('click', toggleNav);
function toggleNav() {
  console.log('clicked');
  burger.classList.contains('active') ? burger.classList.remove('active') : burger.classList.add('active');
  burgerMenu.classList.contains('is-active') ? burgerMenu.classList.remove('is-active') : burgerMenu.classList.add('is-active');
  burgerSticky.classList.contains('active') ? burgerSticky.classList.remove('active') : burgerSticky.classList.add('active');
  burgerMenuSticky.classList.contains('is-active') ? burgerMenuSticky.classList.remove('is-active') : burgerMenuSticky.classList.add('is-active');
}
// SLIDER
const swiper_home = new Swiper('.header-swiper', {
  effect: 'fade',
		speed: 3000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
});
// .....................
const paragraph = `
© ${new Date().getFullYear()} 
@webovio. All Rights Reserved.
    `;
document.getElementById('copyright').innerHTML = paragraph;

//Get the button:
const mybutton = document.getElementById("myBtn");
const rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
mybutton.addEventListener("click", scrollToTop);