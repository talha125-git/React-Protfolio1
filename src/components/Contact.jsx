import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // for scroll animation
import emailjs from '@emailjs/browser'; // for sending email

import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";

const Contact = () => {
    const form = useRef(); // ✅ Correctly using useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "talha125", // Service ID
            "template_92drwvc", // Template ID
            form.current,
            "zo8IBo0Xj0WXsHyno" // Public Key
        ).then(
            (result) => {
                console.log("Email sent successfully:", result.text);
                alert("Message sent successfully!");
                form.current.reset(); // ✅ Clear the form after submission
            },
            (error) => {
                console.log("Email sending failed:", error.text);
                alert("Failed to send message, try again.");
            }
        );
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div id='contact'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-4xl text-white font-bold'
                >
                    Let's Discuss Your <span className='text-purple-500'>Project</span>
                </motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-slate-400 mt-4'
                >
                    Have an idea? Let's work together to bring it to life.
                </motion.p>
            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-6'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className='flex items-center space-x-4'
                    >
                        <div className='bg-purple-500 p-4 rounded-full'>
                            <FaPhone className='text-white w-6 h-6' />
                        </div>
                        <div>
                            <p className='text-lg font-medium text-purple-400'>Call me</p>
                            <p className='font-medium text-white'>+92 347 67 22 423</p>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className='flex items-center space-x-4'
                    >
                        <div className='bg-purple-500 p-4 rounded-full'>
                            <FaEnvelope className='text-white w-6 h-6' />
                        </div>
                        <div>
                            <p className='text-lg font-medium text-purple-400'>E-mail</p>
                            <p className='font-medium text-white'>abutalhaa844@gmail.com</p>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='flex items-center space-x-4'
                    >
                        <div className='bg-purple-500 p-4 rounded-full'>
                            <FaMapMarkerAlt className='text-white w-6 h-6' />
                        </div>
                        <div>
                            <p className='text-lg font-medium text-purple-400'>Address</p>
                            <p className='font-medium text-white'>Peshawar</p>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Form */}
                <motion.form
                    ref={form} // ✅ Ensure form ref is correctly applied here
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="space-y-4 text-white"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" name="name" placeholder="Full name" required className="border-purple-400 bg-gray-900 p-4 border rounded-md w-full" />
                        <input type="email" name="email" placeholder="Your email" required className="border-purple-400 bg-gray-900 p-4 border rounded-md w-full" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" name="phone" placeholder="Phone number" required className="border-purple-400 bg-gray-900 p-4 border rounded-md w-full" />
                        <input type="text" name="budget" placeholder="Budget" required className="border-purple-400 bg-gray-900 p-4 border rounded-md w-full" />
                    </div>

                    <textarea name="message" placeholder="Message" required className="border-purple-400 bg-gray-900 p-4 border rounded-md w-full"></textarea>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition duration-200"
                    >
                        Submit Message
                    </motion.button>
                </motion.form>
            </div>
        </div>
    );
}

export default Contact;
