import React from 'react'

const CaseStudiesProps = ({ image, title, text, bgColor }) => {
  return (
    <div className="container px-6 md:px-10 mt-6 md:mt-10">
      <div
        className={`shadow-lg flex flex-col md:flex-row items-start ${bgColor}`}>
        <div className="flex-shrink-0">
          <img src={image} alt="Case Study" className="w-full md:w-auto" />
        </div>
        <div className="flex flex-col justify-start py-6 md:py-0 px-6 md:px-8 mt-4 md:mt-16">
          <p className="text-xl md:text-2xl font-bold">{title}</p>
          <p className="mt-3 text-[#4A556A] text-sm md:text-base">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default CaseStudiesProps
