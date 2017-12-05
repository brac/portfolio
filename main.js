$(document).ready(function(){

  //Project thumbnail change and see project button on click
  $('.main-projects-project-thumb').hover(function(event){
    $(event.target).addClass('main-projects-project-thumb-dark');
    $('.main-projects-project-button').addClass('main-projects-project-button-show');


  }, function(event){
    $(event.target).removeClass('main-projects-project-thumb-dark');
    $('.main-projects-project-button').removeClass('main-projects-project-button-show');
  });

  //Header social menu expand on click
  $('.header-nav-social-title').on('click', function(event){
    var menu = $('.header-nav-social-menu');
    if (menu.hasClass('header-nav-social-menu-show')) {
      menu.removeClass('header-nav-social-menu-show');
    } else {
      menu.addClass('header-nav-social-menu-show');
    }
  });





});