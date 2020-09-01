// import Layout from "../components/layout";
import { useRef, useEffect } from "react";
import Header from "../components/Header";
import Head from "next/head";
import SocialBtns from "../components/SocialBtn";
import styles from "./index.module.css";
import Typed from "typed.js";

export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Basheer."],
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 100,
      showCursor: true,
      startDelay: 100,
      loop: true,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Basheer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta property="og:title" content="Basheer" />
        <meta
          property="og:description"
          content="Hey, This is Basheer. I am a javascript developer "
        />
        <meta
          name="description"
          content="Hey, This is Basheer. I am full-stack javascript developer"
        />
        <meta property="og:image" content="/favicon-32x32.png" />
        <meta property="og:url" content="Basheer.io" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="agektmr" />
      </Head>
      <Header />
      <main className={styles.home}>
        <SocialBtns />
        <div className={styles.home__left}>
          <h4>Hola,</h4>
          <h1>
            This is{"   "}
            <span
              className={styles.home__leftName}
              id="hero_name"
              ref={el}
            ></span>
          </h1>
          <p>I am a full stack javascript developer</p>
          <a
            href="mailto:cleverbasheer@gmail.com"
            className={styles.home__leftChatBtn}
          >
            let's chat
          </a>
        </div>
        <div className={styles.home__right}>
          <img src="/images/Programming-rafiki.webp" alt="programming svg " />
        </div>
      </main>
    </>
  );
}
