// Import Styles
import styles from './PartnerSearch.module.scss'
// Import Modules & Components
import Link from 'next/link'
import Image from 'next/image'

export function PartnerCard({programm}, props) {
    return (
        <Link href={programm.clickThroughUrl}>
            <a className={styles.PartnerCard}>
                <Image className={styles.Img}
                    src="https://easybenefit.de/images/content/partner/docmorris-logo.png"
                    alt={programm.name}
                    layout="fill"
                />
            </a>
        </Link>
    )
}

// Content
export default function PartnerSearch({programms}) {

    const first20programms = programms.slice(0, 20);
    const next0programms = programms.slice(19, 39);

    return (
        <>
            <div className={styles.Search}>
                <input placeholder="Partner suchen..."></input>
            </div>
            <div className={styles.Partners}>
                {first20programms.map(programm => (
                    <PartnerCard key={programm.id} programm={programm}/>
                ))}
            </div>
        </>
    )
}