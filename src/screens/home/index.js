import addElement from '../../engine/add-element.js';
import header from '../../components/header.js';
import navbar from '../../components/navbar.js';
import footer from '../../components/footer.js';

const home = async function() {

  // main layout structure
  const wrapper =  addElement('section', 'section')
    wrapper.appendChild(await header())
    wrapper.appendChild(await navbar())

    // current page layout setup
    const page =  addElement('div', 'container')
    wrapper.appendChild(page)
      // page title
      const title = addElement('h1', 'page-title')
      title.textContent = 'Bem vindo!'
      page.appendChild(title)

  wrapper.appendChild(await footer())
  return wrapper
}

export default home
