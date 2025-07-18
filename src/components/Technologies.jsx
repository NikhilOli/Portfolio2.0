import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import GradientLine from './GradientLine';

const Technologies = () => (
    <section id="tech" className="py-8 md:py-10 flex flex-col items-center px-4 md:px-0">
        <div className="w-full md:w-4/5 mx-auto">
            <GradientLine />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-100 text-center md:text-left">Technologies</h2>
            <p className="text-sm md:text-[18px] text-[#ffffff80] mb-8 w-full md:w-[55%] leading-normal text-center md:text-left">
                These are the technologies I'm familiar with. From Front-end to Back-end and Design.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                <li className="flex flex-col items-center md:items-start">
                    <DiReact size="2rem" className="text-gray-100 mb-2" />
                    <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Front-End</h4>
                    <p className="text-[#ffffff80] text-center md:text-left">
                    React, TypeScript, Tailwind CSS, Shadcn UI, Framer Motion, Next.js
                    </p>
                </li>
                <li className="flex flex-col items-center md:items-start">
                    <DiFirebase size="2rem" className="text-gray-100 mb-2" />
                    <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Back-End</h4>
                    <p className="text-[#ffffff80] text-center md:text-left">
                    Node.js, Express, PostgreSQL, Prisma ORM, JWT Auth
                    </p>
                </li>
                <li className="flex flex-col items-center md:items-start">
                    <DiZend size="2rem" className="text-gray-100 mb-2" />
                    <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Tools & Auth</h4>
                    <p className="text-[#ffffff80] text-center md:text-left">
                    Clerk Auth, Git/Hub, Vercel, REST APIs
                    </p>
                </li>
            </ul>
        </div>
    </section>
);

export default Technologies;