import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Section from './Section'
import Sidebar from './Sidebar/Sidebar'

export default function SectionBlog() {
  return (
    <Container>
      <Row>
        <Col className='col-12 col-lg-7'>
          <Section />
        </Col>
        <Col className='col-lg-5 d-none d-lg-block'>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  )
}
