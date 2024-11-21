import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Globalstyle } from './style/global';
import { lightTheme, darkTheme } from './style/themes';
import PortfolioSection from './page/index';

const App = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Globalstyle />
            <PortfolioSection toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
};

export default App;