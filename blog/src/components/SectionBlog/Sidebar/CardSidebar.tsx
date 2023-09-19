import { Card, Col, Row } from 'react-bootstrap'
import CardProps from '../../../@types/CardProps'
export default function CardSidebar(props: CardProps) {
  return (
    <Row className='pb-4'>
      <Col className='col-4'>
        <Card.Img variant='left' src='./assets/images/header.jpg' className='w-100' height={'100%'} />
      </Col>
      <Col className='col-8'>
        <Card.Title className=' flex-wrap'>
          <a href='/' className='text-decoration-none text-black'>
            <h4 className='overflow-hidden'>{props.title}</h4>
          </a>
        </Card.Title>
        <Card.Link>
          <h6>Read more</h6>
        </Card.Link>
      </Col>
    </Row>
  )
}
