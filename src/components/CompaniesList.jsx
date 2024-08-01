import React from 'react'
import Companies1 from '../assets/companieslist1.svg'
import Companies2 from '../assets/companieslist2.svg'
import Companies3 from '../assets/companieslist3.svg'
import Companies4 from '../assets/companieslist4.svg'
import Companies5 from '../assets/companieslist5.svg'
import Companies6 from '../assets/companieslist6.svg'
const CompaniesList = () => {
  return (
    <div>
      <section className="bg-[#F7F7FA]">
        <div className=' grid grid-cols-2 gap-6 md:flex justify-between p-10 '>
          <img src={Companies1} alt="Sampath Cream House" />
          <img src={Companies2} alt="#" />
          <img src={Companies3} alt="AdClipse" />
          <img src={Companies4} alt="PJC Bridge" />
          <img src={Companies5} alt="ClickOrder" />
          <img src={Companies6} alt="TechMate" />
        </div>
      </section>
    </div>
  )
}

export default CompaniesList
