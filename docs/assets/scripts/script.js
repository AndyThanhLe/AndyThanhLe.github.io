// Set the link redirects
$(document).ready(function() {
  $('.top-nav-link').click(function() {
    window.location.href = $(this).attr('id');
  });
});

$('.project-link').click(function() {
  $('#project-modal').css('display', 'block');
});

$('#project-modal-close').click(function() {
  $('#project-modal').css('display', 'none');
});
