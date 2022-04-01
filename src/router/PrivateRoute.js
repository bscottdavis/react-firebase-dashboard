import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import { useSession } from '../firebase/UserProvider';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useSession();

    return (
        <Route 
        { ...rest } 
        render = {(props) => 
            !!user && user.uid === props.match.params.id ? (
            <Component {...props} />
            ) : (
            <Redirect to={{pathname: `/login`, 
            state: { from: props.location },
         }}
         /> 
        )
    } 
    />
);
};
export default PrivateRoute;