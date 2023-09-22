import { useLocation } from 'react-router-dom'
import { RootState, useAppDispatch } from '../../store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function AddBlog() {
  const currentBlog = useSelector((state: RootState) => state.blog.currentBlog)
  const location = useLocation().pathname.split('/')
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>{currentBlog?.name}</h1>
    </div>
  )
}
