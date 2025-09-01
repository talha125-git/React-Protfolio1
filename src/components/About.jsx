import React from 'react'
import talha2 from '../assets/talha2.png';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; //for scroll animation

const About = () => {

     const handleCursorEnter = () => {
        window.dispatchEvent(new CustomEvent("cursor-hover", { detail: true }));
    };

    const handleCursorLeave = () => {
        window.dispatchEvent(new CustomEvent("cursor-hover", { detail: false }));
    };
    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    return (
        <div id='about' className='text-white py-16'>
            <div className='mx-auto px-4 text-center'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        delay: 0.3,
                        duration: 0.5
                    }}
                    onMouseEnter={handleCursorEnter}
                    onMouseLeave={handleCursorLeave}
                    className='text-3xl md:text-4xl font-bold mb-8 underline'>About me
                </motion.h2>

                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}

                    className='mb-12 text-gray-400 text-center'>
                    I build responsive, user-friendly, and visually appealing web applications.
                </motion.p>

                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}

                        className='mb-8 md:mb-0 md:mr-8 flex justify-center'>
                        <img
                            className='w-[45%] sm:[40%] md:w-[40%] rounded-[20px]'
                            src={talha2}
                        />
                    </motion.div>
                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}

                        className='md:w-1/2 text-gray-400 px-4 md:px-0 sm:text-left md:text-xl text-base'> 
                        With experience in JavaScript, React, Vue, and Tailwind CSS, I am dedicated 
                        to delivering high-quality solutions tailored to clients' needs. 
                        I love problem-solving, optimizing performance, and bringing creative ideas to life. 
                        Let's build something amazing together!
                    </motion.p>
                </div>

                

            </div>

        </div>
    )
}

export default About
