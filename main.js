$(document).ready(function(){

  //Project thumbnail change and see project button on hover
  $('.main-projects-project-thumb').hover(function(event){
    var el = $(event.target);

    // Find the right button based on the data-button attribute of the hovered div
    var button = $('.main-projects-project-button[data-button="'+($(this).data("button"))+'"]') ;

    // Show the overlay and  button
    el.addClass('main-projects-project-thumb-dark');
    button.addClass('main-projects-project-button-show');

  // Callback for hover off, hide the overlay and button
  }, function(event){
     if ($(event.relatedTarget).hasClass('main-projects-project-button')) {
      // console.log('holding');
     } else {
      $(event.target).removeClass('main-projects-project-thumb-dark');
      $('.main-projects-project-button').removeClass('main-projects-project-button-show');
    }
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