// (function(){
 //код
// }());

$('.editor-photo__item').on('click', function(){
  $('.editor-photo__item').removeClass('editor-photo__item--active');
 $(this).addClass('editor-photo__item--active');
});
