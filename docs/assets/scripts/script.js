// Modal-related JS
$('.project-card').click(function() {
  $(this).next('.project-modal').toggleClass('hide');
});

$('.project-modal-close').click(function() {
  $(this).closest('.project-modal').toggleClass('hide');
});

$('#project-images-forward').click(function() {
  let current = $(this).find('.visible');
  let next = current.next();
  current.toggleClass('visible');
  current.toggleClass('hidden');
  next.toggleClass('visible');
  next.toggleClass('hidden');
});

