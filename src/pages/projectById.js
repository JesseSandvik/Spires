import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { readProject } from '../utils/api';

import CommentsInterface from '../views/comments/commentsInterface';
import KanbanBoard from '../components/kanbanBoard/kanbanBoard';

const ProjectById = () => {
    const { projectId } = useParams();

    const initialProjectData = {
        title: "",
        description: "",
        due_date: "",
        due_time: "",
        creator_name: "",
        creator_email: "",
        complete: false,
        created_at: "",
        updated_at: "",
        comments: [],
        tasks: [],
    }

    const [project, setProject] = useState({...initialProjectData});
    const [viewComments, setViewComments] = useState(false);
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
                        comments: response.comments,
                        tasks: response.tasks,
                    });
                })
                .catch((error) => setError(error));
        }
        loadProjectById();
        return () => abortController.abort();
    }, [projectId]);

    const viewCommentsToggleHandler = (event) => {
        event.preventDefault();
        (!viewComments ? setViewComments(true) : setViewComments(false));
    }

    return (
         <section className="itemTwo">
             <div className="title">
                <div className="item two">
                    <h2>{project.title}</h2>
                </div>
                <div className="item three">
                    <i
                        className="fas fa-comments"
                        onClick={viewCommentsToggleHandler}
                    ></i>
                </div>
            </div>
            <div className="body">
                {error && <p>{error}</p>}
                <KanbanBoard tasks={project.tasks} />
                {viewComments && <CommentsInterface comments={project.comments}/>}
            </div>
            {console.log(project.comments, viewComments)}
        </section>
    );
}

export default withAuthenticationRequired(ProjectById);