import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FormInfo from '../components/form'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Caty Forden Shop</title>
        <meta name="description" content="Caty Forden Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
