import Image from 'next/image'

import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="py-8 mx-4 lg:mx-0">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={Logo}
            alt="IPTV Global"
            height={120}
            width={120}
          />
          <p className="font-light my-4">© IPTVGlobal, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer