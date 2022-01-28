import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import Head from "next/head";
export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Layout>
        <NavBar />
        <div className="flex items-center justify-center h-[60vh]">
          <div className="text-center mt-[40px]">
            <p className="uppercase text-[0.7rem]">oops! Page not found</p>
            <p className="text-[10rem] font-bold tracking-[-15px] leading-[18vh]">
              404
            </p>
            <p className="uppercase text-[0.7rem]">
              we are sorry, but the page you requested was
              <br /> not found
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
