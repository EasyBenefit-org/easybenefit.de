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
                    src={project.ImageURL}
                    title={project.Name} alt={project.Name}
                    layout="fill"
                />
                <div className={styles.Category}>{project.DonationCategory.Name}</div>
            </div>
            <div className={styles.CardBody}>
                <div className={styles.Title}>{project.Name}- Der genaue Titel der Projekte folgt noch...</div>
                <p className={styles.Text}>
                    {project.Description}
                </p>
                <div className={styles.Values}>
                    <div>{parseInt(project.AmountTarget).toLocaleString("de-DE", {style:'currency',currency:'EUR',minimumFractionDigits:'0'})}</div>
                    <div>{parseInt(project.AmountTarget).toLocaleString("de-DE", {style:'currency',currency:'EUR',minimumFractionDigits:'0'})}</div>
                </div>
                <progress className={styles.Progress} value="125000" max={project.AmountTarget}>
                    Hallo?
                </progress>
            </div>
        </div>
    )
}