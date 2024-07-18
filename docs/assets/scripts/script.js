// Set the link redirects
$(document).ready(function() {
  $('.top-nav-link').click(function() {
    window.location.href = $(this).attr('id');
  });
});

// Modal-related JS
$('.project-link').click(function() {
  $(this).find('.project-modal').toggleClass('hide');
});

$('.project-modal-close').click(function() {
  $(this).next('.project-modal').toggleClass('hide');
});
