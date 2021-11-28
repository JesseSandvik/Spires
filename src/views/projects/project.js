import React from 'react';
import { Link } from 'react-router-dom';

const Project = props => {
    const { project } = props;

    function formatCompleteByDate(date) {
        const dateArray = [...date];
        const dateYear = [];
        const dateMonth = [];
        const dateDay = [];

        let left = 0;
        let right = 9;

        while (left <= right) {
            if (left <= 3) {
                dateYear.push(dateArray[left]);
            } else if (left === 5 || left === 6) {
                dateMonth.push(dateArray[left]);
            } else if (left === 8 || left === 9) {
                dateDay.push(dateArray[left]);
            }
            left++;
        }
        return `${dateMonth.join('')}/${dateDay.join('')}/${dateYear.join('')}`;
    }

    return (
        <Link to={`/projects/${project.project_id}`}>
                <h5>{project.title}</h5>
                <small>Due By: {formatCompleteByDate(project.due_date)}</small>
        </Link>
    );
}

export default Project;