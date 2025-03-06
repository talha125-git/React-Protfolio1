import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; //for scroll animation
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";


const Footer = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div>

            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}

                className='mt-40 flex justify-between flex-col sm:flex-row items-center p-5  text-white border-t-2 border-purple-500'>
                <p>ⓒ 2025, All Right Reserved</p>
                <p>AbuTalha</p>
                <div className='flex justify-center space-x-4 text-white mt-4'>
                    <a href="https://www.facebook.com/profile.php?id=100023337737054&mibextid=ZbWKwL" className='hover:text-purple-500'> <FaFacebook className='w-6 h-6' /> </a>
                    <a href="https://x.com/abutalha125?t=DdXNZ9MTMxkBelWA62Mw6w&s=09" className='hover:text-purple-500'> <FaXTwitter className='w-6 h-6' /> </a>
                    <a href="" className='hover:text-purple-500'> <FaLinkedin className='w-6 h-6' /> </a>
                    <a href=" https://www.instagram.com/abutalha.2288/" className='hover:text-purple-500'> <FaInstagram className='w-6 h-6' /> </a>
                </div>
            </motion.div>

        </div>
    )
}

export default Footer
