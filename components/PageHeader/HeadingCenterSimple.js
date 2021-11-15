// Import Modules

// Import Styles
import styles from './style.module.scss'

// Content
export default function PageHeaderTextCenterSimple(p) {
    return (
        <div className={styles.Header}>
            <h1>{p.Heading}</h1>
            <p>{p.SubHeading}</p>
        </div>
    )
}