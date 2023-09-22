import Carousel from 'react-bootstrap/Carousel'
import './Header.css'
import ExampleCarouselImage from './ExampleCarouselImage'

function Header() {
  return (
    <Carousel className='px-3'>
      <Carousel.Item interval={3000}>
        <Carousel.Caption>
          <h1>Food Recipe Blog</h1>
          <h4>Lưu trữ công thức náu ăn thui nè</h4>
        </Carousel.Caption>
        <div className='overlay'></div>
        <ExampleCarouselImage src='.././assets/images/header.jpg' alt='First slide' />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage src='.././assets/images/Header 2.jfif' alt='Second slide' />
        <Carousel.Caption className=''>
          <h1>Food Recipe Blog</h1>
          <h4>Lưu trữ công thức náu ăn thui nè</h4>
        </Carousel.Caption>
        <div className='overlay'></div>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage src='.././assets/images/Post 5.jpg' alt='Third slide' />
        <Carousel.Caption>
          <h1>Food Recipe Blog</h1>
          <h4>Lưu trữ công thức náu ăn thui nè</h4>
        </Carousel.Caption>
        <div className='overlay'></div>
      </Carousel.Item>
    </Carousel>
  )
}

export default Header
