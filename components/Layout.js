import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div className="w-[98vw] md:w-[90vw] lg:w-[80vw] m-auto  overflow-hidden ">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      {children}
    </div>
  );
}
