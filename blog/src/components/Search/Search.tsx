import { Button, Container, Form, InputGroup, Navbar, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import './Search.css'
export default function Search() {
  return (
    <Container>
      <InputGroup className='my-4'>
        <Form.Control placeholder='Search' aria-label='Search' aria-describedby='basic-addon2' />
        <Button id='button-addon2'>
          <FaSearch />
        </Button>
      </InputGroup>
    </Container>
  )
}
