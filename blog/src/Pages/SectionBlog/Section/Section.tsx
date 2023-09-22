import { Col, Container, InputGroup, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import './Section.css'
import CardItem from '../../../components/common/CardItem/CardItem'
import PaginationLine from '../../../components/Pagination'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../../store'
import { getBreakfasts, getMainFoods, getSnackfs } from '../../blog.slice'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useLocation } from 'react-router-dom'
import Recipe from '../../../types/Recipe.type'
interface SectionProps {
  currentPage: number
  feature: string | null
}
export default function Section(props: SectionProps) {
  const { currentPage, feature } = props
  // const card: CardProps = {
  //   title: 'This is the first recipe, This is the first ffsjdkffhdsffkhdffls',
  //   description:
  //     'Những cuộn thịt bò nấm kim châm dai mềm, đậm đà được nướng hoặc áp chảo thơm phức luôn là một trong những món bán chạy nhất trong các nhà hàng. Nhưng bạn không cần phải cất công đến nhà hàng nữa mà ngay tại nhà bạn vẫn có thể làm được món này với công thức siêu dễ, siêu nhanh.',
  //   image: './assets/images/header.jpg'
  // }
  // const [blogList, setBlogList] = useState<Recipe[]>([])
  let blogList: Recipe[] = []
  const category = useLocation().pathname.split('/')[3]
  const breakfast = useSelector((state: RootState) => state.blog.breakfasts)
  const snack = useSelector((state: RootState) => state.blog.snacks)
  const mainfood = useSelector((state: RootState) => state.blog.mainfoods)
  const loading = useSelector((state: RootState) => state.blog.loading)
  const dispatch = useAppDispatch()
  let pageNumber = 0
  // useEffect(() => {
  //   if (category === 'breakfast') {
  //     const promsie = dispatch(getBreakfasts())
  //     return () => {
  //       promsie.abort()
  //     }
  //   } else if (category === 'mainfood') {
  //     const promsie = dispatch(getMainFood())
  //     return () => {
  //       promsie.abort()
  //     }
  //   } else if (category === 'snack') {
  //     const promsie = dispatch(getSnackfs())
  //     return () => {
  //       promsie.abort()
  //     }
  //   } else {
  //     const promsie = dispatch(getRecipeList())
  //     return () => {
  //       promsie.abort()
  //     }
  //   }
  // }, [dispatch])
  useEffect(() => {
    const promsie = dispatch(getBreakfasts())
    const promsie2 = dispatch(getMainFoods())
    const promsie3 = dispatch(getSnackfs())

    return () => {
      promsie.abort()
      promsie2.abort()
      promsie3.abort()
    }
  }, [])
  if (breakfast && snack && mainfood) {
    if (feature) {
      if (feature === 'breakfast') blogList = [...breakfast]
      else if (feature === 'mainfood') blogList = [...mainfood]
      else if (feature === 'snack') blogList = [...snack]
    } else {
      blogList = blogList.concat(snack, breakfast, mainfood)
    }

    pageNumber = blogList.length
  }
  const path = feature ? '/' + feature + '/' : '/'
  console.log(blogList)
  return (
    <Container>
      <InputGroup.Text id='basic-addon1'>
        <h3>Recipe</h3>
      </InputGroup.Text>
      {!loading && (
        <div>
          <Row>
            {blogList &&
              blogList.slice(0, 2).map((recipe) => (
                <Col className=' col-lg-6 col-12'>
                  <CardItem card={recipe} path={path} key={recipe.id} />
                </Col>
              ))}
          </Row>
          {/* <Row>
            {blogList &&
              blogList.slice(2, 4).map((recipe) => (
                <Col className=' col-lg-6 col-12'>
                  <CardItem card={recipe} path={path} key={recipe.id} />
                </Col>
              ))}
          </Row>
          <Row>
            {blogList &&
              blogList.slice(4, 6).map((recipe) => (
                <Col className=' col-lg-6 col-12'>
                  <CardItem card={recipe} path={path} key={recipe.id} />
                </Col>
              ))}
          </Row> */}
          <PaginationLine pageNumbers={Math.floor(pageNumber / 2)} />
        </div>
      )}
      {loading && (
        <Row>
          <Col className=' col-lg-6 col-12 mb-3'>
            <Skeleton height={20} />
            <br />
            <Skeleton height={15} count={5} />
          </Col>
          <Col className=' col-lg-6 col-12 '>
            <Skeleton height={20} />
            <br />
            <Skeleton height={15} count={5} />
          </Col>
        </Row>
      )}
    </Container>
  )
}
