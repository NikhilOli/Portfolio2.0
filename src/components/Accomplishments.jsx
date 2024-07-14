import React from 'react';

const data = [
    { number: 20, text: 'Open Source Projects' },
    { number: 1000, text: 'Students' },
    { number: 1900, text: 'Github Followers' },
    { number: 5000, text: 'Github Stars' }
];

const Accomplishments = () => (
    <section className="flex flex-col items-start px-12 py-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-4">
            Personal Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 ">
            {data.map((card, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
                    <h5 className="text-3xl font-semibold text-white mb-2">{`${card.number}+`}</h5>
                    <p className="text-lg text-gray-400">{card.text}</p>
                </div>
            ))}
        </div>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-12"></div>
    </section>
);

export default Accomplishments;
