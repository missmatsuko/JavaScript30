function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const activeClass = 'active';
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {

    const windowScrollY = window.scrollY;
    const imageHeight = sliderImage.height;
    const imageTop = sliderImage.offsetTop;
    const imageBottom = sliderImage.offsetTop + imageHeight;

    const slideInAt = (windowScrollY + window.innerHeight) - (imageHeight / 2);
    const isHalfShown = slideInAt > imageTop;
    const isNotScrolledPast = windowScrollY < imageBottom;

    sliderImage.classList.toggle(activeClass, isHalfShown && isNotScrolledPast);
  });
}

window.addEventListener('scroll', debounce(checkSlide));
