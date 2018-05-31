// sets the "active" class on the active navigation link
const setActiveLink = (fragmentId) => {
  let links = document.querySelectorAll('#navbar ul li a'),
      i, link, pageName;

  for(let i = 0; i < links.lenght; i++) {
    link = links[i];
    pageName = link.getAttribute('href').substr(1);
    if (pageName === fragmentId) {
      link.setAttribute('class', 'isActive');
    }
    else {
      link.removeAttribute('class');
    }
  }
}

export default setActiveLink;
