// components/EmblaCarousel.jsx
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import student from "../../assets/images/student2.png";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden max-w-5xl flex flex-col mx-auto items-center justify-center" ref={emblaRef}>
      <h1 className="text-center font-bold text-3xl">What students say</h1>
      <p className="text-center text-[#686868] mt-2 mb-8">Our team consists of seasoned professionals with extensive experience <br />
        in Islamic finance and management. Each member brings a unique set of <br /> skills and expertise.</p>
      <div className="flex ">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            className="embla__slide flex-[0_0_100%] sm:flex-[0_0_33.3333%] px-2"
            key={index}
          >
            <div className="bg-[#F6F8F9] shadow-md rounded-lg p-6">
              <p className="text-[#686868]"> Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
              <div className="flex items-center mt-4 gap-4">
                <img src={student} alt="" />
                <div>
                  <h2 className="font-bold text-xl">Finlay Kirk</h2>
                  <p className="text-[#686868]">Web designer</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === selectedIndex ? "bg-[#009688] w-7" : "bg-gray-300"
              }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
