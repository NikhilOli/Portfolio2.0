import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <section className="flex flex-col items-start py-8 px-12 max-w-7xl mx-auto">
            <div className="w-full border-t border-gray-600 mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col">
                    <h4 className="text-gray-500 text-sm font-semibold uppercase mb-4">Call</h4>
                    <a href="tel:314-343-3432" className="text-white/75 hover:text-white transition-all hover:translate-x-1">314-343-3432</a>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-gray-500 text-sm font-semibold uppercase mb-4">Email</h4>
                    <a href="mailto:contact@jsmastery.com" className="text-white/75 hover:text-white transition-all hover:translate-x-1">contact@jsmastery.com</a>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <div className="mb-8 md:mb-0">
                    <p className="text-gray-500 text-center md:text-left">Innovating one project at a time</p>
                </div>
                <div className="flex space-x-4">
                    <a href="https://github.com" className="text-white transition duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110 cursor-pointer">
                        <AiFillGithub size="2rem" />
                    </a>
                    <a href="https://linkedin.com" className="text-white transition duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110 cursor-pointer">
                        <AiFillLinkedin size="2rem" />
                    </a>
                    <a href="https://instagram.com" className="text-white transition duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110 cursor-pointer">
                        <AiFillInstagram size="2rem" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Footer;
