import React from 'react'
import HeroImg from '../assets/hero.svg'
import CompaniesImg from '../assets/companies-img.svg'
const Companies = () => {
  return (
    <section className="w-11/12 max-w-screen-2xl mx-auto py-20">
      <div className="container px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <p className="text-4xl">
              Leading companies trust us{' '}
              <span className=" font-bold">to develop software</span>
            </p>
            <p className="mt-3 text-lg">
              We <span className="text-gradient">add development capacity</span>{' '}
              to tech teams. Our value isn’t limited to building teams but is
              equally distributed across the project lifecycle. We are a custom
              software development company that guarantees the successful
              delivery of your project.
            </p>
            <p className="mt-10">
              <a href="/" className="text-gradient">
                See more informations
              </a>
            </p>
          </div>
          <div>
            <img src={CompaniesImg} alt="" className="mt-7 md:mt-0" />
          </div>
          <div className='mt-20'>
            <p className="max-w-[412px] text-4xl">
              Meet the People{' '}
              <span className="font-bold">We are Working with</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies