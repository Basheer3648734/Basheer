import Layout from "../components/layout";
import Header from "../components/Header";
import Head from "next/head";
import SocialBtns from "../components/SocialBtn";
import styles from "./index.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Basheer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <main className={styles.home}>
        <SocialBtns />
          <div className={styles.home__left}>
            <h4>Hola,</h4>
            <h1>
              This is <span className={styles.home__leftName}>Basheer</span>
            </h1>
            <p>I am a full stack javascript developer</p>
            <a href="/" className={styles.home__leftChatBtn}>
              let's chat
            </a>
          </div>
          <div className={styles.home__right}>
            <img src="/images/Programming-rafiki.png" />
          </div>
        </main>
      </Layout>
     
    </>
  );
}
