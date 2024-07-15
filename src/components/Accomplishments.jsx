import React from 'react';
import GradientLine from './GradientLine';

const data = [
    { number: 20, text: 'Open Source Projects' },
    { number: 1000, text: 'Students' },
    { number: 1900, text: 'Github Followers' },
    { number: 5000, text: 'Github Stars' }
];

const Accomplishments = () => (
    <section className="flex flex-col items-center md:items-start px-4 sm:px-8 md:px-10 lg:px-14 py-8 max-w-7xl mx-auto">
        <GradientLine />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-4 text-center md:text-left">
            Personal Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 sm:mt-8 w-full">
            {data.map((card, index) => (
                <div key={index} className="bg-[#591c8748] rounded-lg p-4 sm:p-6 shadow-lg transform transition-transform hover:scale-105">
                    <h5 className="text-2xl sm:text-3xl font-semibold text-white mb-2">{`${card.number}+`}</h5>
                    <p className="text-base sm:text-lg text-[#ffffff80]">{card.text}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Accomplishments;