'use client'
import styles from '@/styles/Title.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import bg from '@/public/Minecraft.webp';

export default function Title() {
    const [show, setShow] = useState(false);
    const [up, setUp] = useState(false);
    useEffect(()=>{
        const up = setTimeout(()=>{
            setUp(true)
        }, 10)
        const btn = setTimeout(()=>{
            setShow(true)
        }, 50)
        return (()=>{
            clearTimeout(up)
            clearTimeout(btn)
        })
    }, [])
    return (
        <div className={`${styles.main} ${show? styles.show: ''}`}>
            <Image alt="img" src={bg} width={0} height={0} loading="lazy"></Image>
            <h1 className={up? styles.up: ''}>我們是一個小型的地圖創作團隊</h1>
            <h2 className={up? styles.up: ''}>We are a small team of map creators.</h2>
            <h2 className={up? styles.up: ''}>(籌備中)</h2>
            <a href="https://discord.gg/ytKqrske7w" title="前往Discord群組(另開新分頁)" target='_block' className={`${styles.btn} ${up? styles.up: ''}`}>加入我們</a>
        </div>
    );
}
