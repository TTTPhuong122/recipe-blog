import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import './Navigation.css'
function Navigation() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary position-sticky top-0 top-nav'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className=''>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/feature'>Danh mục</Nav.Link>
          <Nav.Link href='/Add'>Add</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className='d-none d-lg-flex ms-auto'>
        <Nav.Link href='#youtube'>
          <FaYoutube className='fa-2x mx-2' />
        </Nav.Link>
        <Nav.Link href='#fb'>
          <FaInstagram className='fa-2x mx-2' />
        </Nav.Link>
        <Nav.Link href='#ins'>
          <FaFacebook className='fa-2x mx-2' />
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Navigation
