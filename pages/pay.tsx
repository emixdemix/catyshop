import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { setUncaughtExceptionCaptureCallback } from 'process'
import { useEffect, useState } from 'react'
import FormInfo from '../components/form'
import Header from '../components/header'
import { Cart, FieldValue } from '../components/interfaces'
import Review from '../components/review'
import Summary from '../components/summary'
import styles from '../styles/Home.module.css'

const EuropeCountries = [
  'Austria',
  'Belgium',
  'Bosnia and Herzegovina',
  'Bulgaria',
  'Croatia',
  'Czech Republic',
  'Denmark',
  'Finland',
  'France',
  'Germany',
  'Hungary',
  'Iceland',
  'Ireland',
  'Italy',
  'Luxembourg',
  'Netherlands',
  'Norway',
  'Poland',
  'Portugal',
  'Romania',
  'Russian Federation',
  'San Marino',
  'Slovakia',
  'Slovenia',
  'Spain',
  'Sweden',
  'Switzerland',
  'Turkey',
  'Ukraine']

const Pay: NextPage = () => {
  const [cart, setCart] = useState({} as Cart)
  const [field, setField] = useState({} as FieldValue)

  useEffect(() => {
    const items = localStorage.getItem('cart')
    if (items) {
      setCart(JSON.parse(items)) 
    }
    const f = localStorage.getItem('personalinfo')
    if (f) {
        setField(JSON.parse(f))
    }
  }, [])

  const isEurope = () => {
    return EuropeCountries.includes(field['country'])
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Caty Forden Shop</title>
        <meta name="description" content="Caty Forden Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          {
            isEurope() ? 
            <Review shipping="europe" fields={field}/>
            :
            <Review shipping="other" fields={field}/>
          }  
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Pay
