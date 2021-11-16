// Import Modules & Components
import PageMetaTags from 'components/MetaTags/PageMetaTags';
import PageHeaderTextCenterSimple from 'components/PageHeader/HeadingCenterSimple';
import { ContactForm } from 'components/ContactForm/ContactForm';
// Import Styles


// Content
export default function ContactPage() {
    return (
        <>
            <PageMetaTags/>
            <PageHeaderTextCenterSimple
                Heading="Kontakt"
                SubHeading="Unser Team hilft dir gerne weiter"
            />
            <ContactForm/>
        </>
    )
}