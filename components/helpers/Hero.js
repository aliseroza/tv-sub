import Image from 'next/image'

import heroImage from '../../assets/watching-tv.png'

const Hero = () => {
  return (
    <section className="py-6 lg:pb-20">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row flex-wrap items-center relative z-10">
          <div className="w-full lg:w-2/5 px-6 lg:px-0 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">Enjoy 13000+ Premium Channel</h1>
            <p className="text-gray-500 text-xl mb-6 leading-relaxed">The best IPTV subscription on the go, No contract, No cancellation fees. 24/7 Premium support with Support all plateforms.</p>
            <a href="#pricing" className="bg-mainColor text-white px-8 py-3 rounded-full transition duration-500 ease-in-out btn-hover">
              Subscribe Now
            </a>
          </div>
          <div className="w-full lg:w-3/5 flex justify-end">
            <Image
              src={heroImage}
              alt="IPTV Global hero"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
