import Image from 'next/image'
import { bgWrap, bgText } from '../styles/styles.module.css'
import Gallery from './gallery'

const Background = () => (
  <div>
    <div className={bgWrap}>
      <Image
        alt="blougans breakfast area"
        src="/images/breakfast-area.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <div className={bgText}>
      Blougans B{'&'}B
    </div>
  </div>
)

export default Background
