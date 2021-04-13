import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import DefaultLayout from '../layouts/default-layout/default-layout';

export interface PrivateRouteProps extends RouteProps {
    layout?: React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ layout, ...props }) => {
    const isAuthenticated = true;
    const SelectdLayout = layout || DefaultLayout;

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
