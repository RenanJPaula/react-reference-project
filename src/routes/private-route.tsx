import React, { Fragment } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps extends RouteProps {
    layout?: React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ layout, ...props }) => {
    const isAuthenticated = true;
    const SelectdLayout = layout || Fragment;
    
    if (!isAuthenticated) {
        return (<Redirect to="/" />)
    }

    return (
        <SelectdLayout>
            <Route {...props} />
        </SelectdLayout>
    );
};

export default PrivateRoute;
