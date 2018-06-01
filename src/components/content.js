import addElement from '../engine/add-element.js';
import getElement from '../engine/get-element.js';

const content = () => {

  // creates the navbar
  const content = addElement('article', 'content', 'content') ;
  const contentText = document.createTextNode('container main text')
  content.appendChild(contentText);

  const appDiv = getElement('app')
  appDiv.appendChild(content);
  return content;
}

export default content;
