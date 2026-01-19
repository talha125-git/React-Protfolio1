import React from 'react';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/tax_img.png"
import project5 from "../assets/couple_img.png"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; //for scroll animation
// import Companies from './companies';

const Work = () => {

    const projects = [
        {
            id: 1,
            tile: "Crypto Website",
            description: "A modern cryptocurrency website providing real-time market updates, trading insights, and secure transaction services.",
            Image: project1,
            link: "https://talha125-git.github.io/tcss-nefa-web-complete/nefa2.html "
        },
        {
            id: 2,
            tile: "Admin Dashboard",
            description: "An intuitive and responsive admin dashboard for managing users, analyzing data, and controlling website functionalities.",
            Image: project2,
            link: "https://talha125-git.github.io/admin-dash-tcss-by-me/index.html "
        },
        {
            id: 3,
            tile: "Ignite Pakistan",
            description: "A platform aimed at fostering innovation and entrepreneurship in Pakistan by connecting startups with investors and resources.",
            Image: project3,
            link: "https://talha125-git.github.io/Ignite-pakistan1/index%20.html# "
        },
        {
            id: 4,
            tile: "Internship Project 1",
            description: "A UK accountancy firm providing tax and accounting services for individuals and businesses.",
            Image: project4,
            link: "https://talha125-git.github.io/intern_p1/"
        },
        {
            id: 5,
            tile: "Internship Project 2",
            description: "A Swiss platform connecting businesses with flexible, temporary workers.",
            Image: project5,
            link: "https://intern-p2.vercel.app/"
        },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const handleCursorEnter = () => {
        window.dispatchEvent(new CustomEvent("cursor-hover", { detail: true }));
    };

    const handleCursorLeave = () => {
        window.dispatchEvent(new CustomEvent("cursor-hover", { detail: false }));
    };
    return (
        <div id='work' className='py-6'>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    onMouseEnter={handleCursorEnter}
                    onMouseLeave={handleCursorLeave}
                    className='text-4xl text-white underline font-bold mb-12 text-center'>
                    My Work
                </motion.h2>

                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className='mb-12 text-gray-400 text-center'>
                    Explore some of my recent projects showcasing my expertise in web development and UI/UX design.
                </motion.p>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7'>
                    {
                        projects.map((project) => (
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: project.id * 0.2, duration: 0.5 }}
                                key={project.id}
                                className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'
                            >
                                <img
                                    className='w-full h-48 object-cover'
                                    src={project.Image}
                                    alt={project.tile}
                                />
                                <div className='p-6'>
                                    <h3
                                        onMouseEnter={handleCursorEnter}
                                        onMouseLeave={handleCursorLeave}
                                        className='text-xl text-white font-semibold mb-2'>{project.tile}</h3>
                                    <p className='text-slate-400 mb-4'>{project.description}</p>
                                    <button className='border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition'>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            Details
                                        </a>
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </motion.div>
            {/* <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
            >
                <Companies />
            </motion.div> */}
        </div>
    );
};

export default Work;
