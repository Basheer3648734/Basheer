import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
export default function App() {
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
      <div className="home">
        <Layout>
          <NavBar page="home" />
          <section className="flex flex-col-reverse  items-center justify-center sm:justify-between h-[90%] md:h-[65vh] sm:flex-row">
            <div className="mt-[36px] p-[30px] sm:p-[20px] md:p-[0px] w-[100%] sm:w-[50%] md:w-[60%] mx-auto">
              <h2 className="font-bold text-[1.5rem] md:text-[2rem]">
                Welcome 👋
              </h2>
              <h2 className="font-bold text-[2rem] md:text-[2.5rem]">
                I am Basheer
              </h2>
              <p className="text-justify leading-7 indent-8 mt-4 md:text-[1rem] md:leading-8 font-medium ">
                a passionate software engineer and dedicated graduate student
                driven by technology and continuous learning. I specialize in
                creating practical solutions that blend the latest technology
                with real-world applications. With a knack for creative
                problem-solving and a strong background in software development,
                I thrive in fast-paced, innovative environments. Let's
                collaborate to push the boundaries of software engineering with
                integrity and excellence. Ready to join me on this exciting
                journey to shape the future of technology?
              </p>
              <Link href="mailto:bk3648734@gmail.com">
                <a className="inline-block bg-cyan w-[100%]  sm:w-auto mt-[1.5rem] px-[15px] py-[10px] text-center  rounded-md">
                  <p className="inline-block hover:underline text-[1rem] hover:decoration-solid hover:underline-offset-2 font-medium ">
                    Get in touch{" "}
                  </p>{" "}
                  🤝
                </a>
              </Link>
            </div>
            <div className="sm:w-[20%] md:w-[40%] ml-11 flex justify-center items-center">
              <Image
                priority
                src="/images/hero_pic.webp"
                width="350rem"
                height="350rem"
                className="rounded-full hover:grayscale"
                alt="image of basheer"
              />
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
}
