import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaPlay, FaChevronRight, FaChevronLeft } from "react-icons/fa";

// images import

import slide1 from "../../../assets/images/media1.png"
import slide2 from "../../../assets/images/media2.png"
import slide3 from "../../../assets/images/media3.png"

const slides = [
    { text: "Why Islamic finance?", image: slide1, video: "https://www.youtube.com/embed/r7GKIFHTBTA" },
    { text: "What makes Islamic finance unique?", image: slide2, video: "https://www.youtube.com/embed/r7GKIFHTBTA" },
    { text: "How is risk managed in Islamic finance?", image: slide3, video: "https://www.youtube.com/embed/r7GKIFHTBTA" },
    { text: "How is risk managed in Islamic finance?", image: slide3, video: "https://www.youtube.com/embed/r7GKIFHTBTA" },
    { text: "Why Islamic finance?", image: slide1, video: "https://www.youtube.com/embed/r7GKIFHTBTA" },
    { text: "What makes Islamic finance unique?", image: slide2, video: "https://www.youtube.com/embed/r7GKIFHTBTA" },
]
export default function IslamicCarouselGrid() {
    const [currentSlide, setCurrentSlide] = useState(0); // index: 0 or 1
    const [isOpen, setIsOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState("");

    const slidesPerPage = 3;
    const totalPages = Math.ceil(slides.length / slidesPerPage);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalPages);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);

    const openModal = (videoUrl) => {
        setActiveVideo(videoUrl);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setActiveVideo("");
    };

    const visibleSlides = slides.slice(
        currentSlide * slidesPerPage,
        currentSlide * slidesPerPage + slidesPerPage
    );

    return (
        <div className=" w-full max-w-6xl mx-auto px-4 py-12">
            {/* Navigation */}
            <h1 className="text-center font-bold text-3xl">Our Media</h1>
            <p className="text-center text-[#686868] mt-2">Our team consists of seasoned professionals with extensive experience <br /> in Islamic finance and management.
                Each member brings a unique set of <br /> skills and expertise.</p>
            <div className="flex justify-between items-center mt-8 mb-2">
                <h2 className="text-2xl font-semibold">Our media showcase</h2>
                <div className="flex gap-2">
                    <button onClick={prevSlide} className="bg-white p-2 rounded-full shadow hover:scale-110 hover:bg-[#009688] transition">
                        <FaChevronLeft />
                    </button>
                    <button onClick={nextSlide} className="bg-white p-2 rounded-full shadow hover:scale-110 hover:bg-[#009688] transition">
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            {/* Grid of images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {visibleSlides.map((slide, index) => (
                    <div key={index} className="relative group h-[250px] md:h-[350px] rounded-xl overflow-hidden">
                        <img
                            src={slide.image}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 flex items-center justify-between p-8 w-full">
                            <h3 className="text-2xl w-[150px] font-semibold mb-3 text-white">{slide.text}</h3>
                            <button
                                onClick={() => openModal(slide.video)}
                                className="bg-white text-black hover:bg-[#2198FF] hover:text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
                            >
                                <FaPlay />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for video */}
            <Dialog open={isOpen} onClose={closeModal} className="fixed z-50 inset-0">
                <div className="flex items-center justify-center min-h-screen bg-white/70 p-4">
                    <Dialog.Panel className="w-full max-w-3xl aspect-video relative rounded-md">
                        <iframe
                            src={activeVideo}
                            title="Islamic Finance Video"
                            className="w-full h-full rounded-md"
                            allowFullScreen

                        ></iframe>
                        <button
                            onClick={closeModal}
                            className="absolute -top-3 -right-3 bg-white text-black rounded-full p-2"
                        >
                            ✕
                        </button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}
