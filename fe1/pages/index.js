import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../src/component/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
          <div>
            <Header />
          </div>
      </div>
    </div>
  )
}
