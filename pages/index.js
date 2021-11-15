// Import Modules & Components
import PageMetaTags from 'components/MetaTags/PageMetaTags';
import Container from 'components/Container/Container';
// Import Styles


export default function Home({posts}) {
  return (
    <Container>
        <PageMetaTags
            Title="EasyBenefit | Charity-Shopping - Online einkaufen & Gutes tun!"
            Description="Mit jedem Onlineeinkauf bei einem unserer Partner Gutes tun! Charity-Shopping mit EasyBenefit. ❤️ Du kaufst ein, der Shop spendet. ✅ Jetzt mitmachen!"
        />
        <h1>Mehr folgt in Kürze</h1>
        <div>Diese Website befindet sich aktuell noch im Aufbau. Weitere Inhalte folgen in Kürze...</div>
    </Container>
  )
}