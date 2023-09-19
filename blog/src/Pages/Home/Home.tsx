import Feature from '../../components/Slide/Feature'
import Header from '../../components/Header'
import Search from '../../components/Search'
import SectionBlog from '../../components/SectionBlog'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div>
      {/* Page Header */}
      <Header />
      <Navigation />
      <Feature />
      <Search />
      <SectionBlog />
      <Footer />
      {/* Search bar */}
      {/* Blog List  */}
    </div>
  )
}
