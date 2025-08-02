import React from 'react'
import talha1 from '../assets/talha1.png'
import { motion } from "framer-motion"
import { Link } from 'react-scroll'

import { gsap } from "gsap";


const Hero = () => {

    const handleCursorEnter = () => {
        window.dispatchEvent(new CustomEvent("cursor-hover", { detail: true }));
    };

    const handleCursorLeave = () => {
        window.dispatchEvent(new CustomEvent("cursor-hover", { detail: false }));
    };


    return (
        <div className='text-white lg:py-5 py-10 lg:mr-16 mr-0'>
            <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='mx-auto md:w-[270px]  lg:-mt-4 -mt-0 w-[190px] rounded-full'
                src={talha1} alt="Talha Abutalha"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='mx-auto text-center'>

                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-2xl md:text-5xl flex flex-col gap-4 font-bold mb-4 relative z-0"
                    onMouseEnter={handleCursorEnter}
                    onMouseLeave={handleCursorLeave}
                >
                    Malik AbuTalha Raheem
                </motion.h1>

                <motion.span
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className='text-purple-500 md:text-2xl text-xl font-bold'>
                    A web Dev and Designer
                </motion.span>

                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className='text-gray-400 text-lg mb-8'>
                    I craft modern, responsive websites with a focus on user experience and clean design.
                </motion.p>

                <div className='flex justify-center space-x-4'>
                    <motion.button
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className='px-6 py-3 text-white bg-purple-500 rounded-full'>
                        <Link
                            to='contact'
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Hire me
                        </Link>
                    </motion.button>

                    <motion.button
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className='px-6 py-3 text-white border border-white rounded-full'>
                        <Link
                            to='about'
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            My Story
                        </Link>

                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero
