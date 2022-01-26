import Head from "next/head";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
export default function projects() {
  return (
    <div>
      <Head>
        <title>Basheer: About Page</title>
      </Head>
      <Layout>
        <NavBar page="projects" />
      </Layout>
    </div>
  );
}
