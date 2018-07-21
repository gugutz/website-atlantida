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
        const column1 = addElement('div', 'column is-half')
        columns.appendChild(column1)
          const phoneNumber = addElement('p', 'text')
          phoneNumber.textContent = 'Telefone: 3240-7844'
          column1.appendChild(phoneNumber)
          const address = addElement('p', 'text')
          column1.appendChild(address)
          address.textContent = 'R Leo Pauli, 39 - Areias - São José - SC'


        // column 2 content (form)
        const column2 = addElement('div', 'column is-half')
        columns.appendChild(column2)

          // dynamically import contact form
          column2.appendChild(await contactForm())


  container.appendChild(await footer())

  return wrapper
}

export default contact
