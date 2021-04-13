import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/app-state";
import { Container } from "./home-page.styled";

const HomeDashboardPage: React.FC = () => {
    const authState = useSelector((state: AppState) => state.authState);
    return (
        <Container>
            <h1>Private Dashboard</h1>
            <p>Authenticated: {authState.authenticated ? 'Yes' : 'No'}</p>
        </Container>
    );
}

export default HomeDashboardPage;