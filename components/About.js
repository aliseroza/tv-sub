import Image from 'next/image'

import aboutImage from '../assets/watching-tv.webp'

const About = () => {
  const features = [ "Easy To Use", "Local & International Channels", "Fast & Secure Servers", "Free Trial for 24 hours" ]
  return (
    <section className="py-6 lg:pb-20">
	    <div className="container">
		    <div className="flex flex-col-reverse lg:flex-row flex-wrap items-center">
			    <div className="w-full lg:w-2/5 px-6 lg:px-0 text-center lg:text-left">
				    <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
					    IPTV Global Premium Service
				    </h2>
				    <p className="text-gray-500 text-xl mb-6 leading-relaxed">IPTVGlobal is a system througth which television services are delivered using the Internet, instead of through traditional terrestrial, satellite signal, and cable television formats. Unlike downloaded media, IPTVGlobal offers the ability to stream media in smaller batches, directly from the source.</p>
			      <ul className="leading-loose text-left font-bold text-lg">
              {features.map((e, i) => (
                <li className="my-1 flex items-center text-mainColor" key={i}>
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                  <span className="ml-2 text-black">{e}</span>
                </li>
              ))}
            </ul>
			    </div>
          <div className="w-full lg:w-3/5">
            <Image
              src={aboutImage}
              alt="IPTV Global service"
            />
          </div>
		    </div>
	    </div>
    </section>
  )
}

export default About