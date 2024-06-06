
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
   
    let currentIndex = 0;
    const totalItems = carousel.children.length;
    let interval;
    const updateCarousel = () => {
      const itemWidth = carousel.querySelector('.carousel-item').clientWidth;
      carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };
  
    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    };
  
   

    const autoSlide = () => {
      nextSlide();
    };
  
    interval = setInterval(autoSlide, 3000); 
  
    carousel.addEventListener('mouseenter', () => {
      clearInterval(interval);
    });
  
    carousel.addEventListener('mouseleave', () => {
      interval = setInterval(autoSlide, 3000); 
    });
  
    window.addEventListener('resize', updateCarousel);
  });
  
  
