const prevSlideBtn = document.querySelector('#prev-slide-btn');
const nextSlideBtn = document.querySelector('#next-slide-btn');
const slides = [...document.querySelectorAll('.slide')];
const progressCircles = [...document.querySelectorAll('.progress-circle')];
let currentSlideIndex = 0;

function previousSlide() { 
  slides[currentSlideIndex].removeAttribute('id');
  progressCircles[currentSlideIndex].removeAttribute('id');
  
  currentSlideIndex > 0 ? currentSlideIndex -= 1 : currentSlideIndex = slides.length - 1;
  
  slides[currentSlideIndex].id = 'current-slide';
  progressCircles[currentSlideIndex].id = 'current-slide-circle';
}

function nextSlide() {
  slides[currentSlideIndex].removeAttribute('id');
  progressCircles[currentSlideIndex].removeAttribute('id');
  
  currentSlideIndex < slides.length - 1 ? currentSlideIndex += 1 : currentSlideIndex = 0;
  
  slides[currentSlideIndex].id = 'current-slide';
  progressCircles[currentSlideIndex].id = 'current-slide-circle';
}

prevSlideBtn.addEventListener('click', () => {
  previousSlide();    
});

nextSlideBtn.addEventListener('click', () => {
  nextSlide();
});

setInterval(() => nextSlide(), 5000);

progressCircles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    slides[currentSlideIndex].removeAttribute('id');
    progressCircles[currentSlideIndex].removeAttribute('id');

    currentSlideIndex = index;
    slides[currentSlideIndex].id = 'current-slide';
    progressCircles[currentSlideIndex].id = "current-slide-circle";
  });
});
