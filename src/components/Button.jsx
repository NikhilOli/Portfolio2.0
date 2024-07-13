import React from 'react';

const Button = ({ children, onClick }) => (
    <button
        onClick={onClick}
        className="bg-gradient-to-r from-purple-500 to-sky-500 text-white py-2 px-4 rounded-full w-[20%] hover:from-purple-600 hover:to-sky-600 transition duration-300"
    >
        {children}
    </button>
);

export default Button;
