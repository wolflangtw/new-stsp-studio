import styles from '@/styles/Navbar.module.scss';
import Link from 'next/link'

export default function Navbar() {
    
    return (
        <div className={styles.main}>
            <Link href="/" passHref>
                <h1>STSP Studio</h1>
            </Link>
        </div>
    )
}