import React from 'react';
import { projects } from '../constants/constants';

const Projects = () => (
    <section className="pb-10" id="projects">
        <div className="w-full md:w-4/5 mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-100">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mr-32">
                {projects.map((p) => (
                    <div key={p.id} className="overflow-hidden text-center shadow-project hover:shadow-project-hover transition duration-50 w-[380px] flex flex-col justify-between">
                        <img src={p.image} alt={p.title} className="w-full h-fit object-cover object-center" />
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold mb-2 text-blue-400">{p.title}</h3>
                            <hr className="w-16 h-[2.5px] my-4 bg-yellow-500 mx-auto" />
                            <p className="text-gray-300 text-base text-justify mb-2 px-10">{p.description}</p>
                            <div className="mb-2">
                                <h4 className="text-base font-semibold mb-1 text-gray-300">Stack</h4>
                                <ul className="flex justify-center space-x-2">
                                    {p.tags.map((tag, index) => (
                                        <li key={index} className="text-gray-400 text-base px-2">{tag}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-center gap-20 mt-auto py-4">
                                <a href={p.visit} className="text-gray-400 bg-red-600 px-2 py-1 rounded-xl transition duration-500 ease-in-out hover:bg-red-700 text-base">Code</a>
                                <a href={p.source} className="text-gray-400 bg-red-600 px-2 py-1 rounded-xl transition duration-500 ease-in-out hover:bg-red-700 text-base">Source</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
