import styles from './Header.module.css';

function Header({ title, isDarkMode, toggleTheme }) {
    return (
        <header className={styles.mainHeader}>
            <h1 className={styles.title}>{title}</h1>
            
            <button 
                className={styles.themeBtn} 
                onClick={toggleTheme}
                title="Toggle Day/Night Mode"
            >
                {isDarkMode ? "☀️ Day" : "🌙 Night"}
            </button>
        </header>
    );
};

export default Header;