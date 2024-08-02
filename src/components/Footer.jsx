import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-bold">Software</p>
          <p className="text-sm">© 2024 Software. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="/" className="text-gray-400 hover:text-white">
            About Us
          </a>
          <a href="/" className="text-gray-400 hover:text-white">
            Services
          </a>
          <a href="/" className="text-gray-400 hover:text-white">
            Case Studies
          </a>
          <a href="/" className="text-gray-400 hover:text-white">
            Blog
          </a>
          <a href="/" className="text-gray-400 hover:text-white">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
