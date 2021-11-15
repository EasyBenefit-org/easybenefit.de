// Import Auth0 UserProvider
// Import Layout
import AppLayout from 'components/AppLayout/AppLayout'
// Import Styles
import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
    return (
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    )
}

export default MyApp