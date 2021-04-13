import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

export interface PublicRouteProps extends RouteProps { }

const PublicRoute: React.FC<PublicRouteProps> = ({ ...props }) => {
    return (
        <Route {...props} />
    );
};

export default PublicRoute;
