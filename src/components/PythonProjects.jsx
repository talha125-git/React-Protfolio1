import React from 'react';
import { FaPython, FaBrain, FaUniversity } from "react-icons/fa";

const PythonProjects = () => {
    const projects = [
        {
            title: "Face Recognition App",
            description: "Detects faces in live camera feed using OpenCV and matches with pre-stored images.",
            link: "https://example.com/face-recognition",
            icon: <FaPython className="text-purple-500 text-4xl mb-2 mx-auto" />
        },
        {
            title: "Emotion Detection from Text",
            description: "Analyzes textual input to detect emotions using NLP and Python AI libraries.",
            link: "https://kc9qnupimvmslu3ukrnokw.streamlit.app/",
            icon: <FaBrain className="text-purple-500 text-4xl mb-2 mx-auto" />
        },
        {
            title: "Hostel Management System",
            description: "Manages hostel operations including student records, room allocation, and fee management using Python.",
            link: "https://hostelmanagementsystem-z2hddpfpcjm4piwevy33mw.streamlit.app/",
            icon: <FaUniversity className="text-purple-500 text-4xl mb-2 mx-auto" />
        },
    ];

    return (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-[#1c1a2b] p-6 rounded-lg flex flex-col justify-between h-72 hover:shadow-lg hover:shadow-purple-500 transition"
                >
                    <div className="text-center flex flex-col justify-center gap-5">
                        {project.icon}
                        <h4 className="font-semibold text-xl text-white mb-2">{project.title}</h4>
                        <p className="text-gray-400">{project.description}</p>
                    </div>
                    
                    {/* Only show the Visit button if it's NOT the Face Recognition App */}
                    {project.title !== "Face Recognition App" && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 w-24 mx-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-center transition"
                        >
                            Visit
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PythonProjects;
