import styles from '@/styles/About.module.scss';

export default function About() {
    return(
        <div className={styles.main}>
            <div className={styles.title}>
                <h1>關於我們</h1>
                <p>創立於2023年4月，我們專門製作Minecraft地圖<br/>目前還不太穩定，非常需要很多幫助<br/>如果你對我們感興趣，歡迎加入我們</p>
            </div>
            <iframe src="https://ptb.discord.com/widget?id=1094461614369034361&theme=dark" width="350" height="500" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
    )
}