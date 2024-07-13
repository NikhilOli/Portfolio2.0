import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

const Header = () => (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 space-y-4 mx-48 md:space-y-0">
        <div className="flex items-center">
            <a href="/" className="flex items-center text-white">
                <DiCssdeck size="26px" />
                <span className=" text-[16px]">Portfolio</span>
            </a>
        </div>
        <div className="flex space-x-4 md:space-x-8">
            <li className="list-none">
                <a href="#projects" className="text-[16px] text-[#ffffff80] hover:text-white transition duration-300 hover:text-opacity-100 hover:opacity-100 cursor-pointer">Projects</a>
            </li>
            <li className="list-none">
                <a href="#tech" className="text-[16px] text-[#ffffff80] hover:text-white transition duration-300 hover:text-opacity-100 hover:opacity-100 cursor-pointer">Technologies</a>
            </li>
            <li className="list-none">
                <a href="#about" className="text-[16px] text-[#ffffff80] hover:text-white transition duration-300 hover:text-opacity-100 hover:opacity-100 cursor-pointer">About</a>
            </li>
        </div>
        <div className="flex space-x-3">
            <a href="https://google.com" className="text-white transition duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110 cursor-pointer">
                <AiFillGithub size="26px" />
            </a>
            <a href="https://google.com" className="text-white transition duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110 cursor-pointer">
                <AiFillLinkedin size="26px" />
            </a>
            <a href="https://google.com" className="text-white transition duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110 cursor-pointer">
                <AiFillInstagram size="26px" />
            </a>
        </div>
    </div>
);

export default Header;
