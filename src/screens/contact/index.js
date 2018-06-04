import addElement from '../../engine/add-element.js';
import header from '../../components/header.js';
import navbar from '../../components/navbar.js';
import footer from '../../components/footer.js';
import contactForm from '../../components/contact-form.js'

const contact = async function (){
  const wrapper =  addElement('section', 'section')
  wrapper.appendChild(await header())
  wrapper.appendChild(await navbar())

    // current page setup
    const container =  addElement('div', 'container')
    wrapper.appendChild(container)

      // page title and subtitle
      const title = addElement('h1', 'title')
      container.appendChild(title)
      title.textContent = 'Contato'

      // setting columns layout with bulma classes
      const columns = addElement('div', 'columns')
      container.appendChild(columns)

        // column 1 content
        const column1 = addElement('div', 'column')
        columns.appendChild(column1)
        column1.textContent = `ontact pagsdfsdfe paragraph`

        // column 2 content (form)
        const column2 = addElement('div', 'column')
        columns.appendChild(column2)

          // dynamically import contact form
          column2.appendChild(await contactForm())

          const column2Text = addElement('p', 'paragraph')
          column2.appendChild(column2Text)
          column2Text.textContent = 'column 2'

  container.appendChild(await footer())

  return wrapper
}

export default contact
