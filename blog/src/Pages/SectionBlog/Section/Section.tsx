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
  pageNumber: string | undefined
  feature: string | undefined
}
export interface RecipeCard extends Recipe {
  category: string
}
export default function Section(props: SectionProps) {
  const { feature, pageNumber } = props
  let currentPage = 1
  if (pageNumber !== undefined) {
    currentPage = parseInt(pageNumber, 10)
  }
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
  let start = 8 * (currentPage - 1)
  let end = start + 8 > blogList.length ? blogList.length : start + 8
  return (
    <Container>
      <InputGroup.Text id='basic-addon1'>
        <h3>Recipe</h3>
      </InputGroup.Text>
      {!loading && (
        <div>
          <Row>
            {blogList &&
              end - start < 8 &&
              blogList.slice(start, end + 1).map((recipe) => (
                <Col className=' col-lg-6 col-12'>
                  <CardItem card={recipe} key={recipe.id} />
                </Col>
              ))}
            {blogList &&
              end - start >= 8 &&
              blogList.slice(start, end).map((recipe) => (
                <Col className=' col-lg-6 col-12'>
                  <CardItem card={recipe} key={recipe.id} />
                </Col>
              ))}
          </Row>
          <PaginationLine currentPage={currentPage} pageNumbers={Math.ceil(blogList.length / 8)} />
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
