import React from 'react'
import CaseStudy1 from '../assets/casestudy1.svg'
import CaseStudy2 from '../assets/casestudy2.svg'
import CaseStudy3 from '../assets/casestudy3.svg'
import CaseStudiesProps from './CaseStudiesProps'

const CaseStudies = () => {
  return (
    <section className="p-6 md:p-20 bg-[#F7F7FA]">
      <div>
        <p className="text-center text-2xl md:text-3xl">
          Our recent <br /> <span className="font-bold">Case studies</span>
        </p>
      </div>

      <CaseStudiesProps
        image={CaseStudy1}
        title="Website Design for SCFC Canada"
        text="Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry."
        bgColor="bg-[#F1F2FF]" // Pass the desired background color here
      />

      <CaseStudiesProps
        image={CaseStudy2}
        title="Website Design for SCFC Canada"
        text="Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry."
        bgColor="bg-[#F0FFF7]" // Different background color
      />

      <CaseStudiesProps
        image={CaseStudy3}
        title="Website Design for SCFC Canada"
        text="Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry."
        bgColor="bg-[#FFF4F4]" // Different background color
      />
    </section>
  )
}

export default CaseStudies
