import { Row, Col, Container } from 'react-bootstrap'
import CardProps from '../../@types/CardProps'
import CardItem from './CardItem'
function Feature() {
  const card: CardProps = {
    title: 'Breakfast',
    content: 'This is the first recipe',
    image: './assets/images/header.jpg'
  }
  return (
    <Container>
      <Row>
        <Col className='col-md-6 col-lg-4 col-sm-10 col-12'>
          <CardItem {...card} />
        </Col>
        <Col className='col-md-6 col-lg-4 col-sm-10 col-12'>
          <CardItem {...card} />
        </Col>
        <Col className='col-md-6 col-lg-4 col-sm-10 col-12'>
          <CardItem {...card} />
        </Col>
      </Row>
    </Container>
  )
}

export default Feature
