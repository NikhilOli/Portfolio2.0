import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative">
            <div className="flex justify-between items-center mx-4 md:mx-8 py-4">
                <div className="flex items-center">
                    <a href="/" className="flex items-center text-white">
                        <DiCssdeck size="26px" />
                        <span className="ml-2 text-base md:text-lg">Portfolio</span>
                    </a>
                </div>
                <div className="hidden md:flex space-x-4">
                    <NavItem href="#projects">Projects</NavItem>
                    <NavItem href="#tech">Technologies</NavItem>
                    <NavItem href="#about">About</NavItem>
                </div>
                <div className="hidden md:flex space-x-3">
                    <SocialLink href="https://github.com">
                        <AiFillGithub size="26px" />
                    </SocialLink>
                    <SocialLink href="https://linkedin.com">
                        <AiFillLinkedin size="26px" />
                    </SocialLink>
                    <SocialLink href="https://instagram.com">
                        <AiFillInstagram size="26px" />
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
                    <NavItem href="#projects">Projects</NavItem>
                    <NavItem href="#tech">Technologies</NavItem>
                    <NavItem href="#about">About</NavItem>
                    <div className="flex justify-center space-x-3 mt-4">
                        <SocialLink href="https://github.com">
                            <AiFillGithub size="26px" />
                        </SocialLink>
                        <SocialLink href="https://linkedin.com">
                            <AiFillLinkedin size="26px" />
                        </SocialLink>
                        <SocialLink href="https://instagram.com">
                            <AiFillInstagram size="26px" />
                        </SocialLink>
                    </div>
                </div>
            )}
        </div>
    );
};

const NavItem = ({ href, children }) => (
    <a href={href} className="block px-4 py-2 text-[16px] text-[#ffffff80] hover:text-white transition duration-300 hover:text-opacity-100 hover:opacity-100 cursor-pointer">
        {children}
    </a>
);

const SocialLink = ({ href, children }) => (
    <a href={href} className="text-white transition duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110 cursor-pointer">
        {children}
    </a>
);

export default Header;