import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; //for scroll animation

const Experience = () => {

    const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
        });
        
    return (
        <div>

            <div className='flex flex-col sm:flex-row justify-around text-center mt-2 space-y-6 sm:space-y-0'>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className='text-center'>

                    <h3 className='text-3xl  md:text-8xl font-bold md:my-4 text-purple-500'>1+</h3>

                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className='text-sm sm:text-base text-gray-300'>years of experience
                    </motion.p>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.3 }}
                >

                    <h3 className='text-3xl  md:text-8xl font-bold md:my-4 text-purple-500'>5+</h3>
                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.3, duration: 0.5 }}

                        className='text-sm sm:text-base text-gray-300'>Clients
                    </motion.p>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.3 }}
                >

                    <h3 className='text-3xl  md:text-8xl font-bold md:my-4 text-purple-500'>20+</h3>
                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.4, duration: 0.5 }}

                        className='text-sm sm:text-base text-gray-300'>Projcts I have made
                    </motion.p>
                </motion.div>
            </div>

        </div>
    )
}

export default Experience
