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
          <section className="flex flex-col-reverse  items-center justify-center sm:justify-between h-[80%] md:h-[60vh] sm:flex-row">
            <div className="mt-[20px] p-[30px] sm:p-[20px] md:p-[0px] w-[100%] sm:w-[50%] md:w-[60%] mx-auto">
              <h2 className="font-bold text-[1.5rem] md:text-[2rem]">
                Hello 👋
              </h2>
              <h2 className="font-bold text-[2rem] md:text-[2.5rem]">
                This is Basheer
              </h2>
              <p className="text-justify leading-6 mt-2 md:text-[1rem]">
                I am an undergrad and software engineer. I like to create
                sustainable and efficient softwares that solves human problems.
                Apart from that I am an occasional blogger.
              </p>
              <Link href="mailto:bk3648734@gmail.com">
                <a className="inline-block bg-cyan w-[100%] hover:underline  hover:decoration-solid sm:w-auto mt-[1.5rem] px-[15px] py-[10px] text-center text-[1.2rem]">
                  Get in touch
                </a>
              </Link>
            </div>
            <div className="sm:w-[50%] md:w-[40%] flex justify-center items-center">
              <Image
                priority
                src="/images/hero_pic.webp"
                width="200px"
                height="200px"
                className="rounded-full hover:grayscale md:w-[300px]"
                alt="image of basheer"
              />
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
}
