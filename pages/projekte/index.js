// Import Modules & Components
import Container from 'components/Container/Container';
import PageMetaTags from 'components/MetaTags/PageMetaTags';
import PageHeaderTextCenterSimple from 'components/PageHeader/HeadingCenterSimple';
import ProjectCard from 'components/ProjectCard';
import SectionHeading from 'components/SectionHeading/SectionHeading';
// Import Styles

// Import Prisma Client
import prisma from 'lib/prisma';
import Flexbox3Column from 'components/Layouts/Flexbox3Column';

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
  // Return
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
                <SectionHeading
                    heading="Aktuelle Projekte"
                    description="
                        Diese Projekte werden aktuell aktiv finanziert.
                        Um unsere Resource effektiv zu bündeln, werden zur Zeit max. drei Projekte zeitgleich finanziert.
                        Mehr über unsere genaue Vorgehensweise erfährst du in unserem Beitrag über Projektfinanzierung.
                    "
                />
                <Flexbox3Column>
                    {projects.length === 0 ? (
                        <h2>No added partners</h2>
                    ) : (
                        <>
                            {projects.map((project, i) => (
                                <ProjectCard project={project} key={i}/>
                            ))}
                        </>
                    )}
                </Flexbox3Column>
                <SectionHeading
                    heading="Die nächsten Projekte"
                    description="
                    Sobald eines des aktuell Projekte vollständig finanziert ist, werden diese Hilfsprojekte als nächstes gefördert.
                    "
                />
                <Flexbox3Column>
                    {projects.length === 0 ? (
                        <h2>No added partners</h2>
                    ) : (
                        <>
                            {projects.map((project, i) => (
                                <ProjectCard project={project} key={i}/>
                            ))}
                        </>
                    )}
                </Flexbox3Column>
                <SectionHeading
                    heading="Vollständig finanziert! 🎉"
                    description="
                    Sobald eines des aktuell Projekte vollständig finanziert ist, werden diese Hilfsprojekte als nächstes gefördert.
                    "
                />
                <Flexbox3Column>
                    {projects.length === 0 ? (
                        <h2>No added partners</h2>
                    ) : (
                        <>
                            {projects.map((project, i) => (
                                <ProjectCard project={project} key={i}/>
                            ))}
                        </>
                    )}
                </Flexbox3Column>
            </Container>
        </>
    )
}