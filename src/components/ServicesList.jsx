import React from 'react'

const ServicesList = ({image,title,text,children}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm min-h-[287px]">
      <img src={image} alt={children} className="mb-2"/>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-[#4a5568] mb-4">
        {text}
      </p>
    </div>
  )
}

export default ServicesList