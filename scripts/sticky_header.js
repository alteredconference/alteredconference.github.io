// from https://stackoverflow.com/a/16442479/2128691

var header = $('#dynamic-header-wrap');

$(function(){
  header.data('size','big');
});

$(document).ready(function(){
  $('.nav-anchor').on('click', function(){
    var dest = $(this).attr('href');
    console.log(dest);

    if(!header.hasClass('hide'))  { header.addClass('hide'); };
    $('body').removeClass('hide-scrollbar');
    $('#main-content').css('margin-top', '4em');
    $('html,body').animate({ scrollTop: $(dest).offset().top - 23 }, 'fast');
  });
});
