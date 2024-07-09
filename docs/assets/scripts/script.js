// Set the link redirects
const links = document.getElementsByClassName('nav-link');
for (let i = 0; i < links.length; i++) {
  let link = links.item(i);

  link.addEventListener('click', () => {
    window.location.href = link.id;
  });
}
