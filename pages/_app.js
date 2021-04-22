import '../styles/globals.css'
import Image from 'next/image'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
      <Link href="/rooms">
        <a className="bedroom-icon">
        <Image
          src="/icons/bed.png"
          width={35}
          height={35}
        />
        </a>
      </Link>
    <Link href="/location">
      <a className="location-icon">
      <Image
        src="/icons/location.png"
        width={35}
        height={35}
      />
      </a>
    </Link>
    <Link href="/gallery">
      <a className="gallery-icon">
      <Image
        src="/icons/gallery.png"
        width={35}
        height={35}
      />
      </a>
    </Link>
    <Link href="/">
      <a className="back-icon">
      <Image
        src="/icons/back.png"
        width={45}
        height={45}
      />
      </a>
    </Link>
    </>
  )
}

export default MyApp
