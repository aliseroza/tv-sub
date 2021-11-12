import Feature from "./helpers/Feature"

import hq from '../assets/hq.svg'
import fast from '../assets/fast.svg'
import secure from '../assets/secure.svg'
import update from '../assets/update.svg'

const Features = () => {
  const features = [
    { img: hq, title: "FULL 4K/HD/FHD Quality", desc: "Most of our IPTV channels are available in HD quality and some of them are in 4K" },
    { img: fast, title: "Fast Order Delivery", desc: "We Deliver Your Premium IPTV subscription A Few minutes After Payment Is Made" },
    { img: secure, title: "Safe & Secure Payment", desc: "Secure Payments – No complicated billing processes required." },
    { img: update, title: "Weekly Updates", desc: "The availability of your favorite channels is our top priority." },
  ]
  return (
    <section className="py-6 lg:pb-20">
	    <div className="container">
        <div className="max-w-3xl mx-auto text-center py-6 lg:-y-12">
			    <h2 className="text-4xl font-bold mb-6">Best Features</h2>
			    <p className="text-gray-500 mx-6 lg:mx-12"><span className="font-bold">IPTVGlobal</span> has all the necessary features that will offer you the best IPTV-viewing experience.</p>
		    </div>
        <div className="flex flex-col lg:flex-row flex-wrap mt-4 lg:mt-8">
          {features.map((e, i) => (
            <Feature feature={e} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features