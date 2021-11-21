import React, { useEffect, useState } from 'react';
import Form from '../../components/form';
import { createProject } from '../../utils/api';

const CreateProject = () => {
    const initialFormState = {
        project_name: "",
        project_description: "",
        creator: "",
    };
    const [project, setProject] = useState({...initialFormState});
    const [error, setError] = useState(null);


    return (
        <Form />
    );
}

export default CreateProject;