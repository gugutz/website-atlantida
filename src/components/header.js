import addElement from '../engine/add-element.js'


const header = () => {


  const header = addElement('header', 'hero is-light')
  const logo = addElement('div', 'hero-body')
  const container = addElement('div', 'container')
  const title = addElement('h1', 'title')
  const subtitle = addElement('h2', 'subtitle')
  title.textContent = 'Atlantida Alumínio'
  subtitle.textContent = 'subtitulo aqui'
  header.appendChild(logo)
  logo.appendChild(container)
  container.appendChild(title)
  container.appendChild(subtitle)

  return header
}
export default header
