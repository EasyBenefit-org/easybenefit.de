// Import Modules & Components
import PageMetaTags from 'components/MetaTags/PageMetaTags';
import PageHeaderTextCenterSimple from 'components/PageHeader/HeadingCenterSimple';
// Import Styles
import Link from 'next/link'

export async function getStaticProps() {
    const res = await fetch('https://api.awin.com/publishers/379923/programmes?relationship=joined&accessToken=901336cd-53d4-4764-8c66-44e9cba1d290')
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }

// Content
export default function Privacy() {
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
        </>
    )
}