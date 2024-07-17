import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Button = ({ children, onClick }) => (
    <button
        onClick={onClick}
        className="group bg-gradient-to-r from-purple-500 to-sky-500 text-white py-2 px-4 rounded-full w-full sm:w-auto min-w-[120px] max-w-[200px] hover:from-purple-600 hover:to-sky-600 transition duration-300 flex items-center justify-center"
    >
        {children}
        <span className='ml-2 group-hover:rotate-90 duration-300'>
            <FaArrowRight size={18} />
        </span>
    </button>
);

export default Button;