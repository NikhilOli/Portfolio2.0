import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <section className="flex flex-col items-center md:items-start py-8 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto md:mx-22">
            <div className="w-full border-t border-gray-600 mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 w-full">
                <div className="flex flex-col items-center sm:items-start">
                    <h4 className="text-gray-500 text-sm font-semibold uppercase mb-4">Blog</h4>
                    <a href="https://blogweave.vercel.app/" className="text-white/75 hover:text-white hover:underline transition-all hover:translate-x-1">Read our latest articles and insights</a>
                </div>

                <div className="flex flex-col items-center sm:items-start">
                    <h4 className="text-gray-500 text-sm font-semibold uppercase mb-4">Email</h4>
                    <a href="mailto:nikhiloli107@gmail.com" className="text-white/75 hover:text-white transition-all hover:translate-x-1">nikhiloli107@gmail.com</a>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-between w-full">
                <div className="mb-6 md:mb-0">
                    <p className="text-gray-500 text-center md:text-left">Innovating the future through technology, one line of code at a time</p>
                </div>
                <div className="flex space-x-4">
                    <a href="https://github.com/NikhilOli" className="text-white transition duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110 cursor-pointer">
                        <AiFillGithub size="1.5rem" className="sm:w-8 sm:h-8" />
                    </a>
                    <a href="https://linkedin.com/in/nikhil-oli" className="text-white transition duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110 cursor-pointer">
                        <AiFillLinkedin size="1.5rem" className="sm:w-8 sm:h-8" />
                    </a>
                    <a href="https://instagram.com/ankeet_oli" className="text-white transition duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110 cursor-pointer">
                        <AiFillInstagram size="1.5rem" className="sm:w-8 sm:h-8" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Footer;