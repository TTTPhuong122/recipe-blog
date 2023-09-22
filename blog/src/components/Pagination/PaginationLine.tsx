import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

function PaginationLine(props: any) {
  const { pageNumbers } = props

  if (pageNumbers > 1) {
    if (pageNumbers > 4)
      return (
        <Pagination className='justify-content-center'>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{Math.floor(pageNumbers / 2)}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{pageNumbers}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      )
    else {
      return (
        <Pagination className='justify-content-center'>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      )
    }
  } else {
    // Trả về null nếu chỉ có 1 trang hoặc không có trang nào.
    return <></>
  }
}

export default PaginationLine
