const { connectToDatabase } = require('../../lib/mongodb');

// Import Modules & Components
import PageMetaTags from 'components/MetaTags/PageMetaTags';
import PageHeaderTextCenterSimple from 'components/PageHeader/HeadingCenterSimple';
import Container from 'components/Container/Container';
// Import Styles

// Content
export default function Privacy({charities}) {
    return (
        <>
            <PageMetaTags
                title="Hilfsorganisationen | Alle Charities auf EasyBenefit.de"
                description="Alle Hilfsorganisationen / Charities die auf EasyBenefit.de verfügbar sind. ⚡️Unterstütze Sie um gemeinsam die Welt ein bisschen besser zu machen!"
                canonical="/partner"
            />
            <PageHeaderTextCenterSimple
                Heading="Unsere Charities"
                SubHeading="Diese Hilfsorganisationen sind Teil von EasyBenefit!"
            />
            <Container>
                {charities.length === 0 ? (
                    <h2>Aktuell keine Charities registriert!</h2>
                ) : (
                    <ul>
                        {charities.map((charity, i) => (
                            <li key={i}>{charity.name}</li>
                        ))}
                    </ul>
                )}
            </Container>
        </>
    )
}
// getStaticProps - GET Charities
export async function getStaticProps(ctx) {
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let partners = await db
        .collection('Partners')
        .find({})
        .toArray();
    // return the posts

    /* // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    // Request partners from MongoDB via API
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/partners`, 
        {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }}     
    ); */
    // Extract the data
    let data = await JSON.parse(JSON.stringify(partners));

    return {
        props: {
            charities: data,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 12 hours
        revalidate: 43200,     // in sec
    };
}