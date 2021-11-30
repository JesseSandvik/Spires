import React, { useEffect, useState }from 'react';
import Available from './available';
import Completed from './completed';
import InProgress from './inProgress';

const KanbanBoard = props => {
    const { tasks } = props;
    const [availableTasks, setAvailableTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        function filterTasksByStatus(tasks) {
            setAvailableTasks(filterAvailableTasks(tasks));
            setInProgressTasks(filterInProgressTasks(tasks));
            setCompletedTasks(filterCompletedTasks(tasks));
        }
        filterTasksByStatus(tasks);
    }, [tasks])

    function filterAvailableTasks(tasks) {
        return tasks.filter((task) => task.status === "available");
    }
    function filterInProgressTasks(tasks) {
        return tasks.filter((task) => task.status === "in progress");
    }
    function filterCompletedTasks(tasks) {
        return tasks.filter((task) => task.status === "completed");
    }

    return (
        <>
            <Available tasks={availableTasks} />
            <InProgress tasks={inProgressTasks} />
            <Completed tasks={completedTasks} />
        </>
    );
}

export default KanbanBoard;