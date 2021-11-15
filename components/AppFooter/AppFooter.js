// Import Styles
import styles from './AppFooter.module.scss'
// Import Modules & Components
import Link from 'next/link'
import Container from 'components/Container/Container'
import FooterHeading from './FooterHeading/FooterHeading'

// Content
export default function AppFooter() {
    return (
        <footer className={styles.Footer}>
            <Container>
                <div className={styles.Main}>
                        <div className={styles.Box33}>
                            <FooterHeading heading="Unser Ziel"/>
                            <p><b>Online Gutes tun, so einfach wie noch nie!</b></p>
                            <p>Wir arbeitet weiter fleißig an dieser Vision und brauchen dich als aktiven Nutzer. Erzähl deinen Freunden und Bekannten von EasyBenefit, damit wir gemeinsam noch mehr erreichen können.</p>
                            <p>Hier erfährst du mehr über uns.</p>
                        </div>
                        <div className={styles.Box33}>
                            <FooterHeading heading="Navigation"/>
                            <ul>
                                <li>
                                    <Link href="/doc/satzung_easybenefit.pdf">
                                        <a target="_blank">Satzung</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/kontakt">
                                        <a>Kontakt</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.Box33}>
                            <FooterHeading heading="Folge uns auf"/>
                            <ul class="social">
                                <li><a href="https://www.facebook.com/EasyBenefit.de/" title="EasyBenefit auf Facebook" target="_blank" rel="noopener"><i class="fab fa-fw fa-facebook-f"></i></a></li>
                                <li><a href="https://twitter.com/EasyBenefit/" title="EasyBenefit auf Twitter" target="_blank" rel="noopener"><i class="fab fa-fw fa-twitter"></i></a></li>
                                <li><a href="https://instagram.com/EasyBenefit/" title="EasyBenefit auf Instagram" target="_blank" rel="noopener"><i class="fab fa-fw fa-instagram"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCARh8NwICoaqPpBECYRDyXw" title="EasyBenefit auf Youtube" target="_blank" rel="noopener"><i class="fab fa-fw fa-youtube"></i></a></li>
                            </ul>
                            <FooterHeading heading="Newsletter"/>
                            <p><b>Mach's wie 128 Weltverbesserer</b> und abonniere unseren Newsletter um keine Updates und Angebote mehr zu verpassen.</p>
                        </div>
                </div>
            </Container>
            <div className={styles.Legal}>
                <Container>
                    © 2016 - {new Date().getFullYear()} EasyBenefit gUG (haftungsbeschränkt)<br/>
                    <Link href="/datenschutz">
                        <a className={styles.Link}>Datenschutz</a>
                    </Link>
                    &
                    <Link href="/impressum">
                        <a className={styles.Link}>Impressum</a>
                    </Link>
                </Container>
            </div>
        </footer>
    )
}