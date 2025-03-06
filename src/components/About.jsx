import React from 'react'
import talha2 from '../assets/talha2.png';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; //for scroll animation

const About = () => {

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
                            className='w-[45%] sm:[40%] md:w-[45%] rounded-full'
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

                {/* <div className='flex flex-col sm:flex-row justify-around text-center mt-2 space-y-6 sm:space-y-0'>
                        <motion.div
                        ref={ref}
                        initial={{opacity:0}}
                        animate={inView ? {opacity:1} : {}}
                        transition={{ delay:1.2, duration:0.3 }}
                        className='text-center'>

                            <h3 className='text-3xl  md:text-8xl font-bold md:my-4 text-purple-500'>2+</h3>

                            <motion.p 
                            ref={ref}
                            initial={{opacity:0, y:100}}
                            animate={inView ? {opacity:1, y:0} : {}}
                            transition={{ delay:1.7, duration:0.5 }}
                            className='text-sm sm:text-base text-gray-300'>years of experience
                            </motion.p>
                        </motion.div>
                    
                        <motion.div
                            ref={ref}
                            initial={{opacity:0}}
                            animate={inView ? {opacity:1} : {}}
                            transition={{ delay:1.4, duration:0.3 }}
                            >

                            <h3 className='text-3xl  md:text-8xl font-bold md:my-4 text-purple-500'>5+</h3>
                            <motion.p 
                            ref={ref}
                            initial={{opacity:0, y:100}}
                            animate={inView ? {opacity:1, y:0} : {}}
                            transition={{ delay:1.8, duration:0.5 }}

                            className='text-sm sm:text-base text-gray-300'>Clients
                            </motion.p>
                        </motion.div>
                    
                        <motion.div
                            ref={ref}
                            initial={{opacity:0}}
                            animate={inView ? {opacity:1} : {}}
                            transition={{ delay:1.6, duration:0.3 }}
                            >

                            <h3 className='text-3xl  md:text-8xl font-bold md:my-4 text-purple-500'>20+</h3>
                            <motion.p 
                            ref={ref}
                            initial={{opacity:0, y:100}}
                            animate={inView ? {opacity:1, y:0} : {}}
                            transition={{ delay:1.9, duration:0.5 }}

                            className='text-sm sm:text-base text-gray-300'>Projcts I have made
                            </motion.p>
                        </motion.div>
                    </div> */}

            </div>

        </div>
    )
}

export default About
