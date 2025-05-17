
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import course1 from "../../../assets/images/ProgramsCourses1.png";
import course2 from "../../../assets/images/ProgramsCourses2.png";
import course3 from "../../../assets/images/ProgramsCourses3.png";
import star from "../../../assets/images/star.png";

const EmblaCarousel = () => {

    const courses = [
        { img: course1, numbers: 20 },
        { img: course2, numbers: 102 },
        { img: course3, numbers: 102 },
        { img: course1, numbers: 103 },
        { img: course2, numbers: 104 },
    ]

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
        <div className="overflow-hidden max-w-5xl flex flex-col mx-auto items-center justify-center py-10">
            <h1 className="text-center font-bold text-3xl">Most Popular Course</h1>
            <p className="text-center text-[#686868] mt-2 mb-8">
                Expert guidance for managing funds in alignment with Islamic <br />
                principles, helping you make informed, halal investment <br />
                decisions.
            </p>

            {/* Embla slider container */}
            <div className="overflow-hidden w-full py-5" ref={emblaRef}>
                <div className="flex">
                    {courses.map((item, index) => (
                        <div
                            className="embla__slide flex-[0_0_100%] sm:flex-[0_0_33.3333%] px-2"
                            key={index}
                        >
                            <div className="bg-white shadow-md rounded-lg p-3">
                                <img src={item.img} alt="" className="flex items-center mx-auto w-full"/>
                                <p className="text-[#363A3D] text-xl mt-2">Various versions have evolved daf</p>
                                <div className="flex items-center gap-3 mt-3 border-b-2 pb-4">
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <p className="text-xl"> ({item.numbers}) </p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-2xl text-[#1B1D1F] font-bold">$ 500 </p>
                                    <div className="w-10 h-10 rounded-full bg-[#bce0dd] text-[#009688] hover:bg-[#009688] hover:text-white transition-colors duration-300 flex items-center justify-center">
                                        <i className="fa-solid fa-arrow-up transition-colors duration-300 cursor-pointer rotate-45"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-4">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? "bg-[#009688] w-7" : "bg-gray-300"
                            }`}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </div>

    );
};

export default EmblaCarousel;
