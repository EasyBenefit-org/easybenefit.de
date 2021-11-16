// Import Modules & Components
import Container from 'components/Container/Container';
import PageMetaTags from 'components/MetaTags/PageMetaTags';
import PageHeaderTextCenterSimple from 'components/PageHeader/HeadingCenterSimple';
import PartnerSearch from 'components/PartnerSearch/PartnerSearch';
// Import Styles

// getStaticProps
export async function getStaticProps() {
    // Fetch Data from AWIN API currently "joined" Programs
    const apiURL = (
        'https://api.awin.com/publishers/' +
        process.env.AWIN_PUBLISHER_ID +
        '/programmes?relationship=joined&accessToken=' +
        process.env.AWIN_OAUTH2_TOKEN
    )
    const res = await fetch(apiURL)
    const programms = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        programms,
      },
    }
}

// Content
export default function Privacy({programms}) {
    return (
        <>
            <PageMetaTags
                title="Partner im Überblick | EasyBenefit.de"
                description="Bei diesen Partnern kannst du mit EasyBenefit einfach & kostenlos Gutes tun! ⚡️ Jetzt mitmachen!"
                canonical="/partner"
            />
            <PageHeaderTextCenterSimple
                Heading="Unsere Partner"
                SubHeading="Gemeinsam mehr erreichen!"
            />
            <Container>
                     <PartnerSearch programms={programms} />
            </Container>
        </>
    )
}