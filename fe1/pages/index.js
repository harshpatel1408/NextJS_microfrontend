import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../src/component/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
      <Head>
        <Header />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
           Square root of 4: 2
        </h1>
      </main>
    </div>
    </div>
  )
}
