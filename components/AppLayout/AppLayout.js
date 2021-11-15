// Import Components
/* import AppMetaTags from 'components/AppComponents/AppMetaTags' */
import AppNavbar from 'components/AppNavbar/AppNavbar'
import AppFooter from 'components/AppFooter/AppFooter'
import { UserProvider } from '@auth0/nextjs-auth0';
// Import Styles
import styles from './AppLayout.module.scss'

export default function AppLayout({ children }) {
    return (
        <UserProvider>
            {/* <AppMetaTags/> */}
            <AppNavbar/>
            <main className={styles.Content}>
                {children}
            </main>
            <AppFooter/>
        </UserProvider>
    )
}