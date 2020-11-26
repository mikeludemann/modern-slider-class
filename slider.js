class Slider {
  constructor(element, dots, position){
    this.element = element;
    this.dots = dots;
    this.position = position;
  }
  init(){
    let currentSlide = this.position;
    const slides = document.querySelectorAll(this.element);
    const dots = document.querySelectorAll(this.dots);

    function main(n) {
      slides.forEach(function(slide, index) {
        slide.style.display = 'none';
        dots.forEach(function(dot, index) {
          dot.classList.remove('dots--container-active');
        });
      });
      
      slides[n].style.display = 'block';
      dots[n].classList.add('dots--container-active');
    }

    document.addEventListener('DOMContentLoaded', main(currentSlide));
  
    function next() {
      currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
      main(currentSlide);
    }

    function prev() {
      currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--;
      main(currentSlide);
    }

    document.querySelector('.next').addEventListener('click', next);

    document.querySelector('.prev').addEventListener('click', prev);
    
    /*setInterval(function(){
      next();
    }, 10000);*/

    dots.forEach(function (dot, i){
      dot.addEventListener('click', function() {
        console.log(currentSlide);
        main(i);
        currentSlide = i;
      });
    });
  }
}