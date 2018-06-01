import addElement from '../engine/add-element.js'
import getElement from '../engine/get-element.js'


const header = () => {
  const header = addElement('header', 'header', 'header')

  const headerContent = document.createTextNode("header textoo")
  header.appendChild(headerContent)

  // embedding the header on the main app div
  const appDiv = getElement('app')
  appDiv.appendChild(header)

  return header
}
export default header
