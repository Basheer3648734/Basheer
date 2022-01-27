import Head from "next/head";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import fs from "fs";
import path from "path";
import ProjectCard from "../components/ProjectCard";
export default function projects({ projects }) {
  return (
    <div>
      <Head>
        <title>Basheer: Projects Page</title>
      </Head>
      <Layout>
        <NavBar page="projects" />
        <div className=" font-bold text-[2rem]  p-[10px] mb-[10px] flex justify-center">
          <h1 className="projects_highlighter">Projects 💼</h1>
        </div>
        <div className="w-[100%] flex flex-wrap justify-evenly items-center flex-1 basis-[auto]">
          {projects.map((project) => {
            return <ProjectCard {...project} key={project.id} />;
          })}
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const projectsDBFile = path.join(__dirname, "../../../data/projects.json");
  const data = JSON.parse(fs.readFileSync(projectsDBFile));
  console.log(data);
  return {
    props: {
      projects: data,
    },
  };
}
