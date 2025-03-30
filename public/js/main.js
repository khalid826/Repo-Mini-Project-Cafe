// Load navbar and footer when the page loads
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("navbar-placeholder", "../navbar.html");
  loadComponent("footer-placeholder", "../footer.html");

  // Wait a bit to make sure navbar loads before setting up the burger menu
  setTimeout(setupMobileMenu, 300);
});

// Function to load an external HTML file into a placeholder
function loadComponent(elementId, file) {
  fetch(file)
    .then(response => response.text())
    .then(html => {
      document.getElementById(elementId).innerHTML = html;
    });
}

// Function to set up the mobile menu toggle
function setupMobileMenu() {
  var menuButton = document.getElementById("menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }
}
