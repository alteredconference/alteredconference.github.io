// from https://stackoverflow.com/a/16442479/2128691

var header = $('#dynamic-header-wrap');

$(function(){
  header.data('size','big');
});

$(window).resize(function(){
  var windowWidth = $(window).width();

  if(windowWidth < 840) {
    $('#nav-button').removeClass('hide');
    $('#nav').addClass('hide');
  } else {
    $('#nav-button').addClass('hide');
    $('#nav').removeClass('hide');
  };
});

$(document).ready(function(){
  $('#nav-button').on('click', function(){
    if($('#nav').hasClass('hide')) {
      $('#nav').removeClass('hide');
    } else {
      $('#nav').addClass('hide');
    };
  });

  $('.nav-anchor').on('click', function(){
    var dest = $(this).attr('href');
    console.log(dest);

    if(!header.hasClass('hide'))  { header.addClass('hide'); };
    $('body').removeClass('hide-scrollbar');
    $('#main-content').css('margin-top', '4em');
    $('html,body').animate({ scrollTop: $(dest).offset().top - 23 }, 'fast');
  });
});
