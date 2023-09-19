import Carousel from 'react-bootstrap/Carousel'
import ExampleCarouselImage from '../ExampleCarouselImage'
import './Header.css'

function Header() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage src='./assets/images/header.jpg' alt='First slide' />
        <Carousel.Caption>
          <h1>Food Recipe Blog</h1>
          <h6>Lưu trữ công thức náu ăn thui nè</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage src='./assets/images/Header 2.jfif' alt='Second slide' />
        <Carousel.Caption>
          <h1>Food Recipe Blog</h1>
          <h6>Lưu trữ công thức náu ăn thui nè</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage src='./assets/images/Post 5.jpg' alt='Third slide' />
        <Carousel.Caption>
          <h1>Food Recipe Blog</h1>
          <h6>Lưu trữ công thức náu ăn thui nè</h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Header
