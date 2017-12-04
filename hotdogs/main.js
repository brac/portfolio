// Document ready syntax
$(document).ready(function(){
  // Show modal on view hours click
  $('.view-hours').on('click',function (event) {
    $('.hours-modal').addClass('show');
    $('.overlay').addClass('show');
  });

  // Show modal on item click
  $('.menu-item').on('click', function (event) {
    // Find the id of the item container and split it to get the name of the dog
    var clickedId= $(this).attr("id").split('-')[1];

    // Show the corresponding modal and bring up the overlay
    $('#item-modal-' + clickedId ).addClass('item-show');
    $('.overlay').addClass('show');
  });

  // Close hours modal on x button click
  $('.hours-x-button').on('click', function (event) {
    $('.hours-modal').removeClass('show');
    $('.overlay').removeClass('show');
  });

  // Close item modal on x button click
  $('.item-x-button').on('click', function (event) {
    $('.item-modal').removeClass('item-show');
    $('.overlay').removeClass('show');
  });
});
