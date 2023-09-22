import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

interface Props {
  children?: React.ReactNode
}
export default function Home({ children }: Props) {
  return (
    <div className='vh-100'>
      <Navigation />
      {children}

      <Footer />
    </div>
  )
}
