import React, { useEffect, useState } from 'react';
import { listUsers } from '../utils/api';

const HomePage = props => {
    const initialUserState = {
        "first_name": "",
        "last_name": "",
        "user_name": "",
        "password": "",
        "created_at": "",
        "updated_at": "",
    };

    const [users, setUsers] = useState({...initialUserState});

    useEffect(() => {
        listUsers()
            .then((response) => setUsers(response))
            .catch((error) => console.log(error));
    }, [])
    return (
        <div>
            <h1>Welcome To JobSeeker!</h1>
            {console.log(JSON.stringify(users))}
        </div>
    );
}

export default HomePage;