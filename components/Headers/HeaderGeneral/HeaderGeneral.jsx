'use client';
import styles from './style.module.scss';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav';
import { MyContext } from '@/MyContextProvider';


export default function HeaderGeneral() {

    const { menuOpen, setMenuOpen} = useContext(MyContext);

    return (
        <div className={styles.header} >
            {/* <div className={styles.bar} >
                <div onClick={() => {setIsActive(!isActive)}} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        
                </div>
               
            </div> */}
            <motion.div 
            
            variants={background} initial="initial" animate={menuOpen ? "open" : "closed"} className={styles.background}></motion.div>
            <AnimatePresence mode="wait">
                {menuOpen && <Nav/>}
            </AnimatePresence>
        </div>
    )
}
