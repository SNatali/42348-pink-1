var toggler = document.getElementById('close-form');
toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('close-form--close');
  document.getElementById('main-nav__list').classList.toggle('main-nav__list--visible');
}