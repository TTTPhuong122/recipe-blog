import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import './Navigation.css'
function Navigation() {
  return (
    <Container>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className=''>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Featured</Nav.Link>
            <Nav.Link href='#link'>Breakfast</Nav.Link>
            <Nav.Link href='#link'>Fruit</Nav.Link>
            <Nav.Link href='#link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className='d-none d-lg-flex ms-auto'>
          <Nav.Link href='#home'>
            <FaYoutube className='fa-2x mx-2' />
          </Nav.Link>
          <Nav.Link href='#home'>
            <FaInstagram className='fa-2x mx-2' />
          </Nav.Link>
          <Nav.Link href='#home'>
            <FaFacebook className='fa-2x mx-2' />
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default Navigation
