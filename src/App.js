import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Globalstyle } from './style/global';
import { lightTheme, darkTheme } from './style/themes';
import PortfolioSection from './page/index';

const App = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <Globalstyle />
            <PortfolioSection toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
};

export default App;