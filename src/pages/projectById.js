import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { deleteProject, readProject } from '../utils/api';

import AddButton from '../components/buttons/addButton';
import classNames from '../utils/ClassNames';
import CommentsInterface from '../views/comments/commentsInterface';
import DeleteButton from '../components/buttons/deleteButton';
import ErrorAlert from '../layout/errorAlert';
import KanbanBoard from '../components/kanbanBoard/kanbanBoard';
import UpdateButton from '../components/buttons/updateButton';

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

    const addTaskHandler = (event) => {
        event.preventDefault();
        navigate(`/projects/${projectId}/tasks/new`);
    }

    const viewCommentsToggleHandler = (event) => {
        event.preventDefault();
        (!viewComments ? setViewComments(true) : setViewComments(false));
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
         <section className="itemTwo">
             <ErrorAlert error={error} />
             <div className="title">
                <div className="item one">
                    <AddButton
                        itemName={"Task"}
                        addHandler={addTaskHandler} 
                    />
                </div>
                <div className="item two">
                    <h2>{project.title}</h2>
                    <span className="btn-group">
                        <UpdateButton
                            itemName={"Project"}
                            updateHandler={updateProjectHandler}
                        />
                        <DeleteButton
                            itemName={"Project"}
                            deleteHandler={deleteProjectHandler}
                        />
                    </span>
                </div>
                <div className="item three">
                    <i
                        className="fas fa-comments"
                        onClick={viewCommentsToggleHandler}
                    ></i>
                </div>
            </div>
            <div className="body">
                <KanbanBoard tasks={project.tasks} />
                <div className={classNames({
                    "viewComments": !viewComments,
                    "viewComments open": viewComments,
                })}
                >
                    <CommentsInterface
                        comments={project.comments}
                        projectTitle={project.title}
                    />
                </div>
            </div>
        </section>
    );
}

export default withAuthenticationRequired(ProjectById);