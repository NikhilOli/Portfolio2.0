import React from 'react';
import { Link } from "react-scroll";
import Button from './Button';

const Hero = () => (
    <section name="hero" className="flex flex-col items-center md:items-start p-4 md:p-0 my-8 md:my-12 max-w-7xl sm:mx-auto md:ml-[139px]">
        <div className="w-full flex flex-col text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                I'm <span className="text-cyan-500">Nikhil Oli</span>
                <br />
                <span className="text-gray-300 text-xl md:text-2xl">Web Developer</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-[#ffffff80] my-1 w-full md:w-3/4 lg:w-2/3 mx-auto md:mx-0 leading-relaxed">
                Greetings! I'm a seasoned Web Developer with expertise spanning frontend technologies including HTML, CSS, JavaScript, and ReactJS, alongside backend proficiency in Node.js and Express.js. Transforming concepts into elegant and responsive web applications. Let's collaborate to elevate your digital presence!
            </p>
            <div className="flex justify-center md:justify-start">
                <Link to="projects" smooth duration={500}>
                    <Button>
                        Explore Projects
                    </Button>
                </Link>
            </div>
        </div>
    </section>
);

export default Hero;