// ========== GESTION DU THÈME ==========
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Appliquer le thème sauvegardé
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);
  
  // Écouteur de clic sur le bouton
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (theme === 'dark') {
    themeToggle.innerHTML = '☀️'; // Soleil pour passer en mode jour
  } else {
    themeToggle.innerHTML = '🌙'; // Lune pour passer en mode nuit
  }
}

// ========== GESTION DU MENU BURGER ==========
function initMobileMenu() {
  const menuBurger = document.getElementById('menu-burger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuBurger) {
    menuBurger.addEventListener('click', () => {
      menuBurger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Fermer le menu lors du clic sur un lien
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuBurger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // Fermer le menu lors du clic en dehors
    document.addEventListener('click', (e) => {
      if (!menuBurger.contains(e.target) && !navMenu.contains(e.target)) {
        menuBurger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
}

// ========== GESTION DU PRELOADER ==========
function initPreloader() {
  window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = '0';
      }, 1200);
      
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 2700);
    }
  });
}

// ========== INITIALISATION ==========
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initPreloader();
});