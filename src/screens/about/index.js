import addElement from '../../engine/add-element.js';
import header from '../../components/header.js';
import navbar from '../../components/navbar.js';
import footer from '../../components/footer.js';


const about = async function (){
  const wrapper =  addElement('section', 'section')
  wrapper.appendChild(await header())
  wrapper.appendChild(await navbar())

 const aboutPage =  addElement('p', 'about-page')
  const aboutPageText = document.createTextNode('about page text here')
  aboutPage.appendChild(aboutPageText)
  wrapper.appendChild(aboutPage)

  wrapper.appendChild(await footer())
  return wrapper
}

export default about
