// Import Modules
import Head from 'next/head'

PageMetaTags.defaultProps = {
    Title: "EasyBenefit.de | Charity-Shopping - Online einkaufen & Gutes tun!",
    Description: "Mit jedem Onlineeinkauf bei einem unserer Partner Gutes tun! Charity-Shopping mit EasyBenefit. ❤️ Du kaufst ein, der Shop spendet. ✅ Jetzt mitmachen!",
    Robots: "index, follow", 
    Canonical: "/" 
}

// Content
export default function PageMetaTags(props) {
    return (
        <Head>
            {/* Url specific MetaTags */}
            <title>{props.Title}</title>
            <meta name="description" content={props.Description}/>
            <meta name="robots" content={props.Robots}/>
            <link rel="canonical" href={[process.env.NEXT_PUBLIC_WEBAPP_HOSTNAME, props.Canonical].join('')}/>

            {/* Facebook MetaTags */}
            <meta property="og:title" content={props.Title}/>
            <meta property="og:description" content={props.Description}/>
            <meta property="og:url" content={[process.env.NEXT_PUBLIC_WEBAPP_HOSTNAME, props.Canonical].join('')}/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content={process.env.OG_SITE_NAME}/>
            <meta property="fb:app_id" content={process.env.FB_APP_ID}/>

            {/* Twitter MetaTags */}
            <meta property="twitter:title" content={props.Title}/>
            <meta property="twitter:description" content={props.Description}/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content={process.env.TWITTER_SITE}/>
        </Head>
    )
}