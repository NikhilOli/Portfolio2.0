import React from 'react';
import { projects } from '../constants/constants';

const Projects = () => (
    <section className=" pb-10" id="projects">
        <div className="w-full md:w-4/5 mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-100">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mr-32">
                {projects.map((p) => (
                    <div key={p.id} className="rounded-lg overflow-hidden text-center shadow-project hover:shadow-project-hover transition duration-500">
                        <img src={p.image} alt={p.title} className="w-full h-32 object-cover object-center" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 text-blue-400">{p.title}</h3>
                            <hr className="w-16 h-1 bg-yellow-500 mb-2 mx-auto" />
                            <p className="text-gray-300 text-xs mb-2">{p.description}</p>
                            <div className="mb-2">
                                <h4 className="text-base font-semibold mb-1 text-gray-400">Stack</h4>
                                <ul className="flex justify-center space-x-2">
                                    {p.tags.map((tag, index) => (
                                        <li key={index} className="text-gray-400 text-xs">{tag}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-center space-x-2">
                                <a href={p.visit} className="text-white bg-red-600 px-2 py-1 rounded-md transition duration-500 ease-in-out hover:bg-red-700 text-xs">Code</a>
                                <a href={p.source} className="text-white bg-blue-600 px-2 py-1 rounded-md transition duration-500 ease-in-out hover:bg-blue-700 text-xs">Source</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
