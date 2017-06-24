// from https://stackoverflow.com/a/16442479/2128691

var header = $('#dynamic-header-wrap');

$(function(){
  header.data('size','big');
});

$(document).ready(function(){
  $('.teaser-anchor').on('click', function(){
    var dest = $(this).attr('href'); 
    console.log(dest); 
    //console.log('this', $(this).href)
    //var topPosition = $(this).data('href').offset().top;

    header.fadeToggle('slow');
    //header.find('.inner').fadeToggle();
    //header.stop().animate({ height:'0em' },'fast');
    //header.find('#main-nav').fadeToggle();
    $('body').removeClass('hide-scrollbar');
    $('#main-content').css('margin-top', '4em');
    $('html,body').animate({ scrollTop: $(dest).offset().top }, 'slow'); 
  });
});

$(window).scroll(function(){
  // When the Document Object Model is ready
  //if($(document).scrollTop() > 150) {
  //  if(header.data('size') == 'big')
  //  {
  //      header.data('size','small');
  //  }
  //} else {
  //  if(header.data('size') == 'small')
  //    {
  //      header.data('size','big');
  //      header.stop().animate({ height:'100%' },600);
  //      header.find('.inner').fadeToggle();
  //      header.find('#main-nav').fadeToggle();
  //    }
  //}
});
