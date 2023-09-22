import { useLocation } from 'react-router-dom'
import { RootState, useAppDispatch } from '../../store'
import { useSelector } from 'react-redux'
import { getBreakfast, getMainfood, getSnack } from '../blog.slice'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Blog.css'
import NotFound from '../NotFound'
import Skeleton from 'react-loading-skeleton'

export default function Blog() {
  const currentBlog = useSelector((state: RootState) => state.blog.currentBlog)
  const loading = useSelector((state: RootState) => state.blog.loading)
  const location = useLocation().pathname.split('/')
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (location[2] === 'breakfast') dispatch(getBreakfast(location[3]))
    else if (location[2] === 'snack') dispatch(getSnack(location[3]))
    else if (location[2] === 'mainfood') dispatch(getMainfood(location[3]))
  }, [dispatch])
  let listIngredients: any[] = []
  if (currentBlog) listIngredients = currentBlog.ingredients.split('\n')
  return (
    <>
      {!loading && (
        <Container className='my-5 blog'>
          {currentBlog && (
            <>
              <h6 className='fs-2 p-3 text-center'>{currentBlog.name}</h6>
              <span>{currentBlog.description}</span>
              <h2 className='py-3'>1. NGUYÊN LIỆU</h2>
              <ul>
                {listIngredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
              <img src={currentBlog.image} alt='imageFood' />
              <h2 className='mt-3'>2. CÁCH LÀM</h2>
              {currentBlog.introduction.map((step) => {
                return (
                  <>
                    <h3 className='mt-3'>{step.step}</h3>
                    <span>{step.description}</span>
                    {step.image && <img src={step.image} alt='imageStep' />}
                  </>
                )
              })}
              <h2 className='py-3'>3. THƯỞNG THỨC</h2>
              <span>{currentBlog.result.description}</span>
              <img src={currentBlog.result.image} alt='result' />
            </>
          )}
          {!currentBlog && <NotFound />}
        </Container>
      )}
      {loading && (
        <Row>
          <Col className=' mb-3'>
            <Skeleton height={20} />
            <br />
            <Skeleton height={15} count={5} />
          </Col>
        </Row>
      )}
    </>
  )
}
