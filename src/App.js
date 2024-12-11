import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Globalstyle } from './style/global';
import { lightTheme, darkTheme } from './style/themes';
import PortfolioSection from './page/index';

const App = () => {
    const [theme, setTheme] = useState('dark');
    const [isSun, setIsSun] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        const savedIsSun = JSON.parse(localStorage.getItem('isSun') || 'true');

        setTheme(savedTheme);
        setIsSun(savedIsSun);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        const newIsSun = !isSun;

        setTheme(newTheme);
        setIsSun(newIsSun);

        localStorage.setItem('theme', newTheme);
        localStorage.setItem('isSun', JSON.stringify(newIsSun));
    };

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <Globalstyle />
            <PortfolioSection toggleTheme={toggleTheme} isSun={isSun} />
        </ThemeProvider>
    );
};

export default App;
