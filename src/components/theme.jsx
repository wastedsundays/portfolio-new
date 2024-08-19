import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Get the saved theme from localStorage or use the user's system preference
        const savedTheme = localStorage.getItem('adamh-theme');
        return savedTheme ? savedTheme : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        // Save the theme in localStorage
        localStorage.setItem('adamh-theme', theme);
        // Apply the theme
        // document.body.className = theme;
        document.documentElement.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.any,
    };

export const useTheme = () => useContext(ThemeContext);