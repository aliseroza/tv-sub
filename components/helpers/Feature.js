import Image from 'next/image'

const Feature = ({ feature, ...extra }) => {
  return (
    <div className="w-full lg:w-1/4" { ...extra }>
      <div className="text-center mx-3 lg:mx-4 my-6 lg:my-0 rounded-2xl hover:shadow-2xl transition duration-500 ease-in-out border border-gray-100 px-4 py-8">
        <Image
          src={feature.img}
          alt={feature.title}
          width={100}
          height={100}
        />
        <h3 className="text-xl font-bold my-2">{feature.title}</h3>
        <p className="text-sm font-light text-gray-500">{feature.desc}</p>
      </div>
    </div>
  )
}

export default Feature