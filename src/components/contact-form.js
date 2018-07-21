import addElement from "../engine/add-element";
import input from '../components/input'
import button from "../components/button";

const contactForm = () => {
  const formWrapper = addElement('div', 'container')

  // begin mounting form
  const form = addElement('form', 'form')
  formWrapper.appendChild(form)



  const inputElements = [
    input({
      name: 'email',
      type: 'email',
      title: 'Email',
      required: true
    }),
    input({
      name: 'password',
      type: 'text',
      title: 'Senha',
      required: true
    })
  ]
  inputElements.forEach(element => {
    element.classList.add('input')
    form.appendChild(element)
  })

  form.appendChild(button({text: 'Entrar', type: 'submit'}))

  return formWrapper
}
export default contactForm
