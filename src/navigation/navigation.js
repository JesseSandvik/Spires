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
                        to="/projects/new"
                    >
                        New Project
                    </Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.1 }}
                >
                    <Link
                        to="/projects"
                    >
                        All Projects
                    </Link>
                </motion.li>
            </ul>
        </nav>
    );
}

export default Navigation;