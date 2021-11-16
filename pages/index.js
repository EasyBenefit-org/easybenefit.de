// Import Modules & Components
import PageMetaTags from 'components/MetaTags/PageMetaTags';
import Container from 'components/Container/Container';
// Import Styles
import prisma from 'lib/prisma';

export default function Home({programms}) {
  return (
    <Container>
        <PageMetaTags
            Title="EasyBenefit | Charity-Shopping - Online einkaufen & Gutes tun!"
            Description="Mit jedem Onlineeinkauf bei einem unserer Partner Gutes tun! Charity-Shopping mit EasyBenefit. ❤️ Du kaufst ein, der Shop spendet. ✅ Jetzt mitmachen!"
        />
        <h1>Mehr folgt in Kürze</h1>
        <div>Diese Website befindet sich aktuell noch im Aufbau. Weitere Inhalte folgen in Kürze...</div>

        {programms.length === 0 ? (
            <h2>No added partners</h2>
        ) : (
            <ul>
                {programms.map((programm, i) => (
                    <li key={i}>{programm.Name} - {new Date(programm.ActiveFrom).toLocaleDateString("de-DE", {day: "2-digit", month: "2-digit", year: "numeric"})}
                    </li>
                ))}
            </ul>
        )}
    </Container>
  )
}

export async function getStaticProps(ctx) {
    // Prisma SQL lookup
    const projects = await prisma.project.findMany({
        include: {
            DonationCategory: true
        }
    })
    // Stringify and Pars to eliminate Date and Decimal serialization error
    const projectsJSON = await JSON.parse(JSON.stringify(projects))

    return {
        props: {
            programms: projectsJSON
        },
    };
}