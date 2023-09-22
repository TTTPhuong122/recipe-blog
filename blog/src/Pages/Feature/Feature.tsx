import { Row, Col, Container, Card } from 'react-bootstrap'
import CardProps from '../../types/CardProps'
import CardItem from './CardItem'
function Feature() {
  // const card: CardProps = {
  //   title: 'Breakfast',
  //   description: 'This is the first recipe',
  //   image: './assets/images/header.jpg'
  // }
  return (
    <Container className='mt-5 vh-100'>
      <Row>
        <Col className='col-md-6 col-lg-4 col-sm-10 col-12'>
          <Row className='my-3'>
            <Col>
              <Card className='bg-dark feature'>
                <Card.Img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63zhLYvf80lhssK05Xi4yDE_SjDeGifwKUg&usqp=CAU'
                  alt='Card image'
                />
                <Card.ImgOverlay className='w-75 h-75 text-light p-4'>
                  <Card.Title className='fw-bold'>
                    <h4>Breakfast</h4>
                  </Card.Title>
                  <Card.Text>
                    <h3>Chọn món nấu bữa sáng ngay thui nào</h3>
                  </Card.Text>
                  <Card.Link href='/feature/breakfast' className='text-light'>
                    Click vào đây
                  </Card.Link>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col className='col-md-6 col-lg-4 col-sm-10 col-12'>
          <Row className='my-3'>
            <Col>
              <Card className='bg-dark feature'>
                <Card.Img
                  src='https://www.thespruceeats.com/thmb/NKrzAkVokEycHnVDEX6vi8Hg3RQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/creamy-tomato-pasta-481963-Hero-5b6afcf6c9e77c0050e73162.jpg'
                  alt='Card image'
                />
                <Card.ImgOverlay className='w-75 h-75 text-light p-4'>
                  <Card.Title className='fw-bold'>
                    <h4>Main Food</h4>
                  </Card.Title>
                  <Card.Text>
                    <h3>Bữa nay nấu gì nhỉ?</h3>
                  </Card.Text>
                  <Card.Link href='/feature/mainfood' className='text-light'>
                    Click vào đây
                  </Card.Link>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col className='col-md-6 col-lg-4 col-sm-10 col-12'>
          <Row className='my-3'>
            <Col>
              <Card className='bg-dark feature'>
                <Card.Img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGW_gKQat39SIXrHu7MZatjfJxK5FkgDfJ5w&usqp=CAU'
                  alt='Card image'
                />
                <Card.ImgOverlay className='w-75 h-75 text-light p-4'>
                  <Card.Title className='fw-bold'>
                    <h4>Snacks</h4>
                  </Card.Title>
                  <Card.Text>
                    <h3>Ăn rồi ta cùng lăn</h3>
                  </Card.Text>
                  <Card.Link href='/feature/snack' className='text-light'>
                    Click vào đây
                  </Card.Link>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Feature
