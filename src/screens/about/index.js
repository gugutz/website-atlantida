import addElement from '../../engine/add-element.js';
import header from '../../components/header.js';
import navbar from '../../components/navbar.js';
import footer from '../../components/footer.js';


const about = async () => {

  const wrapper =  addElement('section', 'section')

    // import header and navbar
    wrapper.appendChild(await header())
    wrapper.appendChild(await navbar())

    // current page setup
    const container =  addElement('div', 'container')
    wrapper.appendChild(container)


      // page title and subtitle
      const title = addElement('h1', 'title')
      container.appendChild(title)
      title.textContent = 'Sobre a empresa'

      // const paragraph1 =  addElement('p', 'about-page')
      // container.appendChild(paragraph1)
      // paragraph1.textContent = 'about page text here'

    wrapper.appendChild(await footer())

  return wrapper
}

export default about
