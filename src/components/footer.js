import addElement from '../engine/add-element.js';

const footer = () => {

  // creates the navbar
  const footer = addElement('footer', 'footer') ;
  const footerText = document.createTextNode('footertext')
  footer.appendChild(footerText);

  return footer
}

export default footer;

