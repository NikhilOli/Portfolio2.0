import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import GradientLine from './GradientLine';

const Technologies = () => (
    <section id="tech" className="py-10 flex flex-col items-center">
        <div className="w-full md:w-4/5 mx-auto">
            <GradientLine />
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-100">Technologies</h2>
            <p className="text-sm md:text-[18px] text-[#ffffff80] mb-8 w-[55%] leading-normal">
                I've worked with a range of technologies in the web development world.
                From Back-end To Design
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <li className="flex flex-col items-start">
                    <DiReact size="1.5rem" className=" text-gray-100" />
                    <h4 className="text-xl font-semibold text-white">Front-End</h4>
                    <p className="text-[#ffffff80]">
                        Experience with <br />
                        React.js
                    </p>
                </li>
                <li className="flex flex-col items-start">
                    <DiFirebase size="1.5rem" className=" text-gray-100" />
                    <h4 className="text-xl font-semibold text-white">Back-End</h4>
                    <p className="text-[#ffffff80]">
                        Experience with <br />
                        Node and Databases
                    </p>
                </li>
                <li className="flex flex-col items-start">
                    <DiZend size="1.5rem" className=" text-gray-100" />
                    <h4 className="text-xl font-semibold text-white">UI/UX</h4>
                    <p className="text-[#ffffff80]">
                        Experience with <br />
                        tools like Figma
                    </p>
                </li>
            </ul>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-purple-600 my-4 rounded" />
        </div>
    </section>
);

export default Technologies;
