import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { readProject, updateProject } from '../utils/api';
import ProjectForm from '../views/projects/projectForm';

const UpdateProject = () => {
    const navigate = useNavigate();
    const { projectId } = useParams();
    const { user } = useAuth0();

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


    const updateProjectChangeHandler = ({ target }) => {
        setProject({
            ...project,
            [target.name]: target.value,
        });
    }

    const updateProjectCancelHandler = (event) => {
        event.preventDefault();
        navigate(`/projects/${projectId}`);
    }

    const updateProjectSubmitHandler = (event) => {
        event.preventDefault();
        const updatedProject = {
            ...project,
            creator_name: user.name,
            creator_email: user.email,
            complete: false,
        };
        updateProject(updatedProject, projectId)
            .then(() => navigate(`/projects/${projectId}`))
            .catch((error) => setError(error));
        setProject({...initialProjectState})
    }

    function formatDateForUpdateForm(date) {
        const dateArray = [...date];
        const updatedDateArray = [];

        let left = 0;
        let right = 9;

        while (left <= right) {
            updatedDateArray.push(dateArray[left]);
            left++;
        }
        return updatedDateArray.join('');
    }

    return (
        <section className="itemTwo">
            <div className="title">
                <div className="item two">
                    <h2>Edit Project</h2>
                </div>
            </div>
            {error && <p>{error}</p>}
            <ProjectForm
                cancelHandler={updateProjectCancelHandler}
                changeHandler={updateProjectChangeHandler}
                formValueOne={project.title}
                formValueTwo={project.description}
                formValueThree={formatDateForUpdateForm(project.due_date)}
                formValueFour={project.due_time}
                submitHandler={updateProjectSubmitHandler}
            />
        </section>
    );
}

export default withAuthenticationRequired(UpdateProject);