import '../styles/navigation/navigation.css';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <motion.li
                    whileHover={{ scale: 1.1 }}
                >
                    <Link
                        to="/dashboard"
                    >
                        Dashboard
                    </Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.1 }}
                >
                    <Link
                        to="/projects"
                    >
                        Projects
                    </Link>
                </motion.li>
            </ul>
        </nav>
    );
}

export default Navigation;