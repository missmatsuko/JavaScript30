const activeClass = 'active',
      sliderImages = document.querySelectorAll('.slide-in');

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

function checkSlide(e) {
  const windowInnerHeight = window.innerHeight;

  sliderImages.forEach(sliderImage => {
    const imageRect = sliderImage.getBoundingClientRect(),
          imageBottom = imageRect.bottom,
          imageHeight = imageRect.height,
          isHalfShown = ((imageBottom - (imageHeight / 2)) < windowInnerHeight),
          isNotScrolledPast = imageBottom > 0;

    sliderImage.classList.toggle(activeClass, isHalfShown && isNotScrolledPast);
  });
}

window.addEventListener('scroll', debounce(checkSlide));
