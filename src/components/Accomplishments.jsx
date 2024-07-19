import React from 'react';
import GradientLine from './GradientLine';
import { data } from '../constants/constants';


const Accomplishments = () => (
    <section className="flex flex-col items-start px-4 sm:px-8 md:px-10 lg:px-14 py-8 max-w-7xl mx-auto sm:mx-20 md:mx-[90px]">
        <GradientLine />
        <h2 className="text-[27px] sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-4 text-center md:text-left">
            Personal Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-x-0-0 mt-6 sm:mt-8 w-full">
            {data.map((card, index) => (
                <div key={index} className="bg-[#591c8748] rounded-lg p-4 sm:p-6 shadow-lg transform transition-transform hover:scale-105 md:w-[88%]">
                    <h5 className="text-2xl sm:text-[26px] font-semibold text-white mb-2">{`${card.number}+`}</h5>
                    <p className="text-base sm:text-base text-[#ffffff80]">{card.text}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Accomplishments;