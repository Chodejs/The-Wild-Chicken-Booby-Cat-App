import styles from './Footer.module.css';

function Footer({copyright}) {
    return (
        <footer className={styles.mainFooter}>
            <p className={styles.footerText}> {copyright} | Designed With &#128151; by Chris and Emma</p>
        </footer>
    )
};

export default Footer;