$(document).ready(function(){
  // update the url bar.
  // i will lick your ass if you can explain why i need to do this.
  document.location.path = window.location.path;

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
