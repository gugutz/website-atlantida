import NavbarItems from './navbar-item.js'

const Navbar = () => {
  `
  <nav class='navbar is-transparent'>
    <ul class='navbar-start'>
      ${NavbarItems}
    </ul>
  </nav>
`
}

export default Navbar;
