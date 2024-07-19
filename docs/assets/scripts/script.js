// Modal-related JS
$('.project-card').click(function() {
  let modal = $(this).next('.project-modal');

  // Set first image to be visible
  let image = modal.find('.project-images').children(':first-child');
  image.toggleClass('visible');
  image.toggleClass('hide');

  modal.toggleClass('hide');
});

$('.project-modal-close').click(function() {
  // Hide all images
  let image = $(this).siblings('.project-images-wrapper').find('.visible');
  image.toggleClass('visible');
  image.toggleClass('hide');

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
