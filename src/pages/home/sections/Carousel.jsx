import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import cardImg from '../../../assets/images/expert.png';
import media from '../../../assets/images/media.png';



const teamMembers = [
  {
    id: 1,
    name: 'Dr. Mezbah Uddin Ahmed',
    role: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    image: cardImg,
  },
  {
    id: 2,
    name: 'Dr. Mezbah Uddin Ahmed',
    role: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    image: cardImg,
  },
  {
    id: 3,
    name: 'Dr. Mezbah Uddin Ahmed',
    role: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    image: cardImg,
  },
  {
    id: 4,
    name: 'Dr. Mezbah Uddin Ahmed',
    role: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    image: cardImg,
  },
];

const OurExpertTeam = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h2 className="text-4xl font-bold mb-3 text-gray-800">Our Expert Team</h2>
      <p className='text-center text-[#686868] mb-8'>Our team consists of seasoned professionals with extensive experience <br /> in Islamic finance and management.
       Each member brings a unique set of <br /> skills and expertise.</p>

      <div className="overflow-hidden w-full max-w-6xl" ref={emblaRef}>
        <div className="flex">
          {teamMembers.map((member, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={member.id}
                className="flex-shrink-0 w-[50%] h-[300px] mx-4 bg-[#D2E6E4] rounded-xl shadow-lg p-6 flex items-center transition-all duration-500"
                style={{
                  transform: `scale(${isActive ? 1 : 0.8})`,
                  opacity: isActive ? 1 : 0.5,
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[200px] rounded-full object-cover mr-6"
                />
                <div className='flex flex-col gap-2'>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <img src={media} alt="social media" className='w-[200px]' />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-3 h-3 rounded-full ${selectedIndex === index ? 'bg-[#009688] w-8' : 'bg-gray-300'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OurExpertTeam;
