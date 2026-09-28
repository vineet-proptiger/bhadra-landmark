'use client'
import React from 'react'

const amenities = [
  {
    title: 'Swimming Pool',
    description: 'With natural rock waterfall',
    icon: 'fa-solid fa-water-ladder'
  },
  {
    title: 'Gym',
    description: 'Modern fitness equipment',
    icon: 'fa-solid fa-dumbbell'
  },
  {
    title: 'Steam & Sauna',
    description: 'Rejuvenating steam & sauna suites',
    icon: 'fa-solid fa-spa'
  },
  {
    title: "Kids' Splash Pool",
    description: 'Safe & fun water play zone',
    icon: 'fa-solid fa-child-reaching'
  },
  {
    title: 'Banquet Hall',
    description: 'Premium celebration space',
    icon: 'fa-solid fa-champagne-glasses'
  },
  {
    title: 'Multimedia Theatre',
    description: 'Private screening experience',
    icon: 'fa-solid fa-film'
  },
  {
    title: 'Karaoke & Dance Hall',
    description: 'With karaoke and dance floor',
    icon: 'fa-solid fa-music'
  },
  {
    title: 'Outdoor Cafe',
    description: 'Alfresco dining & social lounge',
    icon: 'fa-solid fa-mug-hot'
  }
]

const Amenities = () => {
  return (
    <section id="amenities" className="w-full py-10 md:py-14 font-poppins" style={{ background: '#f9f9f9' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="text-[#1C3F64] font-bold text-[14px] tracking-[2px] uppercase mb-3 block">
            WORLD CLASS AMENITIES
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-bold m-0">
            A Lifestyle Beyond Ordinary
          </h2>
        </div>

        {/* 4x3 Grid of Amenity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 md:gap-7">
          {amenities.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={((index % 4) * 50).toString()}
              className="group bg-white rounded-[20px] p-8 text-center border border-[#e8eff6] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2.5 hover:shadow-[0_15px_35px_rgba(28, 63, 100,0.12)] transition-all duration-300 cursor-pointer flex flex-col items-center justify-center"
            >
              {/* Icon in Circular Badge */}
              <div className="w-[76px] h-[76px] rounded-full bg-[#e8eff6] text-[#1C3F64] group-hover:bg-[#1C3F64] group-hover:text-white flex items-center justify-center text-[28px] mb-6 transition-all duration-300 group-hover:scale-110 shadow-[0_4px_10px_rgba(28, 63, 100,0.1)] group-hover:shadow-[0_6px_20px_rgba(28, 63, 100,0.3)]">
                <i className={item.icon}></i>
              </div>

              {/* Title */}
              <h4 className="text-[#222222] font-extrabold text-[19px] mb-2.5 tracking-tight group-hover:text-[#1C3F64] transition-colors duration-200">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-[#6c757d] text-[13.5px] leading-relaxed m-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Amenities
