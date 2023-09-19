import { Card } from 'react-bootstrap'
import CardProps from '../../../@types/CardProps'
import './CardItem.css'
export default function CardItem(props: CardProps) {
  return (
    <Card className='my-3'>
      <Card.Img variant='top' src={props.image} />
      <Card.Body className=''>
        <Card.Title className='fw-bold'>{props.title}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Card.Link className='fw-bold'>Read more</Card.Link>
      </Card.Body>
    </Card>
  )
}
