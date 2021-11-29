import React from 'react';
import { Link } from 'react-router-dom';

const ErrorAlert = ({ error }) => {
    return (
        error && (
            <div className="error">
                Error: {error.message}
                <Link to="/">Return Home</Link>
            </div>
        )
    );
}

export default ErrorAlert;