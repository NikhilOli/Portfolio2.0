import React from 'react';
import { projects } from '../constants/constants';

const Projects = () => (
    <section className="pb-10 px-4 md:px-0" id="projects">
        <div className="w-full md:w-4/5 mx-auto text-center md:text-left">
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-purple-600 my-4 rounded mx-auto md:mx-0" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl mt-6 md:mt-8 font-bold mb-8 md:mb-12 text-gray-100">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:mr-24 md:px-10">
                {projects.map((p) => (
                    <div key={p.id} className="overflow-hidden text-center shadow-project hover:shadow-project-hover transition duration-50 w-full max-w-[380px] mx-auto flex flex-col justify-between">
                        <img src={p.image} alt={p.title} className="w-full h-auto object-cover object-center" />
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-400">{p.title}</h3>
                            <hr className="w-16 h-[2.5px] my-3 md:my-4 bg-yellow-500 mx-auto" />
                            <p className="text-gray-300 text-sm md:text-base text-justify mb-2 px-2 md:px-10">{p.description}</p>
                            <div className="mb-2">
                                <h4 className="text-sm md:text-base font-semibold mb-1 text-gray-300">Stack</h4>
                                <ul className="flex flex-wrap justify-center gap-2">
                                    {p.tags.map((tag, index) => (
                                        <li key={index} className="text-gray-400 text-xs md:text-sm px-2">{tag}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-center gap-8 md:gap-20 mt-auto py-4">
                                <a href={p.visit} className="text-gray-400 bg-red-600 px-3 py-1 rounded-xl transition duration-500 ease-in-out hover:bg-red-700 text-sm md:text-base">Code</a>
                                <a href={p.source} className="text-gray-400 bg-red-600 px-3 py-1 rounded-xl transition duration-500 ease-in-out hover:bg-red-700 text-sm md:text-base">Source</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;