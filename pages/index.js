import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Three Boxes</title>
      </Head>

      <main>
        <h1 className={styles.title}>
          Three Boxes
        </h1>
        <div className={styles.box}>
            Box 1
        </div>
        <div className={styles.box}>
            Box 2
        </div>
        <div className={styles.box}>
            Box 3
        </div>
      </main>
    </div>
  )
}
