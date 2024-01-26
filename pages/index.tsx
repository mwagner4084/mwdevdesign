// pages/index.js
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.section}>
            <Image
              className={styles.logo}
              src="/img/mw-black.png"
              alt="MW Logo"
              width={300}
              height={200}
              priority 
            />
          </div>
          <p className={styles.subtitle}>Front-end Web Design | Back-end Web Development | Logo Design | Social Media Mgmt | Content Marketing</p>
          <hr></hr>
          <div className={styles.section}>
            <h2 className={styles.h1}>COMING SOON</h2>
            <a href="https://github.com/mwagner4084" className={styles.button}>Github</a>
          </div>
        </div>
      </main>
    </div >
  );
}

