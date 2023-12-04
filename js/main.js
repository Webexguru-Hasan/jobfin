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



