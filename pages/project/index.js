import Head from "next/head";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import ProjectCard from "../../components/ProjectCard";
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
  let data = await fetch("http://localhost:3000/api/project").then((data) =>
    data.json()
  );
  return {
    props: {
      projects: data,
    },
  };
}
