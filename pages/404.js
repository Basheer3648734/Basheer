import Header from "../components/Header";
import Link from "next/link";
import styles from "./404.module.css";
import Head from "next/head";
export default function Error() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>404 Error</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div className={styles.error}>
        <main>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </main>
        <p>You came to wrong place</p>
        <Link href="/">
          <a className={styles.error__link}>Go back to home</a>
        </Link>
      </div>
    </>
  );
}
