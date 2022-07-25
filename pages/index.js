import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <div className={styles.homepage}>
      <h1>Home page</h1>
      <button class={styles.button55} role="button">
        SEE FLOWERS
      </button>
      <button class={styles.button55} role="button">
        BUY FLOWERS
      </button>
    </div>
  );
}
