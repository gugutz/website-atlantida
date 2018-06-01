import addElement from '../engine/add-element.js';
import getElement from '../engine/get-element.js';

// array of links for the sidebar,
// temporary fix
const links = [
  {name: 'home', href: '#', text: 'Inicio'},
  {name: 'about', href: '#about', text: 'Sobre a empresa'},
  {name: 'contact', href: '#contact', text: 'Fale Conosco'}
]


const navbar = () => {

  const navbar = addElement('nav', 'navbar', 'navbar')
  links.map(({name, href, text}) => {
    const linkItem = addElement('a', undefined, 'menu-link-' + name)
    linkItem.setAttribute('href', href);
    const linkName = document.createTextNode(name);
    linkItem.appendChild(linkName);
    navbar.appendChild(linkItem);
  })

  const appDiv = getElement('app')
  appDiv.appendChild(navbar);
  return navbar;
}

export default navbar;
