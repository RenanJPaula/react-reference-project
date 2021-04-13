import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AppState } from "../../../store/app-state";
import { login } from "../../../store/auth/auth-actions";
import { Container } from "./home-page.styled";

const HomePage: React.FC = () => {
    const authState = useSelector((state: AppState) => state.authState);
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogin = useCallback(() => {
        dispatch(login({ name: 'teste' }));
    }, [dispatch]);


    useEffect(() => {
        if (authState.authenticated) {
            history.push('/home');
        }
    }, [authState, history]);

    return (
        <Container>
            <h1>Public Home</h1>
            <p>Authenticated: {authState.authenticated ? 'Yes' : 'No'}</p>
            <button onClick={onLogin}>Login</button>
        </Container>
    );
}

export default HomePage;