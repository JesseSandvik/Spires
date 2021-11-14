import React from 'react';
import UserProfile from './profile';

const Dashboard = props => {
    return (
        <div>
            <UserProfile user={props.user}/>
        </div>
    );
}

export default Dashboard;