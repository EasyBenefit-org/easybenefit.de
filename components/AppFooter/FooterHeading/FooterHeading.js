// Import Modules

// Import Styles
import styles from './FooterHeading.module.scss'

// Content
export default function FooterHeading(props) {
    return (
        <div className={styles.Heading}>
            {props.heading}
        </div>
    )
}