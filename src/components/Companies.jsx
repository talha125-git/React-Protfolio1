import React from 'react'
import { animate, easeIn, motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; //for scroll animation

const Companies = () => {

    const companies = [
        "Systems Limited",
        "Ovex Technologies",
        "Averox",
        "NETSOL Technology",
        "Techuire",
        "DPL",
        "The Square Peg",
        "Devsort Services",
        "Xtreme Software Services Pvt Ltd",
        "IT Artificer",
        "Orbitors IT Solutions",
        "MindGigs"
    ];
    const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
        });

    const companiesList = [...companies, ...companies]; // to duplication and move in loop

    const ScrollVarient1 = {
        animate: {
            x: [0, -4000], // Adjusted distance
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 50, // Slightly faster than before
                    ease: "linear"
                },
            },
        },
    };
    
    const ScrollVarient2 = {
        animate: {
            x: [-4000, 0], 
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 50,
                    ease: "linear"
                },
            },
        },
    };
    
    
    

    return (
        <div className='text-white py-8'>
            <div className='mx-auto text-center'>
                <motion.h2 
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}

                 className='text-3xl md:text-4xl font-bold mb-6'>Campanies I've worked with
                 </motion.h2>
                <div className='overflow-hidden relative w-full '>
                    <motion.div 
                    variants={ScrollVarient1}
                    animate="animate"
                    className='whitespace-nowrap flex space-x-8'>
                        {
                            companiesList.map((campany, index) => (
                                <div
                                    className='text-lg bg-gray-800 px-6 py-3 rounded-full  inline-block'
                                    key={index}
                                >
                                    {campany}
                                </div>
                            ))
                        }
                    </motion.div>
                    <div>
                        <div className='overflow-hidden relative w-full mt-5'>
                            <motion.div 
                            variants={ScrollVarient2}
                             animate="animate"
                            className='whitespace-nowrap flex space-x-8'>
                                {
                                    companiesList.map((campany, index) => (
                                        <div
                                         className='text-lg bg-gray-800 px-6 py-3 rounded-full  inline-block'
                                            key={index}
                                        >
                                            {campany}
                                        </div>
                                    ))
                                }
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies
