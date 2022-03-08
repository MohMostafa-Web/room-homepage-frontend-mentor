const header = document.querySelector('header');
const toggleMenu = document.querySelector('header .toggle-menu');
const closeButton = document.querySelector('header .close');
const headerNav = document.querySelector('header nav ul');

// When Click on Toggle Menu
toggleMenu.onclick = function () {
  // Remove Class "active" from Toggle Menu
  this.classList.remove("active");
  // Add Class "active" to Close Button
  closeButton.classList.add("active");
  // Add Class "bg-white" to Header
  header.classList.add('bg-white');
  // Add Class "visible" to Header Nav
  headerNav.classList.add("visible");
}

closeButton.onclick = function () {
  // Remove Class "active" from Close Button
  this.classList.remove("active");
  // Add Class "active" to Toggle Menu
  toggleMenu.classList.add("active");
  // Remove Class "bg-white" from Header
  header.classList.remove('bg-white');
  // Remove Class "visible" from Header Nav
  headerNav.classList.remove("visible");
}

// Get Slider Images and put them in Array
const sliderImages = Array.from(document.querySelectorAll('.slider .slide-img img'));
const slidesContent = document.querySelectorAll('.slider .container .slide');


// Get Previous and Next Buttons
const prevButton = document.querySelector('.slider .controls .prev');
const nextButton = document.querySelector('.slider .controls .next');

// Create variable currentSlider
let currentSlider = 0;

nextButton.onclick= function () {
  if (currentSlider === sliderImages.length - 1) {
    currentSlider = 0;
  } else {
    currentSlider++;
  }
  sliding();
}

prevButton.onclick= function () {
  if (currentSlider === 0) {
    currentSlider = sliderImages.length - 1;
  } else {
    currentSlider--;
  }
  sliding();
}

// Create Main Function Sliding
function sliding() {
  // Remove Class "active" from all slide Images and add Class "active" to current slide Image
  sliderImages.forEach( img => {
    img.classList.remove("active");
  });
  sliderImages[currentSlider].classList.add("active");

  // Remove Class "active" from all slides Content and add Class "active" to current slide Content
  slidesContent.forEach(slide => {
    slide.classList.remove("active")
  });
  slidesContent[currentSlider].classList.add("active");
}
