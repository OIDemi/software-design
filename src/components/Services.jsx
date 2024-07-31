import React from 'react'
import MobileApp from '../assets/mobileapp.svg'
import ServicesList from './ServicesList'

const Services = () => {
  return (
    <section className="services min-h-[602px]">
      <h1 className=" text-3xl font-semibold text-center pt-10">
        Services we offer
      </h1>
      <div className="flex justify-center mt-36">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <ServicesList
            image={MobileApp}
            title="Mobile App Development"
            text="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
          />
          <ServicesList
            image={MobileApp}
            title="Web Design & Development"
            text="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
          />
          <ServicesList
            image={MobileApp}
            title="Software Testing Service"
            text="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
          />
        </div>
      </div>
    </section>
  )
}

export default Services
