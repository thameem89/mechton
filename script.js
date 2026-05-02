// --- Language Toggling Logic ---
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function setCookie(name, value) {
  const expires = "; expires=Thu, 01 Jan 1970 00:00:00 UTC"; // Used for clearing
  if (value === "") {
    document.cookie = name + "=" + value + expires + "; path=/";
    document.cookie = name + "=" + value + expires + "; path=/; domain=." + location.hostname;
  } else {
    document.cookie = name + "=" + value + "; path=/";
    document.cookie = name + "=" + value + "; path=/; domain=." + location.hostname;
  }
}

function applyLanguage(lang) {
  const isArabic = lang === 'ar';
  document.documentElement.lang = isArabic ? 'ar' : 'en';
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  
  const translateBtns = document.querySelectorAll('.translate-btn');
  translateBtns.forEach(btn => {
    btn.innerText = isArabic ? 'EN' : 'عربي';
  });
}

function toggleLanguage() {
  const currentCookie = getCookie('googtrans');
  
  if (currentCookie && currentCookie.includes('/ar')) {
    // Switch back to English by clearing the cookie
    setCookie('googtrans', '');
  } else {
    // Switch to Arabic
    setCookie('googtrans', '/en/ar');
  }
  
  location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  const currentCookie = getCookie('googtrans');
  if (currentCookie && currentCookie.includes('/ar')) {
    applyLanguage('ar');
  } else {
    applyLanguage('en');
  }


  // --- Navbar Scroll Effect ---
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // --- Count Up Animation ---
  const countElements = document.querySelectorAll('.count-up');
  let counted = false;

  const countUp = () => {
    countElements.forEach(el => {
      const target = +el.getAttribute('data-target');
      const duration = 2000;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.innerText = target;
          clearInterval(timer);
        } else {
          el.innerText = current;
        }
      }, 16);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        countUp();
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('stats');
  if (statsSection) {
    observer.observe(statsSection);
  }

  // --- Carousel Logic ---
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  if (track && prevBtn && nextBtn) {
    let scrollPosition = 0;

    const getCardWidth = () => {
      const card = track.querySelector('.product-card');
      const gap = parseInt(window.getComputedStyle(track).gap) || 0;
      return card.offsetWidth + gap;
    };

    const updateCarousel = (direction) => {
      const cardWidth = getCardWidth();
      const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
      
      if (direction === 'next') {
        scrollPosition = Math.min(scrollPosition + cardWidth, maxScroll);
      } else {
        scrollPosition = Math.max(scrollPosition - cardWidth, 0);
      }
      
      const isRtl = document.documentElement.dir === 'rtl';
      const transformValue = isRtl ? scrollPosition : -scrollPosition;
      track.style.transform = `translateX(${transformValue}px)`;
    };

    nextBtn.addEventListener('click', () => updateCarousel('next'));
    prevBtn.addEventListener('click', () => updateCarousel('prev'));
    
    // Reset on resize
    window.addEventListener('resize', () => {
      scrollPosition = 0;
      track.style.transform = `translateX(0)`;
    });
  }
});
