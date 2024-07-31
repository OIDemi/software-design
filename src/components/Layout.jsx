import React from 'react'
import Logo from '../assets/logo.svg'
import Hero from './Hero'
const Layout = () => {
  return (
    <>
      <nav className='  flex items-center justify-between p-4 shadow-lg'>
        <img src={Logo} alt="Brand Logo" />
        <ul className='flex space-x-6'>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Case Studies</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">How it Works</a>
          </li>
        </ul>

        <button className="btn-gradient py-2 px-4 rounded text-white hover:opacity-90 transition-opacity duration-300">
          Contact Us
        </button>
      </nav>

      <main>
        <Hero/>
      </main>
    </>
  )
}

export default Layout