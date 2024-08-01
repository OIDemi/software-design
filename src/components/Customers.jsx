import React from 'react'
import People1 from '../assets/people1.svg'
import { People } from './CustomersData'

const List = People.map((data) => {
    const {image,name,title} = data
    return (
      <div key={name} className="flex space-x-10 mt-10">
        <div className="relative text-center">
          <img src={image} alt={name} className=" rounded-full mx-auto" />
          <div>
            <p className="font-bold">{name}</p>
            <p>{title}</p>
          </div>
        </div>
      </div>
    )
})
const Customers = () => {
  return (
    <section className=' p-20'>
      <div>
        <p className="text-center text-3xl">
          Why customers love <br />{' '}
          <span className=" font-bold ">working with us</span>
        </p>
      </div>
      <div className="text-center max-w-[535px] mx-auto mt-10">
        <p className="text-gray-600">
          Without any doubt I recommend Alcaline Solutions as one of the best
          web design and digital marketing agencies. One of the best agencies
          I’ve came across so far. Wouldn’t be hesitated to introduce their work
          to someone else.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">{List}</div>
    </section>
  )
}

export default Customers
