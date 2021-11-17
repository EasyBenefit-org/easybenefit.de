// Import Modules

// Import Styles
import styles from './style.module.scss'

// Content
export default function Flexbox3Column({ children }) {
    return (
        <div className={styles.Flexbox}>
            {children}
        </div>
    )
}