import { useState } from 'react';
import { Link } from 'react-scroll';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { HiMenu, HiX } from 'react-icons/hi';
import { RiTwitterXLine } from "react-icons/ri";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative">
            <div className="flex justify-between items-center mx-4 md:mx-8 py-4">
                <div className="flex items-center">
                    <Link to="hero" smooth duration={500} className="flex items-center text-white cursor-pointer">
                        <DiCssdeck size="26px" />
                        <span className="ml-2 text-base md:text-lg">Nikhil.Dev</span>
                    </Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="projects" smooth duration={500} className="block px-4 py-2 text-[16px] text-[#ffffff80] hover:text-white transition duration-300 hover:text-opacity-100 hover:opacity-100 cursor-pointer">
                        Projects
                    </Link>
                    <Link to="tech" smooth duration={500} className="block px-4 py-2 text-[16px] text-[#ffffff80] hover:text-white transition duration-300 hover:text-opacity-100 hover:opacity-100 cursor-pointer">
                        Technologies
                    </Link>
                    <Link to="about" smooth duration={500} className="block px-4 py-2 text-[16px] text-[#ffffff80] hover:text-white transition duration-300 hover:text-opacity-100 hover:opacity-100 cursor-pointer">
                        About
                    </Link>
                </div>
                <div className="hidden md:flex space-x-3">
                    <SocialLink href="https://github.com/NikhilOli">
                        <AiFillGithub size="26px" />
                    </SocialLink>
                    <SocialLink href="https://linkedin.com/in/nikhil-oli">
                        <AiFillLinkedin size="26px" />
                    </SocialLink>
                    <SocialLink href="https://twitter.com/your_handle">
                        <RiTwitterXLine size="26px" />
                    </SocialLink>

                </div>
                <button 
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <HiX size="26px" /> : <HiMenu size="26px" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-gray-900 py-4 md:hidden">
                    <Link to="projects" smooth duration={500} className="block px-4 py-2 text-[16px] text-[#ffffff80] hover:text-white transition duration-300 hover:text-opacity-100 hover:opacity-100 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                        Projects
                    </Link>
                    <Link to="tech" smooth duration={500} className="block px-4 py-2 text-[16px] text-[#ffffff80] hover:text-white transition duration-300 hover:text-opacity-100 hover:opacity-100 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                        Technologies
                    </Link>
                    <Link to="about" smooth duration={500} className="block px-4 py-2 text-[16px] text-[#ffffff80] hover:text-white transition duration-300 hover:text-opacity-100 hover:opacity-100 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                        About
                    </Link>
                    <div className="flex justify-center space-x-3 mt-4">
                        <SocialLink href="https://github.com">
                            <AiFillGithub size="26px" />
                        </SocialLink>
                        <SocialLink href="https://linkedin.com">
                            <AiFillLinkedin size="26px" />
                        </SocialLink>
                        <SocialLink href="https://instagram.com/ankeet_oli">
                            <RiTwitterXLine size="26px" />
                        </SocialLink>
                    </div>
                </div>
            )}
        </div>
    );
};

const SocialLink = ({ href, children }) => (
    <a href={href} target="_blank" className="text-white transition duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110 cursor-pointer"  rel="noopener noreferrer">
        {children}
    </a>
);

export default Header;