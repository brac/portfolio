// jshint asi:true
$(document).ready(function(){

  //Project thumbnail change and see project button on hover
  $('.main-projects-project-thumb').hover(function(event){
    var el = $(event.target)

    // Find the right button based on the data-button attribute of the hovered div
    var button = $('.main-projects-project-button[data-button="'+($(this).data("button"))+'"]')

    // Show the overlay and  button
    el.addClass('main-projects-project-thumb-dark')
    button.addClass('main-projects-project-button-show')

  // Callback for hover off, hide the overlay and button
  }, function(event){
     // If user is hovering on the button element, don't do anything
     if ($(event.relatedTarget).hasClass('main-projects-project-button')) {
      // do nothing
     } else {
      $(event.target).removeClass('main-projects-project-thumb-dark')
      $('.main-projects-project-button').removeClass('main-projects-project-button-show')
    }
  })

  // Player Modal
  $('.player-button').on('click', event => {
    $('.modal-player-wrapper').addClass('modal-player-show')
    $('.overlay').addClass('modal-player-show')
    $('.modal-player-close').addClass('modal-player-show')
  })

  // close player modal on x click
  $('.modal-player-close').on('click', event => {
    $('.modal-player-wrapper').removeClass('modal-player-show')
    $('.overlay').removeClass('modal-player-show')
    $('.modal-player-close').removeClass('modal-player-show')
  })


  // Hide player modal on x click
  // $('.modal-player-close').on('click', event => {
    // $('.modal-player').removeClass('modal-player-show')
    // $('.overlay').removeClass('modal-player-show')
  // })

})
























