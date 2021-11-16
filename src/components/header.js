import React from 'react';
import { motion } from 'framer-motion';
import AuthenticationButton from './buttons/authenticationButton';
import SiteTitle from './siteTitle';

const Header = () => {
    return (
        <header>
            <SiteTitle />
            <motion.div
                whileHover={{ scale: 1.1 }}
            >
                <AuthenticationButton />
            </motion.div>
        </header>
    );
}

export default Header;