import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { deleteProject, readProject } from '../utils/api';

import AddButton from '../components/buttons/addButton';
import CommentsInterface from '../views/comments/commentsInterface';
import DeleteButton from '../components/buttons/deleteButton';
import ErrorAlert from '../layout/errorAlert';
import KanbanBoard from '../components/kanbanBoard/kanbanBoard';
import UpdateButton from '../components/buttons/updateButton';
import ViewCommentsButton from '../components/buttons/viewCommentsButton';
import ViewKanbanButton from '../components/buttons/viewKanbanButton';

const ProjectById = () => {
    const navigate = useNavigate();
    const { projectId } = useParams();

    const initialProjectState = {
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

    const [project, setProject] = useState({...initialProjectState});
    const [error, setError] = useState(null);
    const [commentsView, setCommentsView] = useState("closed");

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

    const addTaskHandler = (event) => {
        event.preventDefault();
        navigate(`/projects/${projectId}/tasks/new`);
    }

    const projectCommentsHandler = (event) => {
        event.preventDefault();
        if (commentsView === "closed") {
            setCommentsView("open");
        }
    }

    const projectKanbanHandler = (event) => {
        event.preventDefault();
        if (commentsView === "open") {
            setCommentsView("closed");
        }
    }

    const updateProjectHandler = (event) => {
        event.preventDefault();
        navigate(`/projects/${projectId}/edit`);
    }

    const deleteProjectHandler = (event) => {
        event.preventDefault();
        setError(null);
        const confirmDelete = window.confirm("Are you sure you want to delete this project? It cannot be recovered.");

        if (confirmDelete) {
            deleteProject(projectId)
                .then(() => navigate("/projects"))
                .catch((error) => setError(error));
        }
    }


    return (
         <section className="projects">
             <ErrorAlert error={error} />
             <div className="projects-title">
                <div className="item item-one">
                    <AddButton
                        itemName={"Task"}
                        addHandler={addTaskHandler} 
                    />
                    {commentsView === "closed" && (
                        <ViewCommentsButton
                            commentsHandler={projectCommentsHandler}
                        />
                    )}
                    {commentsView === "open" && (
                        <ViewKanbanButton
                            kanbanHandler={projectKanbanHandler}
                        />
                    )}
                </div>
                <div className="item item-two">
                    <h2>{project.title}</h2>
                </div>
                <div className="item item-three">
                    <UpdateButton
                        itemName={"Project"}
                        updateHandler={updateProjectHandler}
                    />
                    <DeleteButton
                        itemName={"Project"}
                        deleteHandler={deleteProjectHandler}
                    />
                </div>
            </div>
            {commentsView === "open" && (
                <div className="projects-comments">
                    <CommentsInterface
                        comments={project.comments}
                        projectTitle={project.title}
                    />
                </div>
            )}
            {commentsView === "closed" && (
                <div className="projects-kanban">
                    <KanbanBoard tasks={project.tasks} />
                </div>
            )}
        </section>
    );
}

export default withAuthenticationRequired(ProjectById);