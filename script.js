$('.profile-info').on('click', function() {
  $('.photo-instructions').addClass('open');
});

$('.connect-info').on('click', function() {
  $('.profile-social-instructions').slideDown();
});

$('.instructions-close').on('click', function() {
  $(this).parent().removeClass('open');
});

// $('.social-close').on('click', function() {
//   $(this).parent().slideUp();
// });