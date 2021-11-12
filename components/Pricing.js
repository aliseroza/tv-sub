import Plan from "./helpers/Plan"

const Pricing = () => {
  const plans = [
    {
      title: 'Free',
      price: 'Free',
		  time: '120 min',
      url: 'https://wa.me/+447874804631'
    },
    {
      title: '1 Year',
      price: '40 euro',
		  time: '12 month',
      url: 'https://wa.me/+447874804631'
    },
    {
      title: '2 Year',
      price: '65 euro',
		  time: '24 month',
      url: 'https://wa.me/+447874804631'
    }
  ]
  return (
    <section id="pricing" className="py-6 lg:pb-20">
      <div className="container">
		    <div className="max-w-3xl mx-auto text-center py-6 lg:-y-12">
			    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Choose your plan</h2>
			    <p className="text-gray-500 mx-6 lg:mx-12">Choose The Best IPTV Subscription Plan That is Right for You. You're 100% backed by our 24-hours money-back guarantee.</p>
		    </div>
        <div className="flex flex-col lg:flex-row flex-wrap lg:mt-6">
          {plans.map((plan, index) => (
            <Plan plan={plan} index={index} key={index} />
          ))}
        </div>
      </div>
</section>
  )
}

export default Pricing
