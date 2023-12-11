const mobileNav = document.querySelector('.mnav')
const closeBtn = document.querySelector('.mnav__close-btn')
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon')


const navOpened = 'left-0'
const navClosed = '-left-[300px]'
const arrowLeft  = 'ri-arrow-left-s-line'
const arrowRight = 'ri-arrow-right-s-line'

// closeBtn.addEventListener('click', () => {
//     if(mobileNav.classList.contains(navClosed)) {
//         mobileNav.classList.toggle(navOpened);

//         closeBtnIcon.classList.toggle(arrowLeft)
//         closeBtnIcon.classList.toggle(arrowRight)
//     }
// })

closeBtn.addEventListener('click', () => {
    if(mobileNav.classList.contains(navClosed)) {
        // Open the navigation
        mobileNav.classList.remove(navClosed);
        mobileNav.classList.add(navOpened);

        // Toggle arrow classes
        closeBtnIcon.classList.remove(arrowRight);
        closeBtnIcon.classList.add(arrowLeft);
    } else {
        // Close the navigation
        mobileNav.classList.remove(navOpened);
        mobileNav.classList.add(navClosed);

        // Toggle arrow classes
        closeBtnIcon.classList.remove(arrowLeft);
        closeBtnIcon.classList.add(arrowRight);
    }
});


// sticky header
const header = document.querySelector('header');

// Initially remove the `transform: translateY(-100%)` property to make the header visible
header.style.transform = 'translateY(0)';

window.addEventListener('scroll', function() {
  if (window.scrollY > header.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
    // Reset the `transform` property to ensure smooth transition on scroll up
    header.style.transform = 'translateY(0)';
  }
});

//count-up

const valueDisplays = document.querySelectorAll(".num");
const interval = 500;

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Adjust this threshold as needed
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

valueDisplays.forEach((valueDisplay) => {
  observer.observe(valueDisplay);
});

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}

function startCounter(valueDisplay) {
  let startValue = 0;
  const endValue = parseInt(valueDisplay.getAttribute("data-val"), 10);
  const duration = Math.floor(interval / endValue);
  const step = Math.ceil(endValue / (interval / 16));

  function updateCounter() {
    startValue += step;
    if (startValue >= endValue) {
      startValue = endValue;
    }

    valueDisplay.textContent = startValue;

    if (startValue < endValue) {
      requestAnimationFrame(updateCounter);
    }
  }

  updateCounter();
}


// swipper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is < 768px
    
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// scroll-to-top button


var toTopButton = document.getElementById("to-top-button");

    // Check if the button exists
    if (toTopButton) {

        // On scroll event, toggle button visibility based on scroll position
        window.onscroll = function() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                toTopButton.classList.remove("hidden");
            } else {
                toTopButton.classList.add("hidden");
            }
        };

        // Function to scroll to the top of the page smoothly
        window.goToTop = function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
      }