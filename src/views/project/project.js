import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Project = props => {
    const navigate = useNavigate();
    const { project } = props;

    const viewProjectClickHandler = (event) => {
        event.preventDefault();
        navigate(`${project.project_id}`);
    }

    return (
        <motion.button
            className="project"
            onClick={viewProjectClickHandler}
            whileHover={{ scale: 1.05 }}
        >
            <h4>{project.project_name}</h4>
            <p>{project.project_description}</p>
        </motion.button>
    );
}

export default Project;