import addElement from '../engine/add-element.js';

const content = () => {

  // creates the navbar
  const content = addElement('section', 'content') ;
  const contentText = document.createTextNode('container main text')
  content.appendChild(contentText);

  return content;
}

export default content;
