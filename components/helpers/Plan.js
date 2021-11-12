const Plan = ({ plan, index, ...extra }) => {
  const features = [ "13000+ Channels", "Fast & Stable – 99% Uptime", "Instant Delivery", "Hight-Quality Streaming", "24/7 Premium Support" ]
  const text = (index === 0) ? "Start Free Trial" : "Subscribe Now"
  return (
    <div className="w-full lg:w-1/3" { ...extra }>
      <div className={"relative overflow-hidden text-center mx-4 lg:mx-8 my-6 lg:my-0 rounded-2xl hover:shadow-2xl transition duration-500 ease-in-out border border-gray-100 py-16 " + ((index === 2) ? "shadow-xl" : "")}>

        {index === 2 && <span className="badge bg-mainColor text-white absolute top-4 w-32 px-1 py-2">Best Value</span>}

        <h3 className="font-bold text-3xl mb-4 text-mainColor">{plan.title}</h3>
        <h4 className="text-secondColor mb-4"><span className="text-6xl font-semibold">{plan.price}</span> /{plan.time}</h4>
        <div className="py-6 flex flex-col justify-center items-center">
          <ul className="leading-loose text-left">
            {features.map((e, i) => (
              <li className="my-2 flex items-center text-secondColor" key={i}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              <span className="ml-2 text-black">{e}</span>
            </li>
            ))}
          </ul>
          <div className="mt-6">
            <a href={plan.url} target="_blank" className="bg-mainColor text-white px-8 py-3 rounded-full transition duration-500 ease-in-out btn-hover">
                {text}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plan
