import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Head from "next/head";
export default function about() {
  return (
    <div className="about">
      <Head>
        <title>Basheer: About Page</title>
      </Head>
      <Layout>
        <NavBar page="about" />
        <section className="flex px-[30px] align-center h-[100%] flex-col">
          <h1 className="text-center font-bold text-[2rem]  p-[10px]">
            About Me
          </h1>
          <p className="indent-10 text-justify leading-7 mb-[20px] selection:bg-[#f0abfc] selection:text-[#701a75]">
            Hey, I am Basheer. I am an undergrad at CMR college of Engineering
            and Technology and software engineer intern. I like to build
            software applications that aims at solving a particular solution.
            currently I am doing freelance projects. I volunteered as
            vice-president at web development club, CMRCET. Most of the time I
            end up using MERN stack. I also like to work with Python and Java.
            Besides being a web developer, I am learning software architecture
            and design. Apart from being an active person in technical domain, I
            am also a blogger. Generally, I write about what comes to my mind
          </p>
          <h2 className="text-[1.5rem] underline decoration-solid text-[#0891b2] font-bold mb-[5px] md:mt-[20px] lg:text-center">
            My 2022 Resolutions
          </h2>
          <ul className="list-disc leading-7 mx-auto w-[90%] md:w-[60%] lg:w-[70%]">
            <li>Excel at technical skills</li>
            <li>To improve as a human being</li>
          </ul>
        </section>
      </Layout>
    </div>
  );
}
