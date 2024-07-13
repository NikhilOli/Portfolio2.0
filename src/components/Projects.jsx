import React from 'react';
import { projects } from '../constants/constants';

const Projects = () => (
    <section className="pt-20 pb-10" id="projects">
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map((p) => (
                    <div key={p.id} className="rounded-lg shadow-lg overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-64 object-cover object-center" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-blue-500">{p.title}</h3>
                            <hr className="w-16 h-1 bg-yellow-500 mb-4 mx-auto" />
                            <p className="text-gray-300 text-lg mb-4">{p.description}</p>
                            <div className="mb-4">
                                <h4 className="text-lg font-semibold mb-2">Stack</h4>
                                <ul className="flex justify-center">
                                    {p.tags.map((tag, index) => (
                                        <li key={index} className="text-gray-400 text-base mr-2">{tag}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-center">
                                <a href={p.visit} className="text-white bg-red-500 px-6 py-2 rounded-md mr-4 transition duration-500 ease-in-out hover:bg-red-600">Visit</a>
                                <a href={p.source} className="text-white bg-blue-500 px-6 py-2 rounded-md transition duration-500 ease-in-out hover:bg-blue-600">Source</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
