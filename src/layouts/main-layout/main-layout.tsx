import React from "react";
import { Container } from "./main-layout.styled";

const MainLayut: React.FC = ({ children }) => {
    return (
        <Container>
            <header>
                Header Maneiro
            </header>

            <main>
                {children}
            </main>

            <footer>
                Footer Maneiro
            </footer>
        </Container>
    );
}

export default MainLayut;