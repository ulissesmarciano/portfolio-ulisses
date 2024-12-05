import React from 'react';
import { Container } from './styles';

const DarkModeToggle = ({ toggleTheme }) => {
    const handleChange = () => {
        toggleTheme();
    };

    return (
        <Container>
            <input
                id="toggle"
                type="checkbox"
                className="toggle"
                onChange={handleChange}
            />
            <label htmlFor="toggle"></label>
        </Container>
    );
};

export default DarkModeToggle;
