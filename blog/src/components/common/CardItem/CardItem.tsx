import { Card } from 'react-bootstrap'
import './CardItem.css'
import { useLocation } from 'react-router-dom'
import { RecipeCard } from '../../../Pages/SectionBlog/Section/Section';
export default function CardItem(props: { card: RecipeCard}) {
  const card = props.card
  return (
    <Card className='my-3 post'>
      <Card.Img variant='top' src={card.image} />
      <Card.Body className=''>
        <Card.Title className='fw-bold'>{card.name}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
        <Card.Link href={`/blog/${card.category}/${card.id}`} className='fw-bold'>
          Read more
        </Card.Link>
      </Card.Body>
    </Card>
  )
}
