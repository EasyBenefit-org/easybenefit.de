// Import Modules
import Image from 'next/image'
// Import Styles
import styles from './ProjectCard.module.scss'

// Content
export default function ProjectCard({ project }) {
    return (
        <div className={styles.ProjectCard}>
            <div className={styles.CardImageBox}>
                <Image 
                    src="https://easybenefit.de/images/content/projects/neuer-flachbrunnen-in-uganda-titelbild.jpg"
                    title={project.Name} alt={project.Name}
                    layout="fill"
                />
                <div className={styles.Category}>{project.DonationCategory.Name}</div>
            </div>
            <div className={styles.CardBody}>
                <div className={styles.Title}>{project.Name}</div>
                <p className={styles.Text}>
                    Test 123
                </p>
            </div>
        </div>
    )
}