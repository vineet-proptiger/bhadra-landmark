'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What configurations are available at Bhadra Landmark Kengeri?',
    answer: (
      <>
        Bhadra Landmark Kengeri offers spacious <strong className="font-semibold text-[#222222]">3 BHK and 4 BHK luxury apartments</strong> with modern layouts, premium interiors, and large balconies. The residences are thoughtfully designed to maximize natural light, ventilation, and comfortable living for modern families.
      </>
    ),
  },
  {
    question: 'Is Bhadra Landmark Kengeri RERA registered?',
    answer: (
      <>
        Yes, <strong className="font-semibold text-[#222222]">Bhadra Landmark Kengeri</strong> is a RERA-registered project. Buyers are advised to verify the latest RERA registration number and project details on the official Karnataka RERA website or with the authorized sales team before making a purchase.
      </>
    ),
  },
  {
    question: 'How tall is Bhadra Landmark Kengeri and how many towers does it have?',
    answer:
      'Bhadra Landmark Kengeri is a premium high-rise residential development featuring multiple elegantly designed towers. The project offers panoramic city views, modern architecture, and world-class amenities. For the latest tower count and floor details, please contact the official sales team.',
  },
  {
    question: 'Where exactly is Bhadra Landmark Kengeri located?',
    answer: (
      <>
        Bhadra Landmark Kengeri is strategically located on <strong className="font-semibold text-[#222222]">Kengeri, Bengaluru</strong>, offering excellent connectivity to <strong className="font-semibold text-[#222222]">Bhadra Road, Bengaluru-Greater Bengaluru Expressway, Mysore Road, NICE Road, and major IT Hubs</strong>. The location is surrounded by top schools, hospitals, shopping malls, and business hubs.
      </>
    ),
  },
  {
    question: 'Is Bhadra Landmark Kengeri a good investment?',
    answer:
      "Yes, Bhadra Landmark Kengeri is considered a promising investment due to its prime location on Bhadra Road, excellent connectivity, premium amenities, and strong infrastructure growth in the surrounding area. The project's strategic location and the increasing demand for luxury residences in Bengaluru make it an attractive option for both end-users and investors.",
  },
]

const FAQ = () => {
  // First item open by default, set to index 0
  const [openIdx, setOpenIdx] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIdx(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="w-full py-10 md:py-14 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="text-[#1C3F64] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div 
          className="max-w-[960px] mx-auto border border-[#dee2e6] rounded-[12px] sm:rounded-[14px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] divide-y divide-[#dee2e6]"
          data-aos="fade-up"
        >
          {faqData.map((item, index) => {
            const isOpen = openIdx === index

            return (
              <div key={index} className="bg-white">
                {/* Accordion Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`w-full py-4 px-5 sm:py-5 sm:px-7 flex items-center justify-between gap-4 text-left text-[15.5px] sm:text-[17px] transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#e5f0ff] text-[#0052cc] font-semibold shadow-inner'
                      : 'bg-white text-[#212529] font-medium hover:bg-[#fafafa]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  
                  {/* Chevron Icon */}
                  <span className={`text-current transition-transform duration-300 transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="bg-white px-5 py-5 sm:px-7 sm:py-6 text-[#343a40] text-[15px] sm:text-[15.5px] leading-[1.75] border-t border-[#dee2e6]/80 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
