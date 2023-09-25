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
export interface RecipeCard extends Recipe {
  category: string
}
export default function Section(props: SectionProps) {
  const { feature } = props
  // const card: CardProps = {
  //   title: 'This is the first recipe, This is the first ffsjdkffhdsffkhdffls',
  //   description:
  //     'Những cuộn thịt bò nấm kim châm dai mềm, đậm đà được nướng hoặc áp chảo thơm phức luôn là một trong những món bán chạy nhất trong các nhà hàng. Nhưng bạn không cần phải cất công đến nhà hàng nữa mà ngay tại nhà bạn vẫn có thể làm được món này với công thức siêu dễ, siêu nhanh.',
  //   image: './assets/images/header.jpg'
  // }
  // const [blogList, blogList = ] = useState<ListBlog>(initial)
  let blogList: RecipeCard[] = []
  const breakfast = useSelector((state: RootState) => state.blog.breakfasts)
  const snack = useSelector((state: RootState) => state.blog.snacks)
  const mainfood = useSelector((state: RootState) => state.blog.mainfoods)
  const loading = useSelector((state: RootState) => state.blog.loading)
  const dispatch = useAppDispatch()
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
  const newBreakfast: RecipeCard[] = []
  breakfast?.forEach((breakfast) => {
    newBreakfast.push({ ...breakfast, category: 'breakfast' })
  })
  const newMainfood: RecipeCard[] = []
  mainfood?.forEach((mainfood) => {
    newMainfood.push({ ...mainfood, category: 'mainfood' })
  })
  const newSnack: RecipeCard[] = []
  snack?.forEach((snack) => {
    newSnack.push({ ...snack, category: 'snack' })
  })
  const featureList = ['breakfast', 'mainfood', 'snack']
  const featureBlogList = [newBreakfast, newMainfood, newSnack]
  if (feature) {
    blogList = featureBlogList[featureList.indexOf(feature)]
  } else {
    blogList = newBreakfast.concat(newMainfood, newSnack)
  }
  let blogCount = blogList.length
  return (
    <Container>
      <InputGroup.Text id='basic-addon1'>
        <h3>Recipe</h3>
      </InputGroup.Text>
      {!loading && (
        <div>
          <Row>
            {blogList &&
              blogCount < 7 &&
              blogList.map((recipe) => (
                <Col className=' col-lg-6 col-12'>
                  <CardItem card={recipe} key={recipe.id} />
                </Col>
              ))}
            {blogList &&
              blogCount >= 7 &&
              blogList.slice(0, 8).map((recipe) => (
                <Col className=' col-lg-6 col-12'>
                  <CardItem card={recipe} key={recipe.id} />
                </Col>
              ))}
          </Row>
          <PaginationLine pageNumbers={Math.round(blogCount / 8)} />
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
