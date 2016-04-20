var toggler = document.getElementById('toggler-nav');
toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('toggler-nav--close');
  document.getElementById('main-nav__list').classList.toggle('main-nav__list--visible');
}