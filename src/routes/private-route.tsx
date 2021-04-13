import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import DefaultLayout from '../layouts/default-layout/default-layout';
import { AppState } from '../store/app-state';

export interface PrivateRouteProps extends RouteProps {
    layout?: React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ layout, ...props }) => {
    const authenticated = useSelector((state: AppState) => state.authState.authenticated);

    const SelectdLayout = layout || DefaultLayout;

    if (!authenticated) {
        return (<Redirect to="/" />)
    }

    return (
        <SelectdLayout>
            <Route {...props} />
        </SelectdLayout>
    );
};

export default PrivateRoute;
