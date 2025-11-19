import styles from './Header.module.css';

function Header({title}) {
    return (
        <header className={styles.mainHeader}>
            <h1 className={styles.title}> { title } </h1>
        </header>    );
};

export default Header;