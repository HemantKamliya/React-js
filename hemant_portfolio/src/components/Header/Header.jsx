import React, { useState } from "react";
import { Menu, X, Home, GraduationCap, Folder, Mail, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, NavLink } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (id) => {
        if (location.pathname === "/") {
            if (id === "home") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        }
        setIsMenuOpen(false);
    };

    const menuItems = [
        { name: "Home", id: "home", icon: <Home size={20} /> },
        { name: "Education", id: "education", icon: <GraduationCap size={20} /> },
        { name: "Projects", id: "projects", icon: <Folder size={20} /> },
        { name: "Contact", id: "contact", icon: <Mail size={20} /> },
        { name: "About Me", id: "about", icon: <User size={20} /> },
    ];

    // Animation variants
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        exit: { 
            opacity: 0, 
            y: -20,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0 }
    };

    return (
        <nav className="w-full fixed top-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo - Smaller on mobile */}
                    <NavLink
                        to="/"
                        onClick={(e) => {
                            if (location.pathname === "/") {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        }}
                        className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 hover:text-blue-400 transition duration-300 cursor-pointer"
                    >
                        <span className="px-2 py-1 md:px-3 md:py-1 rounded-lg bg-gray-800/70 border border-gray-700/50 hover:bg-gray-800/90">
                            Hemant Kamliya
                        </span>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {menuItems.map((item) => (
                            location.pathname === "/" ? (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavigation(item.id)}
                                    className="relative text-white/90 text-md font-medium flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:text-blue-400 hover:bg-gray-800/40"
                                >
                                    <span className="text-white/80">{item.icon}</span>
                                    <span>{item.name}</span>
                                </button>
                            ) : (
                                <NavLink
                                    key={item.id}
                                    to={item.id === "home" ? "/" : `/#${item.id}`}
                                    className="relative text-white/90 text-md font-medium flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:text-blue-400 hover:bg-gray-800/40"
                                >
                                    <span className="text-white/80">{item.icon}</span>
                                    <span>{item.name}</span>
                                </NavLink>
                            )
                        ))}
                    </div>

                    {/* Mobile Menu Button - Smaller on mobile */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-blue-400 transition duration-300 focus:outline-none p-1.5 rounded-lg hover:bg-gray-800/40 border border-gray-700/50"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="fixed inset-0 z-40 mt-16 md:mt-20 bg-gray-900/95 backdrop-blur-sm md:hidden"
                    >
                        <motion.div className="flex flex-col items-center space-y-4 p-6 pt-10 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
                            {menuItems.map((item) => (
                                location.pathname === "/" ? (
                                    <motion.button
                                        key={item.id}
                                        variants={itemVariants}
                                        onClick={() => handleNavigation(item.id)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full max-w-xs text-lg font-medium flex items-center justify-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 text-white/90 hover:text-blue-400 hover:bg-gray-800/50"
                                    >
                                        {item.icon}
                                        {item.name}
                                    </motion.button>
                                ) : (
                                    <motion.div
                                        key={item.id}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <NavLink
                                            to={item.id === "home" ? "/" : `/#${item.id}`}
                                            className="w-full max-w-xs text-lg font-medium flex items-center justify-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 text-white/90 hover:text-blue-400 hover:bg-gray-800/50"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.icon}
                                            {item.name}
                                        </NavLink>
                                    </motion.div>
                                )
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;