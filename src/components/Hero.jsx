import React from 'react'
import HeroImg from '../assets/hero.svg'
const Hero = () => {
  return (
    <section className='w-11/12 max-w-screen-2xl mx-auto py-20'>
      <div className="container px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <p className="text-6xl">
              Great <span className="text-gradient">Product</span> is{' '}
              <span className=" font-bold">built by great</span>{' '}
              <span className="teams-gradient">teams</span>
            </p>
            <p className="mt-3 text-lg">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </p>
            <button className="started-button text-white font-bold p-4 rounded mt-20">
              Let's get started!
            </button>
          </div>
          <div>
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
