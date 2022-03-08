import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List  |  Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatem pariatur est consectetur iste cum ut quia, repudiandae, ullam sunt esse eos quibusdam commodi facere.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatem pariatur est consectetur iste cum ut quia, repudiandae, ullam sunt esse eos quibusdam commodi facere.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatem pariatur est consectetur iste cum ut quia, repudiandae, ullam sunt esse eos quibusdam commodi facere.</p>


        <Link href="/ninjas" >
          <a className={styles.btn}>See all Ninja list</a>
        </Link>

      </div>
    </>
  )
}
