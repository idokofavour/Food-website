import styles from './searchErrrorHandling.module.css'
export default function SearchErrorHandling() {
    return(
        <div className={styles.errorContainer}>
            <h1 className={styles.notFound}>Search Result Not Found</h1>
        </div>
    )
}