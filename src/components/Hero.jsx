import React from 'react';
import Button from './Button';

const Hero = (props) => (
    <section className="flex flex-col items-center md:flex-row md:items-start md:space-x-8 p-4 md:p-0 my-8 md:my-12">
        <div className="w-full md:w-4/5 flex flex-col mx-auto text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                I'm <span className="text-cyan-500">Nikhil Oli</span>
                <br />
                <span className="text-gray-300 text-lg md:text-xl">Web Developer</span>
            </h1>
            <p className="text-sm sm:text-base md:text-[18px] mb-6 md:mb-8 text-[#ffffff80] my-1 w-full sm:w-3/4 md:w-[55%] mx-auto md:mx-0 leading-normal font-light">
                Greetings! I'm a seasoned Web Developer with expertise spanning frontend technologies including HTML, CSS, JavaScript, and ReactJS, alongside backend proficiency in Node.js and Express.js. Transforming concepts into elegant and responsive web applications. Let's collaborate to elevate your digital presence!
            </p>
            <div className="w-full sm:w-auto">
                <Button onClick={props.handleClick}>
                    Explore Projects
                </Button>
            </div>
        </div>
    </section>
);

export default Hero;