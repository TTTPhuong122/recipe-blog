import './App.css'
import Blog from './Pages/Blog'
import Home from './layouts/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import SectionBlog from './Pages/SectionBlog/SectionBlog'
import Feature from './Pages/Feature'
import AddBlog from './Pages/AddBlog'
function App() {
  return (
    <Home>
      <Routes>
        <Route path='/' element={<SectionBlog />} />
        <Route path='/page/:pageNumber' element={<SectionBlog />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/feature/*' element={<SectionBlog />} />
        <Route path='/blog/*' element={<Blog />} />
        <Route path='/add' element={<AddBlog />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Home>
  )
}

export default App
