import React from "react";
import { motion } from "framer-motion";

const Card = props => {
    const { card } = props;
    return (
        <motion.button
            className="card"
            whileHover={{ scale: 1.05 }}
        >
            <h5>{card.card_title}</h5>
            <p>{card.card_description}</p>
        </motion.button>
    );
}

export default Card;