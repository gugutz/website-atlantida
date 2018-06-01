import addElement from '../engine/add-element.js';
import getElement from '../engine/get-element.js';

const footer = () => {

  // creates the navbar
  const footer = addElement('footer', 'footer', 'footer') ;
  const footerText = document.createTextNode('footertext')
  footer.appendChild(footerText);

  const appDiv = getElement('app')
  appDiv.appendChild(footer);
  return footer;
}

export default footer;

