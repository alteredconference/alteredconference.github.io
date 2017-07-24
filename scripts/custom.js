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

  $('.clickable').on('mouseenter', function(){
    $(this).addClass('emphasize-link');
    $(this).find('.link-text').removeClass('hide');
  });

  $('.clickable').on('mouseleave', function(){
    $(this).removeClass('emphasize-link');
    $(this).find('.link-text').addClass('hide');
  });

  $('.clickable').on('click', function(){
    console.log($(this).data('link'));
    window.location.href = $(this).data('link');
  });
});

$(document).on('scroll', function(){
  if ( !$('#nav').hasClass('hide') ) {
    $('#nav').addClass('hide');
  };
});

goToPage = function(path){
  // update urls when clicking a link
  //- i will lick your ass if you can explain why i need to do this.-
  // turns out i can dere-lict my own balls, thank you very much.
  // github pages use a frameset which is fucked, that's the short version.
  top.window.location.href = path
}
