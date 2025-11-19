import styles from './Footer.module.css';

function Footer({copyright}) {
    return (
        <footer className={styles.mainFooter}>
            <p className={styles.footerText}> {copyright} </p>
        </footer>
    )
};

export default Footer;