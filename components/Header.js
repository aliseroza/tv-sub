import Image from 'next/image'

import bgImage from '../assets/bg.png'
import Hero from './helpers/Hero'
import Nav from './helpers/Nav'

const Header = () => {
  return (
    <header className="py-6">
      <div className="hidden lg:block absolute top-0 right-0 h-full w-auto z-0">
        <Image
          src={bgImage}
          alt="IPTV Global hero"
        />
      </div>
      <Nav />
      <Hero />
    </header>
  )
}
export default Header