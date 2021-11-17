// Import Modules

// Import Styles
import styles from './SectionHeading.module.scss'

// Content
export default function SectionHeading(p) {
    return (
        <div className={styles.HeadingBox}>
            <h2>{p.heading}</h2>
            <p>{p.description}</p>
        </div>
    )
}