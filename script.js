///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

const yearFooter = document.querySelector(`.year`);
yearFooter.textContent = new Date().getFullYear();

//IMPLEMENTING MENU NAVIGATION
const navBtn = document.querySelector(`.btn-mobile--nav`);
const [menuBtn, closeBtn] = document.querySelectorAll(`.icon-mobile-nav`);
navBtn.addEventListener("click", (e) => {
  if (e.target === menuBtn)
    document.querySelector(".header").classList.add("nav-open");
  if (e.target === closeBtn)
    document.querySelector(".header").classList.remove("nav-open");
});

//IMPLEMENTING SMOOTH SCROLLING BEHAVIOUR
const links = document.querySelectorAll(`a:link`);
links.forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.attributes.href.nodeValue;
    if (target[0] === "#" && target.slice(1)) {
      document.querySelector(".header").classList.remove("nav-open");
      document.querySelector(target).scrollIntoView({ behaviour: "smooth" });
    }
  });
});

// IMPLEMENTING STICKY NAVIGATION

const heroSection = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  (entry) => {
    const [ent] = entry;
    console.log(ent);
    if (!ent.isIntersecting) {
      console.log("not intersecting");
      document.body.classList.add("sticky");
    } else {
      console.log("intersecting");
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(heroSection);

// menuBtn.addEventListener("click", () => {
//   document.querySelector(".header").classList.add("nav-open");
// });

// closeBtn.addEventListener("click", () => {
//   document.querySelector(".header").classList.remove("nav-open");
// });

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 4.8rem;
  }
  
  .no-flexbox-gap .list-item:not(:last-child) {
    margin-bottom: 1.6rem;
  }
  
  .no-flexbox-gap .list-icon:not(:last-child) {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .delivered-faces {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .meal-attribute:not(:last-child) {
    margin-bottom: 2rem;
  }
  
  .no-flexbox-gap .meal-icon {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .footer-row div:not(:last-child) {
    margin-right: 6.4rem;
  }
  
  .no-flexbox-gap .social-links li:not(:last-child) {
    margin-right: 2.4rem;
  }
  
  .no-flexbox-gap .footer-nav li:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  
  @media (max-width: 75em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 3.2rem;
    }
  }
  
  @media (max-width: 59em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 0;
      margin-bottom: 4.8rem;
    }
  }
  */
