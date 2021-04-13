import React from 'react';
import { Switch } from 'react-router-dom';
import MainLayut from '../layouts/main-layout/main-layout';
import HomeDashboardPage from '../pages/private/home-dashboard/home-dashboard-page';
import HomePage from '../pages/public/home/home-page';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';

const ApplicationRoutes: React.FC = () => {
    return (
        <Switch>
            <PublicRoute path="/" component={HomePage} exact />
            <PrivateRoute path="/home" layout={MainLayut} component={HomeDashboardPage} exact />
        </Switch>
    );
};

export default ApplicationRoutes;


