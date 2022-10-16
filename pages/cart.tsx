import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { setUncaughtExceptionCaptureCallback } from 'process'
import { useEffect, useState } from 'react'
import FormInfo from '../components/form'
import Header from '../components/header'
import { Cart } from '../components/interfaces'
import Summary from '../components/summary'
import styles from '../styles/Home.module.css'

const Cart: NextPage = () => {
  const [cart, setCart] = useState({} as Cart)

  useEffect(() => {
    const items = localStorage.getItem('cart')
    if (items) {
      setCart(JSON.parse(items)) 
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Caty Forden Shop</title>
        <meta name="description" content="Caty Forden Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Summary />
          <FormInfo />
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Cart
