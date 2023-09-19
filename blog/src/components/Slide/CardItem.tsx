import { Col, Row, Card } from 'react-bootstrap'
import CardProps from '../../@types/CardProps'
export default function CardItem(props: CardProps) {
  return (
    <Row className='my-3'>
      <Col>
        <Card className='bg-dark feature'>
          <Card.Img src={props.image} alt='Card image' />
          <Card.ImgOverlay className='w-75 h-75 text-light p-4'>
            <Card.Title className='fw-bold'>
              <h4>{props.title}</h4>
            </Card.Title>
            <Card.Text>
              <h3>{props.content}</h3>
            </Card.Text>
            <Card.Link href='#' className='text-light'>
              Read more
            </Card.Link>
          </Card.ImgOverlay>
        </Card>
      </Col>
    </Row>
  )
}
