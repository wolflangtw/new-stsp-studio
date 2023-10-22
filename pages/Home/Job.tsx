import styles from '@/styles/Job.module.scss';
import Image from 'next/image';

import job from '@/public/job.jpg'

export default function Job() {
    return(
        <div className={styles.main}>
            <div className={styles.content}>
                <h1>目前徵招之職位</h1>
                <div className={styles.job}>
                    <p>建築部門: 建築師最基本有一種建築風格</p>
                    <p>企劃部門: 有創意、想像力編寫地圖劇情</p>
                    <p>文宣部門: 推廣、宣傳團隊、製作團隊圖片</p>
                    <p>實況部門: 實況地圖製作遊玩畫面</p>
                    <p>繪圖師: 關於團隊的繪畫</p>
                    <p>材質製作: 專門繪畫地圖專用材質包</p>
                </div>
            </div>
            <Image src={job} width={0} height={0} alt="職位"></Image>
        </div>
    )
}