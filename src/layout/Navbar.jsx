import React, { useState, useEffect } from "react";
import { BsBagHeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    // Handle the scroll event to detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            // Set scrolled to true if the page is scrolled down 100px or more
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-20 p-4 transition-all duration-300 ease-in-out ${scrolled ? "bg-cyan-700" : "bg-transparent"
                }`}
        >
            <div className="flex justify-between items-center px-8">
                <div
                    className={`flex items-start gap-2 font-bold drop-shadow-lg cursor-pointer ${scrolled ? "text-white" : "text-cyan-300"}`}>
                    <BsBagHeartFill className="text-xl" /> Talent Hatch
                </div>
                <div className="flex items-center gap-6">
                    <div className="space-x-6">
                        <a href="#home" className="text-white drop-shadow-lg hover:text-gray-200">Home</a>
                        <a href="#career" className="text-white drop-shadow-lg hover:text-gray-200">Career</a>
                        <a href="#services" className="text-white drop-shadow-lg hover:text-gray-200">About Us</a>
                        <a href="#contact" className="text-white drop-shadow-lg hover:text-gray-200">Why Join Us</a>
                        <a href="#contact" className="text-white drop-shadow-lg hover:text-gray-200">FAQs</a>
                    </div>
                    <Link
                        href="#"
                        className={`text-white border border-1 rounded-full shadow px-5 py-1.5 ${scrolled ? 'border-white hover:border-cyan-500 hover:bg-cyan-500' : ' border-cyan-500 hover:bg-cyan-500  hover:border-cyan-500'}`}
                    >
                        Apply Now
                    </Link>
                </div>


            </div>
        </nav>
    );
};

export default Navbar;
