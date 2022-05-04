import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerConttent}>
                <nav>
                    <a>Home</a>
                    <a>Post</a>
                </nav>
            </div>
        </header>
    )
}