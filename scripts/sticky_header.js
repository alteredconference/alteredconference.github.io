$(document).ready(function(){
  // update the title.
  //- i will lick your ass if you can explain why i need to do this.-
  // turns out i can dere-lict my own balls, thank you very much. 
  // github pages use a frameset which is fucked, that's the short version.
  parent.window.document.title = "Altered Conference | Berlin"

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

goToPage = function(path){
  window.frames[0].location.href = path
}
