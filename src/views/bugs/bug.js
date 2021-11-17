import React from "react";
import { motion } from "framer-motion";

const Bug = props => {
    const { bug } = props;
    return (
        <motion.button
            className="bug"
            whileHover={{ scale: 1.05 }}
        >
            <h5>{bug.bug_title}</h5>
            <p>{bug.bug_description}</p>
        </motion.button>
    );
}

export default Bug;