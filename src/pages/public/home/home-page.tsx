import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/app-state";
import { Container } from "./home-page.styled";

const HomePage: React.FC = () => {
    const authState = useSelector((state: AppState) => state.authState);
    return (
        <Container>
            <h1>Public Home</h1>
            <p>Authenticated: { authState.authenticated ? 'Yes' : 'No' }</p>
        </Container>
    );
}

export default HomePage;