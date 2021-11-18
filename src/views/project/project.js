import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Project = props => {
    const { project } = props;

    return (
        <Link to={`/projects/${project.project_id}`}>
            <motion.div
                className="project"
                whileHover={{ scale: 1.05 }}
            >
                <h4>{project.project_name}</h4>
                <p>{project.project_description}</p>
            </motion.div>
        </Link>
    );
}

export default Project;