import CardProps from '../../@types/CardProps'
import { Col, Container, Row } from 'react-bootstrap'
import CardItem from '../common/CardItem/CardItem'

export default function Section() {
  const card: CardProps = {
    title: 'Breakfast',
    content: 'This is the first recipe',
    image: './assets/images/header.jpg'
  }
  return (
    <Container>
      <Row>
        <Col className=' col-lg-6 col-12'>
          <CardItem {...card} />
        </Col>
        <Col className=' col-lg-6 col-12'>
          <CardItem {...card} />
        </Col>
        <Col className=' col-lg-6 col-12'>
          <CardItem {...card} />
        </Col>
      </Row>
    </Container>
  )
}
