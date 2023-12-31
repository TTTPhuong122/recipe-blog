import Image from 'react-bootstrap/Image'
import './ExampleCarouselImage.css'
export default function ExampleCarouselImage({ src, alt }: { src: string; alt: string }) {
  return (
    <>
      <Image src={src} alt={alt} width={'100%'} height={'300px'} className='style' />
    </>
  )
}
