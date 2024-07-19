// Modal-related JS
$('.project-link').click(function() {
  $(this).find('.project-modal').toggleClass('hide');
});

$('.project-modal-close').click(function() {
  $(this).next('.project-modal').toggleClass('hide');
});
