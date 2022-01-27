import Head from "next/head";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

import ProjectCard from "../components/ProjectCard";
export default function projects() {
  return (
    <div className="">
      <Head>
        <title>Basheer: Projects Page</title>
      </Head>
      <Layout>
        <NavBar page="projects" />
        <div className="w-[100%] flex overflow-hidden flex-wrap justify-evenly items-center flex-1 basis-[auto]">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Layout>
    </div>
  );
}
