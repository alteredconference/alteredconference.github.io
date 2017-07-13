// from https://stackoverflow.com/a/16442479/2128691

$(document).ready(function(){
  $('#nav-button').on('click', function(){
    if($('#nav').hasClass('hide')) {
      $('#nav').removeClass('hide');
    } else {
      $('#nav').addClass('hide');
    };
  });

  $('.nav-anchor').on('click', function(){
    $('#nav').addClass('hide');
  });
});

$(document).on('scroll', function(){
  if ( !$('#nav').hasClass('hide') ) {
    $('#nav').addClass('hide');
  };
});
