import dynamic from 'next/dynamic';
import styles from '@/styles/Main.module.scss';

const Title = dynamic(() => import('./Home/Title'), {
    ssr: true,
})
const About = dynamic(() => import('./Home/About'), {
    ssr: true,
})
const Feature = dynamic(() => import('./Home/Feature'), {
    ssr: true,
})
const Job = dynamic(() => import('./Home/Job'), {
    ssr: true,
})
const New = dynamic(() => import('./Home/NewMap'), {
    ssr: true,
})

export default function Main() {
    return(
        <div className={styles.main}>
            <Title />
            <About />
            <Job />
            <New />
            {/* <Feature /> */}
        </div>
    )
}
