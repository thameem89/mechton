// --- Language Toggling Logic ---
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
  document.cookie = `${name}=${value}; domain=.${location.hostname}; path=/`;
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
  let targetLang = 'ar';
  
  if (currentCookie === '/en/ar') {
    targetLang = 'en';
  }
  
  setCookie('googtrans', `/en/${targetLang}`);
  location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  const currentCookie = getCookie('googtrans');
  if (currentCookie === '/en/ar') {
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
