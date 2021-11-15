// Import Modules & Components
import PageMetaTags from 'components/MetaTags/PageMetaTags';
import PageHeaderTextCenterSimple from 'components/PageHeader/HeadingCenterSimple';
// Import Styles

// Content
export default function Privacy() {
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
        </>
    )
}