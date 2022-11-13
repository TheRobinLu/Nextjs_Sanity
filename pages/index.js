import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Header from '../components/Header';

export default function Home() {
  return (<div className={styles.container}>
    <Head>
      <title>My Blog</title>
      <meta
        name="description"
        content="Created by Robin"
      />
      <link rel="icon" href="../favicon.ico" />
    </Head>
    <Header Header></Header>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Sanity.io and Next.js Blog
      </h1>
      <p className={styles.description}>
        <Link href="/blog">Go to Blog</Link>
      </p>
      <a href="https://www.google.com">Go to Google</a>
    </main>
  </div>)
}
