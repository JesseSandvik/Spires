import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { readProject } from '../utils/api';
import KanbanBoard from '../components/kanbanBoard/kanbanBoard';

const ProjectById = () => {
    const { projectId } = useParams();

    const [project, setProject] = useState({});
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        const abortController = new AbortController();

        function loadProjectById() {
            readProject(projectId, abortController.signal)
                .then((response) => {
                    setProject({
                        title: response.title,
                        description: response.description,
                        due_date: response.due_date,
                        due_time: response.due_time,
                        creator_name: response.creator_name,
                        creator_email: response.creator_email,
                        complete: response.complete,
                        created_at: response.created_at,
                        updated_at: response.updated_at,
                    });
                    setTasks(response.tasks);
                })
                .catch((error) => setError(error));
        }
        loadProjectById();
        return () => abortController.abort();
    }, [projectId]);

    return (
         <section className="item item2">
            <div className="heading">
                <h2>{project.title}</h2>
            </div>
            <div>
                {error && <p>{error}</p>}
                <KanbanBoard tasks={tasks} />
            </div>
        </section>
    );
}

export default withAuthenticationRequired(ProjectById);