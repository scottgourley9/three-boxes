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
          <a class="ar active" href="intent://arvr.google.com/scene-viewer/1.0?mode=ar_preferred&amp;resizable=true&amp;file=https://www.vectary.com/viewer/data/33b7c469-9199-470a-b07e-8db9c0fc9af5/android/33b7c469-9199-470a-b07e-8db9c0fc9af5.glb#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;end;" rel="ar" style="right: 16px; top: 18px;">AR</a>
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
