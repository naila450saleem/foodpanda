document.addEventListener('DOMContentLoaded', function() {
    // --- Main Content Tab Switching ---
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetTab = item.dataset.tab;

            navItems.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            item.classList.add('active');
            
            const activeContent = document.getElementById(targetTab + '-content');
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });

    // --- Page Navigation (Main Content <-> Auth Page) ---
    const mainContentArea = document.querySelector('.content-area');
    const authPage = document.getElementById('auth-page');
    const headerLoginBtn = document.getElementById('header-login-btn');
    // NEW: Select the signup button
    const headerSignupBtn = document.getElementById('header-signup-btn');

    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    function showPage(pageToShow, formToShow = 'login') {
        if (pageToShow === 'auth') {
            mainContentArea.style.display = 'none';
            authPage.classList.add('active');

            // Also switch to the correct form
            if (formToShow === 'signup') {
                loginForm.classList.remove('active-form');
                signupForm.classList.add('active-form');
            } else {
                signupForm.classList.remove('active-form');
                loginForm.classList.add('active-form');
            }
        } else {
            mainContentArea.style.display = 'block';
            authPage.classList.remove('active');
        }
    }
    
    // Clicking the "Log in" button shows the auth page with the login form
    headerLoginBtn.addEventListener('click', () => {
        showPage('auth', 'login');
    });

    // NEW: Clicking the "Sign up" button shows the auth page with the signup form
    headerSignupBtn.addEventListener('click', () => {
        showPage('auth', 'signup');
    });

    // --- Login/Signup Form Switching ---
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');

    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('active-form');
        signupForm.classList.add('active-form');
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.remove('active-form');
        loginForm.classList.add('active-form');
    });

    // --- Form Submission (Demo) ---
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formType = form.id === 'login-form' ? 'Login' : 'Sign up';
            alert(`${formType} form submitted! (This is a demo)`);
        });
    });
});

// --- Food Categories Carousel Logic ---
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.categories-slider-container');
    const arrowLeft = document.getElementById('carousel-arrow-left');
    const arrowRight = document.getElementById('carousel-arrow-right');

    // Check if elements exist before adding logic
    if (!carouselContainer || !arrowLeft || !arrowRight) {
        return;
    }

    const itemWidth = 115; // Item width (100px) + gap (15px)
    const itemsVisible = 5; // How many items are visible at once
    let currentIndex = 0;

    function updateCarousel() {
        const maxIndex = carouselContainer.children[0].children.length - itemsVisible;
        
        // Move the carousel
        carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

        // Update arrow states
        if (currentIndex === 0) {
            arrowLeft.classList.add('disabled');
        } else {
            arrowLeft.classList.remove('disabled');
        }

        if (currentIndex >= maxIndex) {
            arrowRight.classList.add('disabled');
        } else {
            arrowRight.classList.remove('disabled');
        }
    }

    arrowRight.addEventListener('click', () => {
        const maxIndex = carouselContainer.children[0].children.length - itemsVisible;
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    arrowLeft.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Initial check for arrow states
    updateCarousel();
});

const carousel = document.querySelector('.restaurant-carousel');
const leftBtn = document.getElementById('restaurant-arrow-left');
const rightBtn = document.getElementById('restaurant-arrow-right');

const scrollAmount = 300; // pixels per click

leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});


const qrBox = document.querySelector('.qr-box');
const closeQr = document.getElementById('closeQr');

closeQr.addEventListener('click', () => {
    qrBox.style.display = 'none';  // Only QR hide
});



// Top Brand
const cardsContainer = document.querySelector('.top-brand-cards');
const btnLeft = document.querySelector('.top-brand-arrow.left');
const btnRight = document.querySelector('.top-brand-arrow.right');

function updateArrows() {
    const scrollLeft = cardsContainer.scrollLeft;
    const maxScrollLeft = cardsContainer.scrollWidth - cardsContainer.clientWidth;

    btnLeft.style.display = scrollLeft > 0 ? 'flex' : 'none';
    btnRight.style.display = scrollLeft < maxScrollLeft ? 'flex' : 'none';
}

// Scroll right
btnRight.addEventListener('click', () => {
    cardsContainer.scrollBy({ left: 250, behavior: 'smooth' });
    setTimeout(updateArrows, 300);
});

// Scroll left
btnLeft.addEventListener('click', () => {
    cardsContainer.scrollBy({ left: -250, behavior: 'smooth' });
    setTimeout(updateArrows, 300);
});

// On manual scroll
cardsContainer.addEventListener('scroll', updateArrows);

// Initialize
updateArrows();

// Top Shop
const shopCardsContainer = document.querySelector('.top-shop-cards');
const shopBtnLeft = document.querySelector('.top-shop-arrow.left');
const shopBtnRight = document.querySelector('.top-shop-arrow.right');

function updateShopArrows() {
    const scrollLeft = shopCardsContainer.scrollLeft;
    const maxScrollLeft = shopCardsContainer.scrollWidth - shopCardsContainer.clientWidth;

    shopBtnLeft.style.display = scrollLeft > 0 ? 'flex' : 'none';
    shopBtnRight.style.display = scrollLeft < maxScrollLeft ? 'flex' : 'none';
}

shopBtnRight.addEventListener('click', () => {
    shopCardsContainer.scrollBy({ left: 250, behavior: 'smooth' });
    setTimeout(updateShopArrows, 300);
});

shopBtnLeft.addEventListener('click', () => {
    shopCardsContainer.scrollBy({ left: -250, behavior: 'smooth' });
    setTimeout(updateShopArrows, 300);
});

shopCardsContainer.addEventListener('scroll', updateShopArrows);
updateShopArrows();





// Add this to your existing script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Show more/less functionality for cuisines
    const showMoreBtn = document.getElementById('showMoreCuisines');
    const cuisineList = document.querySelector('.cuisine-list');
    
    if (showMoreBtn && cuisineList) {
        showMoreBtn.addEventListener('click', function() {
            // Toggle expanded class
            cuisineList.classList.toggle('expanded');
            this.classList.toggle('expanded');
            
            // Change button text and icon
            if (this.classList.contains('expanded')) {
                this.innerHTML = 'Show less <i class="fas fa-chevron-up"></i>';
            } else {
                this.innerHTML = 'Show more <i class="fas fa-chevron-down"></i>';
            }
            
            // Scroll to show more button if expanded
            if (cuisineList.classList.contains('expanded')) {
                setTimeout(() => {
                    showMoreBtn.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 100);
            }
        });
    }
    
    // Optional: Search functionality for cuisines
    const searchInput = document.querySelector('.search-cuisine');
    if (searchInput && cuisineList) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const items = cuisineList.querySelectorAll('.check-row');
            
            items.forEach(item => {
                const text = item.querySelector('span').textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // If searching, expand the list automatically
            if (searchTerm.length > 0) {
                cuisineList.classList.add('expanded');
                if (showMoreBtn) {
                    showMoreBtn.classList.add('expanded');
                    showMoreBtn.innerHTML = 'Show less <i class="fas fa-chevron-up"></i>';
                }
            }
        });
    }
});