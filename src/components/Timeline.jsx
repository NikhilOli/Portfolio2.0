import React, { useState, useRef, useEffect } from 'react';
import { TimeLineData } from '../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
    const [activeItem, setActiveItem] = useState(0);
    const carouselRef = useRef();

    const scroll = (node, left) => {
        return node.scrollTo({ left, behavior: 'smooth' });
    }

    const handleClick = (e, i) => {
        e.preventDefault();

        if (carouselRef.current) {
            const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
            scroll(carouselRef.current, scrollLeft);
        }
    }

    const handleScroll = () => {
        if (carouselRef.current) {
            const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);
            setActiveItem(index);
        }
    }

    useEffect(() => {
        const handleResize = () => {
            scroll(carouselRef.current, 0);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <section id="about" className="py-8 md:py-10 flex flex-col items-center">
            <div className="w-full md:w-4/5 mx-auto overflow-hidden">
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-500 to-purple-600 my-4 rounded" />
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-100 text-center md:text-left">About Me</h2>
                <p className="text-sm md:text-[18px] text-[#ffffff80] mb-8 w-full md:w-[55%] leading-normal text-center md:text-left">
                I'm a passionate Full-Stack Developer with a focus on scalable, secure, and user-centric applications. I build modern web apps using technologies like Next.js, Prisma, PostgreSQL, and React. Always eager to learn and create something meaningful.
                </p>

                <div 
                    className="flex overflow-x-auto scrollbar-hide snap-x -mx-4 pr-4 snap-mandatory touch-pan-x"
                    ref={carouselRef}
                    onScroll={handleScroll}
                >
                    {TimeLineData.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[120px] md:min-w-[50px] w-[170px] sm:w-[210px] snap-start"
                        >
                            <div
                                className={`p-3 pl-5 md:p-4 rounded-md cursor-pointer transition-opacity duration-300 ${activeItem === index ? 'opacity-100' : 'opacity-50'}`}
                                onClick={(e) => handleClick(e, index)}
                            >
                                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent flex items-center">
                                    {item.year}
                                    <svg className="w-32 sm:w-52 h-1.5 ml-2 sm:ml-4 hidden md:block" viewBox="0 0 208 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                                            fill="url(#paint0_linear)"
                                            fillOpacity="0.7"
                                        />
                                        <defs>
                                            <linearGradient id="paint0_linear" x1="-4.30412e-10" y1="0.5" x2="208" y2="0.500295" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" />
                                                <stop offset="0.79478" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </h4>
                                <p className="text-xs sm:text-sm md:text-[15px] text-white/75">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6 md:hidden">
                    {TimeLineData.map((item, index) => (
                        <button
                            key={index}
                            className={`w-1 h-1 rounded-full mx-1 transition-all duration-300 ${activeItem === index ? 'bg-white scale-125' : 'bg-white/30'}`}
                            onClick={(e) => handleClick(e, index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
