function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('show');
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
      const dropdownContainer = document.querySelector('.dropdown-container');
      const dropdownButton = dropdownContainer.querySelector('.dropdown');
    
      // Toggle menu on click
      dropdownButton.addEventListener('click', function(e) {
        e.stopPropagation(); // prevent click from bubbling up to document
        dropdownContainer.classList.toggle('active');
      });
    
      // Close dropdown when clicking anywhere outside
      document.addEventListener('click', function(e) {
        if (!dropdownContainer.contains(e.target)) {
          dropdownContainer.classList.remove('active');
        }
      });
    });

const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; 
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});