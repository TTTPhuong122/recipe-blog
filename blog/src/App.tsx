import './App.css'
import Blog from './Pages/Blog'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
