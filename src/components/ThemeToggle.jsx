import { useTheme } from './theme';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    
    const handleToggle = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <button onClick={handleToggle}>
            Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
    );
};

export default ThemeToggle;