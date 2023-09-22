import CardProps from '../../../types/CardProps'
import { Card } from 'react-bootstrap'
import CardSidebar from './CardSidebar'
import CardItem from '../../Feature/CardItem'

export default function Sidebar() {
  const card: CardProps = {
    title: 'This is the first recipe, This is the first recipe',
    description: 'This is the first recipe',
    image: '.././assets/images/header.jpg'
  }
  return (
    <>
      <Card className='my-3'>
        <Card.Img className='w-75 h-75 mx-4' variant='top' src='.././assets/images/avatar.webp' />
        <Card.Body>
          <Card.Title>
            <h2 className='fw-bold'>Trần Thị Thu Phượng</h2>
          </Card.Title>
          <h6>The person wanna become a millionaire</h6>
          <Card.Text>I LIKE WATCHING AND COLLECTING FOOD RECIPES</Card.Text>
        </Card.Body>
      </Card>
      <h4>My personal favorites</h4>
      <hr className='w-50 lh-base' />
      <CardSidebar {...card} />
      <CardSidebar {...card} />
      <CardSidebar {...card} />
      <h4>Interesting</h4>
      <hr className='w-50 lh-base' />
      <CardItem {...card} />
    </>
  )
}
