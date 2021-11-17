// Import Modules & Components
import Container from 'components/Container/Container';
import PageMetaTags from 'components/MetaTags/PageMetaTags';
import PageHeaderTextCenterSimple from 'components/PageHeader/HeadingCenterSimple';
import ProjectCard from 'components/ProjectCard';
// Import Styles
import styles from 'styles/pages.module.scss'

// Import Prisma Client
import prisma from 'lib/prisma';

export async function getStaticProps() {
    // Prisma SQL lookup
    const projects = await prisma.project.findMany({
        include: {
            DonationCategory: true
        }
    })
    // Stringify and Pars to eliminate Date and Decimal serialization error
    const projectsString = await JSON.stringify(projects)
    const projectsJSON = await JSON.parse(projectsString)

    return {
        props: {
            projects: projectsJSON
        },
    };
  }

// Content
export default function Privacy({projects}) {
    return (
        <>
            <PageMetaTags
                title="Hilfsprojekte kostenlos unterstützen! | Alle Projekte bei EasyBenefit"
                description="Unsere Hilfsprojekte im Überblick! ❤️ Mit jedem Online-Einkauf kostenlos gemeinnützige Projekte unterstützen! ✅ Jetzt mitmachen!"
                canonical="/projekte"
            />
            <PageHeaderTextCenterSimple
                Heading="Unsere Hilfsprojekte"
                SubHeading="Das fördern wir!"
            />
            <Container>
                <h2>Aktuelle Projekte</h2>
                <div className={styles.CardLayout}>
                    {projects.length === 0 ? (
                        <h2>No added partners</h2>
                    ) : (
                        <>
                            {projects.map((project, i) => (
                                <ProjectCard project={project} key={i}/>
                            ))}
                        </>
                    )}
                </div>
                <h2>Upcoming Projekte</h2>
                <div className={styles.CardLayout}>
                    {projects.length === 0 ? (
                        <h2>No added partners</h2>
                    ) : (
                        <>
                            {projects.map((project, i) => (
                                <ProjectCard project={project} key={i}/>
                            ))}
                        </>
                    )}
                </div>
                <h2>Finanzierte Projekte</h2>
                <div className={styles.CardLayout}>
                    {projects.length === 0 ? (
                        <h2>No added partners</h2>
                    ) : (
                        <>
                            {projects.map((project, i) => (
                                <ProjectCard project={project} key={i}/>
                            ))}
                        </>
                    )}
                </div>
            </Container>
        </>
    )
}