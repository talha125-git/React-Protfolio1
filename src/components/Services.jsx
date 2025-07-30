import React from 'react';
import { FaCode, FaLaptopCode, FaPalette, FaCogs, FaPython, FaBug, FaDatabase } from "react-icons/fa";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; //for scroll animation

const Services = () => {
    const servicesData = [
        {
            title: "App Design",
            description: (
                <>
                    <p>
                        Practicing mobile app development using Dart and Flutter by building functional apps like a Unit Converter.
                    </p>
                    <a
                        href="https://talha125-git.github.io/Unit_Converter-App/ "
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 px-4 py-1 bg-transparent border-2 border-purple-600 text-purple-500 hover:text-white rounded-lg hover:bg-purple-600 transition"
                    >
                        Visit
                    </a>
                </>
            ),
            icon: <FaPalette className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto' />
        }

        ,
        {
            title: "Web Development",
            description: "Building responsive and scalable websites with cutting-edge technologies and best practices.",
            icon: <FaLaptopCode className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto' />
        },
        {
            title: "UI/UX Design",
            description: "Designing seamless user experiences and intuitive interfaces for digital products and applications.",
            icon: <FaCode className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto' />
        },
        {
            title: "C++",
            description: "Developing high-performance software and applications using C++ programming language.",
            icon: <FaCogs className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto' />
        },
        {
            title: "Python",
            description: "Practicing Python with a focus on AI projects like face recognition, working with algorithms, and building smart applications.",
            icon: <FaPython className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto' />
        }
        ,
        {
            title: "Database",
            description: "Studied Advanced Database concepts including PL/SQL programming, joins, and other relational database techniques for efficient data management.",
            icon: <FaDatabase className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto' />
        },

    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div id='services' className='text-white py-8'>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className='mx-auto px-4 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold underline mb-6'>Services</h2>
                <p className='mb-10 text-gray-400'>Providing innovative solutions, from web development to UI/UX design, tailored to your needs.</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {servicesData.map((service, index) => (
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300'
                            key={index}>
                            {service.icon}
                            <h3 className='sm:text-xl lg:text-2xl text-center font-semibold mb-2'>{service.title}</h3>
                            <p className='text-sm sm:text-base lg:text-lg text-gray-400'>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Services;
