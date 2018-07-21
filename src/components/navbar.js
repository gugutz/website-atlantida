import addElement from '../engine/add-element.js';

// array of links for the sidebar,
// temporary fix
const links = [
  {name: 'home', href: '/home', text: 'Inicio'},
  {name: 'about', href: '/about', text: 'Sobre a empresa'},
  {name: 'contact', href: '/contact', text: 'Fale Conosco'}
]


const navbar = () => {

  const navbar = addElement('nav', 'navbar is-fluid is-dark')

  links.forEach(({name, href, text}) => {
    const linkItem = addElement('a', 'navbar-item')
    linkItem.setAttribute('href', href);
    const linkName = document.createTextNode(name);
    linkItem.appendChild(linkName);
    navbar.appendChild(linkItem);

    linkItem.addEventListener('focus', () => {
      linkItem.classList.add('is-active')
    })
    linkItem.addEventListener('blur', () => {
      linkItem.classList.remove('is-active')
    })
  })

  return navbar;
}

export default navbar;
