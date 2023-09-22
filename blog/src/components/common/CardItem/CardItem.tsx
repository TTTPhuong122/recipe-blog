import { Card } from 'react-bootstrap'
import './CardItem.css'
import Recipe from '../../../types/Recipe.type'
import { useLocation } from 'react-router-dom'
export default function CardItem(props: { card: Recipe; path: string }) {
  const card = props.card
  return (
    <Card className='my-3 post'>
      <Card.Img variant='top' src={card.image} />
      <Card.Body className=''>
        <Card.Title className='fw-bold'>{card.name}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
        <Card.Link href={`/blog${props.path}${card.id}`} className='fw-bold'>
          Read more
        </Card.Link>
      </Card.Body>
    </Card>
  )
}
