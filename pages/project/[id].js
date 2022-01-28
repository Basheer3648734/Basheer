import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { Warning } from "@material-ui/icons";
export default function ProjectView({ project }) {
  return (
    <div className="absolute w-[100vw] bg-[#F9F9F9] overflow-y-auto z-[-20]">
      <div className=" bg-gradient-to-t from-[purple] to-[#bc87ce]  absolute top-0 left-0 w-[100vw] md:w-[40vw] h-[40vw] md:h-[100vh] z-[-10] md:block "></div>
      <Layout>
        <div className="p-[30px] h-[100%] flex flex-col md:flex-row sm:items-center   h-[100vh]">
          <section className="w-[100%] sm:w-[80%] md:w-[100%] md:p-[30px] ">
            <Image
              priority
              width="500px"
              height="250px"
              src={project.image}
              alt={project.name}
            />
          </section>

          <section className="flex flex-col mt-[20px] justify-start  md:mt-[10rem] h-[100%] md:p-[30px] w-[100%]">
            {project.stage == "development" ? (
              <div className="bg-warning text-[rgba(255,0,0,0.8)] flex align-center w-[100%] px-[10px] py-[5px] rounded mb-[20px]  sm:mt-[20px] md:mt-[0px]">
                <Warning />{" "}
                <p className="px-[10px] text-[0.8rem] md:text-[0.9rem]">
                  This Project is under developement.
                </p>
              </div>
            ) : (
              ""
            )}
            <Link href="/project">
              <a className="text-sky underline md:text-[1.2rem]">
                &#8592; Projects
              </a>
            </Link>
            <div className="my-[20px] md:my-[20px]">
              <h1 className="text-center underline text-[1.25rem] sm:text-[1.5rem] font-bold">
                {project.name}
              </h1>
              <p className="indent-8 my-[20px] text-justify text-[0.8rem] sm:text-[1rem] leading-6 md:leading-8">
                {project.description}
              </p>
              <div>
                <h2 className="underline sm:text-[1.2rem]">
                  Technologies used
                </h2>
                <ul className="flex flex-row flex-wrap my-[20px] flex-1 justify-around">
                  {project.technologies.map((technology, index) => {
                    return (
                      <li
                        key={index}
                        className="text-[0.8rem] sm:text-[1rem] hover:underline"
                      >
                        <Link href={technology.url}>
                          <a>{technology.name}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <div>
                  {project.url ? (
                    <Link href={project.url}>
                      <a
                        className={` block my-[20px] text-[1.1rem] sm:text-[1.3rem] hover:underline`}
                      >
                        Visit &#8594;
                      </a>
                    </Link>
                  ) : (
                    ""
                  )}

                  {project.githubUrl ? (
                    <Link href={project.githubUrl}>
                      <a
                        className={`  block my-[20px] text-[1.1rem] sm:text-[1.3rem] hover:underline`}
                      >
                        Visit on Github &#8594;
                      </a>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  let data = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/project`).then(
    (data) => data.json()
  );
  const params = data.map((d) => ({
    params: {
      id: d.id,
    },
  }));
  return {
    paths: params,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/project/${params.id}`
  ).then((d) => d.json());
  return {
    props: {
      project: data,
    },
  };
}
