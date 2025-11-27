import React, { useState } from 'react';

import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

import useScrollReading from './useScrollReading';

import { motion } from "framer-motion";
import { Link } from "react-scroll";  //use for scorling when click on item in navbar
import cv from '../assets/Talha_Resume.pdf';

const Navbar = () => {
    const calculatedHeight = useScrollReading();   // for scroling animation

    //js to download cv pdf
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cv;
        link.download = 'Talha_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const [menu, setMenu] = useState(false);

    const items = [
        { id: 1, text: "About", to: "about" },
        { id: 2, text: "Services", to: "services" },
        { id: 3, text: "Work", to: "work" },
        { id: 4, text: "Contact", to: "contact" },
    ];

    const variants = {
        open: { clipPath: "circle(1200px at 43px 43px)" },
        transition: {
            type: "spring",
        },
        closed: {
            clipPath: "circle(25px at 43px 43px)",
            transition: {
                type: "spring",
                duration: 1,
            },
        },
    };

    return (
        // desktop section


        <div>
            {/* css for scoll animation  */}
            <span
                style={{ width: `${calculatedHeight}%` }}
                className='fixed top-[1px] left-0 bg-purple-400 h-1 z-[9999] transition-all duration-150'
            ></span>

            {/* css for scoll animation  */}

            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}

                className='mx-auto hidden md:flex justify-between items-center py-6 px-4'>
                <div className='text-xl lg:text-2xl font-bold flex items-center gap-1'>
                    <span className='text-purple-500'>MATR</span>
                </div>
                <div>
                    <ul className='hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white'>
                        {items.map(({ id, text, to }) => (
                            <li key={id}
                                className='hover:text-purple-400 duration-200 cursor-pointer'
                            >
                                <Link
                                    to={to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <a
                    onClick={handleDownload}
                    className='text-lg bg-purple-400 cursor-pointer hover:bg-purple-400 text-white py-2 px-4 rounded-full mt-6'
                >
                    Download CV
                </a>

            </motion.div>

            {/* mobile section */}

            <div className='flex md:hidden  justify-between'>
                <motion.div
                    animate={menu ? "open" : "closed"}
                >
                    <motion.div
                        variants={variants}
                        onClick={() => setMenu((prev) => !prev)}
                        className='bg-white w-2/3 h-screen text-black fixed z-10'>
                        <div className='px-7 py-6'>
                            {menu ? (<MdClose size={30} />) : <MdOutlineMenu size={30} />}
                        </div>
                        {
                            menu && (
                                <div className='flex flex-col justify-center items-center'>
                                    <ul className='space-y-6 text-black text-lg'>
                                        {items.map(({ id, text, to }) => (
                                            <li
                                                className='hover:text-purple-500 duration-200 cursor-pointer'
                                                key={id}>
                                                <Link
                                                    to={to}
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-70}
                                                >
                                                    {text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        onClick={handleDownload}
                                        className='text-lg cursor-pointer bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 rounded-full mt-6'
                                    >
                                        Download CV
                                    </a>
                                </div>
                            )
                        }
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100, y: -100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-xl  font-bold flex items-center gap-2 px-4 py-6'>
                    <span className='text-purple-500'>MATR</span>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar;