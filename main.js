$(document).ready(function(){

  $('.main-projects-project-thumb').hover(function(event){
    $(event.target).addClass('main-projects-project-thumb-dark');
    $('.main-projects-project-button').addClass('main-projects-project-button-show');

    // if ($('.main-projects-project-button:hover')){
    //   console.log('button hovered');
    // }

  }, function(event){
    $(event.target).removeClass('main-projects-project-thumb-dark');
    $('.main-projects-project-button').removeClass('main-projects-project-button-show');
  });
});