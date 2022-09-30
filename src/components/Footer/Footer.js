import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_container}>
                    <p className={styles.footer_info_about_developed}>Made with</p>
                    <div className={styles.heart_box}>
                        <div className={styles.heart}></div>
                    </div>
                    <p className={styles.footer_info_about_me}>by</p>
                    <a href="https://github.com/Cocokringle" className={styles.footer_link}>Cocokringle</a>
                </div>
            </footer>
        </>
    )
}
