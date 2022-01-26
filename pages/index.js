import Layout from "../components/layout";
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
            <div className="mt-[20px] p-[30px] sm:w-[50%] md:w-[60%]">
              <h2 className="font-bold text-[1.5rem]">Hello 👋</h2>
              <h2 className="font-bold text-[2rem]">This is Basheer</h2>
              <p className="leading-6 mt-2">
                I am an undergrad and software engineer.I like to create
                sustainable and efficient softwares that solves human problems
              </p>
              <Link href="maito:bk3648734@gmail.com">
                <a className="inline-block bg-cyan w-[100%] hover:underline  hover:decoration-solid sm:w-auto mt-[1.5rem] px-[15px] py-[10px] text-center text-[1.2rem]">
                  Get in touch
                </a>
              </Link>
            </div>
            <div className="sm:w-[50%] md:w-[40%] flex justify-center items-center">
              <Image
                priority
                src="/images/hero_pic.jpg"
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
