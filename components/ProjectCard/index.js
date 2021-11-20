// Import Modules
import Image from 'next/image'
import Link from 'next/link'
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
              <Link href={"/projekte/" + project.Slug}>
                <a className={styles.Title}>{project.Name}</a>
              </Link>
                <p className={styles.Text}>
                    {project.Description}
                </p>
                <div className={styles.Values}>
                    <div>{parseInt(project.AmountCurrent).toLocaleString("de-DE", {style:'currency',currency:'EUR',minimumFractionDigits:'0'})}</div>
                    <div>{parseInt(project.AmountTarget).toLocaleString("de-DE", {style:'currency',currency:'EUR',minimumFractionDigits:'0'})}</div>
                </div>
                <progress className={styles.Progress} value={project.AmountCurrent} max={project.AmountTarget} />
            </div>
        </div>
    )
}