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
          {/*
              <a class="ar active" href="intent://arvr.google.com/scene-viewer/1.0?mode=ar_preferred&amp;resizable=true&amp;file=https://scottgourley.s3.us-west-2.amazonaws.com/Green+Box.glb#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;end;" rel="ar">
                AR Testing
              </a>
          */}
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
