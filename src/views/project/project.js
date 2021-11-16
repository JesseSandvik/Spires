import React from 'react';
import { motion } from 'framer-motion';
import ViewProject from './viewProject';

const Project = props => {
    const { project } = props;

    const viewProjectClickHandler = (event) => {
        event.preventDefault();
        return <ViewProject project={project} />
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