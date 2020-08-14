import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Button} from "../lib/components/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS opinonated setup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <p>Next JS opinonated setup</p>

          <Button>Holy Smoke Button</Button>
          <Button type={"alert"}>Holy Smoke Button</Button>
          <Button type={"success"}>Holy Smoke Button</Button>
      </main>
    </div>
  )
}
