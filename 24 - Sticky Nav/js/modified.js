const nav = document.querySelector('#main');
const navCoord = nav.getBoundingClientRect();
const navTop = navCoord.top;
const navHeight = navCoord.height;

function fixNav() {
  if(window.scrollY >= navTop) {
    document.body.style.paddingTop = navHeight + 'px';
    document.body.classList.add('fixed-nav');
  }
  else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);
