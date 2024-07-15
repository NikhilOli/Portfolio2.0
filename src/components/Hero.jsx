import React from 'react';
import Button from './Button';

const Hero = (props) => (
    <section className="flex flex-col items-center md:flex-row md:items-start md:space-x-8 p-0 my-12">
        <div className="w-full md:w-4/5 flex flex-col mx-auto text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Welcome To <br />
                My Personal Portfolio
            </h1>
            <p className="text-sm md:text-[18px] mb-8 text-[#ffffff80] my-1 w-[55%] leading-normal font font-light">
                The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
            </p>
            <Button onClick={props.handleClick}>
                Learn More
            </Button>
        </div>
    </section>
);

export default Hero;
