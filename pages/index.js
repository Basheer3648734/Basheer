// import Layout from "../components/layout";
import { useRef, useEffect } from "react";
import Header from "../components/Header";
import Head from "next/head";
import SocialBtns from "../components/SocialBtn";
import styles from "./index.module.css";
import Typed from "typed.js";
import { TimelineLite } from "gsap";
// import "gsap";
// import CSSPlugin from "gsap/CSSPlugin";

// const myPlugins = [CSSPlugin]; //<-- HARD REFERENCE IN YOUR CODE
export default function Home() {
  const el = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let actionButton = useRef(null);
  let homeRight = useRef(null);
  const tl = new TimelineLite();
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
    tl.from(homeRight, 0.8, { opacity: 0, x: 50 })
      .staggerFrom([line1, line2, line3], 1, {
        opacity: 0,
        y: 100,
      })
      .to(actionButton, 0.8, {
        visibility: "visible",
        delay: -0.3,
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
          <div className={styles.home__line}>
            <h4 ref={(el) => (line1 = el)}>Hola,</h4>
          </div>
          <div className={styles.home__line}>
            <h1 ref={(el) => (line2 = el)}>
              This is{"   "}
              <span
                className={styles.home__leftName}
                id="hero_name"
                ref={el}
              ></span>
            </h1>
          </div>
          <div className={styles.home__line}>
            <p ref={(el) => (line3 = el)}>
              I am a full stack javascript developer
            </p>
          </div>
          <a
            ref={(el) => (actionButton = el)}
            href="mailto:cleverbasheer@gmail.com"
            className={styles.home__leftChatBtn}
          >
            let's chat
          </a>
        </div>
        <div className={styles.home__right}>
          <img
            ref={(el) => (homeRight = el)}
            src="/images/Programming-rafiki.webp"
            alt="programming svg "
          />
        </div>
      </main>
    </>
  );
}
