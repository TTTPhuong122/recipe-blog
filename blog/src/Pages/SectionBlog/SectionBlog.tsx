import { Col, Container, Row } from 'react-bootstrap'
import Section from './Section/Section'
import Sidebar from './Sidebar/Sidebar'
import Search from '../../components/Search'
import Header from '../../components/Header'
import { useLocation, useParams, useRoutes } from 'react-router-dom'
export default function SectionBlog() {
  const { pageNumber, feature } = useParams()
  const elements = useRoutes([
    {
      path: '*',
      element: <Section pageNumber='4' feature={useLocation().pathname.split('/')[2]} />
    },
    {
      path: '/',
      element: <Section pageNumber={pageNumber} feature={feature} />
    }
  ])
  return (
    <>
      <Header />
      <Container className='position-relative'>
        <Search />
        <Row>
          <Col className='col-12 col-lg-8'>{elements}</Col>
          <Col className='col-lg-4 d-none d-lg-block'>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  )
}
