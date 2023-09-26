import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

function PaginationLine(props: any) {
  const { pageNumbers, currentPage } = props
  console.log(currentPage)
  if (pageNumbers > 1) {
    if (pageNumbers > 4)
      return (
        <Pagination className='justify-content-center'>
          <Pagination.First href='/' />
          <Pagination.Prev />
          <Pagination.Item key={1} active={1 === currentPage}>
            {1}
          </Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item active={currentPage === Math.floor(pageNumbers / 2)}>
            {Math.floor(pageNumbers / 2)}
          </Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item active={currentPage === pageNumbers}>{pageNumbers}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last href={`/page/${pageNumbers}`} />
        </Pagination>
      )
    else {
      const items = []
      for (let index = 1; index <= pageNumbers; index++) {
        items.push(
          <Pagination.Item href={`/page/${index}`} key={index} active={currentPage === index}>
            {index}
          </Pagination.Item>
        )
      }
      return (
        <Pagination className='justify-content-center'>
          <Pagination.First href='/' />
          <Pagination.Prev />
          {items}
          <Pagination.Next />
          <Pagination.Last href={`/page/${pageNumbers}`} />
        </Pagination>
      )
    }
  } else {
    return <></>
  }
}

export default PaginationLine
