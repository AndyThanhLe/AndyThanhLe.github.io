// Modal-related JS
$('.project-card').click(function() {
  $(this).next('.project-modal').toggleClass('hide');
});

$('.project-modal-close').click(function() {
  $(this).closest('.project-modal').toggleClass('hide');
});

$('.project-images-back').click(function() {
  let current = $('.visible');
  let previous = current.prev();

  if (previous.length == 0) {
    previous = $('.project-images').children(':last-child');
  }

  current.toggleClass('hide');
  current.toggleClass('visible');
  previous.toggleClass('hide');
  previous.toggleClass('visible');
});

$('.project-images-forward').click(function() {
  let images = $(this).siblings('.project-images');

  let current = images.children('.visible');
  let next = current.next();
  if (next.length == 0) {
    next = images.children(':first-child');
  }

  current.toggleClass('hide');
  current.toggleClass('visible');
  next.toggleClass('hide');
  next.toggleClass('visible');
});
