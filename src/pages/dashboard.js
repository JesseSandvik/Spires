import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard. Return to <Link to="/">Home</Link></h1>
        </div>
    );
}

export default Dashboard;