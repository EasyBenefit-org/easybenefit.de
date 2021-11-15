// Import Styles
import styles from './AppFooter.module.scss'
// Import Modules & Components
import Link from 'next/link'
import Container from 'components/Container/Container'

// Content
export default function AppFooter() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Main}>

            </div>
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