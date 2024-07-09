import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Image from "next/image";
export default function experience() {
  return (
    <div className="home">
      <Head>
        <title>Experience </title>
      </Head>
      <Layout>
        <NavBar page="experience" />
        <div className="flex justify-center items-center">
          <Image
            src="/images/work_in_progress.gif"
            height="400rem"
            width="500rem"
            alt="Work in Progress"
            className=""
          />
        </div>
      </Layout>
    </div>
  );
}
