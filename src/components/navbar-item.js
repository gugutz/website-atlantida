
// array of links for the sidebar,
// temporary fix
const links = [
  {href: '#', text: 'Inicio'},
  {href: '#aboutus', text: 'Sobre a empresa'},
  {href: '#contact', text: 'Fale Conosco'}
]



const NavbarItems = ({href}, {text}) => {
`  <li className="navbar-item">
    <a href=${href}>${text}</a>
  </li>
  `
}

export default NavbarItems
