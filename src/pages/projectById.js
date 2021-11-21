import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { listCards } from '../utils/api';
import KanbanBoard from '../components/kanbanBoard/kanbanBoard';

const ProjectById = props => {
    const { projects } = props;
    const { projectId } = useParams();
    const [project, setProject] = useState({});
    const [cards, setCards] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadCards(projectId);
    }, [projectId]);

    function loadCards(projectId) {
        setError(null);
        const abortController = new AbortController();
        listCards(abortController.signal)
            .then((response) => response.filter((card) => card.project_id === Number(projectId)))
            .then((result) => setCards(result))
            .catch((error) => setError(error));
        return () => abortController.abort();
    }

    useEffect(() => {
        function findProjectByMatchingId() {
            const projectWithMatchingId = projects.find((project) => project.project_id === Number(projectId));
            setProject(projectWithMatchingId);
        }
        findProjectByMatchingId();
    }, [projects, projectId]);

    if (project) {
        return (
            <section className="item item2">
                <div className="heading">
                    <h2>{project.project_name}</h2>
                </div>
                <div>
                    {cards && <KanbanBoard cards={cards} />}
                    {error && <p>{error}</p>}
                </div>
            </section>
        );
    } else {
        return <>{props.error && <p>{props.error}</p>}</>
    }
}

export default withAuthenticationRequired(ProjectById);