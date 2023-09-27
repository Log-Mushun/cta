'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

const links = [
  {
    title: "Home",
    href: "/",
    src: "drivers/driver1.png"
  },
  {
    title: "Driver #1",
    href: "#",
    src: "drivers/driver2.png"
  },
  {
    title: "Driver #2",
    href: "#",
    src: "drivers/driver3.png"
  },
  {
    title: "Driver #3",
    href: "#",
    src: "drivers/driver1.png"
  },
  {
    title: "Driver #4",
    href: "#",
    src: "drivers/driver1.png"
  }
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
  )
}