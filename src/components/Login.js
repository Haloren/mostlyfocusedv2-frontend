import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Link className="login-btn" to={'/users/1'}>LOGIN</Link>
        </div>
    )
}

export default Login