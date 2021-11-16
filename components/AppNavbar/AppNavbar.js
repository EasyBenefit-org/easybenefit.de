// Import Modules
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import { useUser } from '@auth0/nextjs-auth0';
// Import Styles
import styles from './AppNavbar.module.scss'


export function NavItem(p) {
    const router = useRouter();
    return (   
        <div className={`${styles.NavItem} ${router.pathname == p.href ? styles.active : ""}`}>
            <Link href={p.href}>
                <a className={styles.Link}>
                    {p.name}
                </a>
            </Link>
        </div>
    )
}

// Content
export default function AppNavbar() {

    const { user, error } = useUser();
    if (error) return <div>{error.message}</div>;

    let UserItem;
    if (user) {
        UserItem = (
            <div className={styles.UserItem}>
                <div className={styles.ProfilePicBox}>
                    <Image
                        src="https://cdn-icons-png.flaticon.com/512/1674/1674291.png"
                        alt="Avatar"
                        layout="fixed"
                        height={30}
                        width={30}
                        priority
                    />
                </div>
                Menü
            </div>
        );
    } else {
        UserItem = (
            <Link href="/api/auth/login">
                <a className={styles.UserItem}>
                    <div className={styles.ProfilePicBox}>
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/1674/1674291.png"
                            alt="Knivemare"
                            layout="fixed"
                            height={30}
                            width={30}
                            priority
                        />
                    </div>
                    Login
                </a>
            </Link>
        )
    }


    return (
        <header className={styles.Navbar}>
            {/* Navbar Logo */}
            <Link href="/">
                <a className={styles.Logo}>
                    <Image
                        src="https://easybenefit.de/images/corporate/easybenefit-logo.png"
                        alt="EasyBenefit | Online einkaufen & Gutes tun!"
                        title="EasyBenefit | Online einkaufen & Gutes tun!"
                        width={172}
                        height={40}
                    />
                </a>
            </Link>
            <nav className={styles.Nav}>
                <NavItem className={styles.NavItem} href="/partner" name="Partner"/>
                <NavItem href="/projekte" name="Hilfsprojekte"/>
                <NavItem href="/charities" name="Charities"/>
                <NavItem href="/ueber-uns" name="Über uns"/>
                {UserItem}
            </nav>
        </header>
    )
}