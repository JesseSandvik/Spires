import React, { useEffect, useState } from 'react';
import { listUsers } from '../utils/api';
import AuthenticationButton from '../components/buttons/authenticationButton';
import { useAuth0 } from '@auth0/auth0-react';
import UserProfile from '../views/profile';

const HomePage = props => {
    const { isAuthenticated } = useAuth0();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        listUsers()
            .then((response) => setUsers(response))
            .catch((error) => console.log(error));
    }, [])
    return (
        <div>
            <h1>Welcome To JobSeeker!</h1>
            <AuthenticationButton />
            {isAuthenticated && <UserProfile />}
        </div>
    );
}

export default HomePage;