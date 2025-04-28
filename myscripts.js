// Waits until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".cta");
    const details = document.querySelector(".contact-details");
    btn.addEventListener("click", function() {
      details.classList.toggle("show"); // Toggle the fade-in class
    });
  });
  
