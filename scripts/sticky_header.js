// from https://stackoverflow.com/a/16442479/2128691

var header = $('#dynamic-header-wrap');

$(function(){
  header.data('size','big');
});

//$(window).scroll(function(){
//  if($(document).scrollTop() > 150) {
//    if(header.data('size') == 'big')
//    {
//        header.data('size','small');
//        header.stop().animate({ height:'3em' },600);
//        header.find('.inner').fadeToggle();
//        header.find('#main-nav').fadeToggle();
//    }
//  } else {
//    if(header.data('size') == 'small')
//      {
//        header.data('size','big');
//        header.stop().animate({ height:'100%' },600);
//        header.find('.inner').fadeToggle();
//        header.find('#main-nav').fadeToggle();
//      }
//  }
//});
