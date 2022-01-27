import Image from "next/image";
import Link from "next/link";
export default function ProjectCard({
  name,
  createdAt,
  technologies,
  id,
  image,
}) {
  // image, title, visit site, created-date
  return (
    <div className="bg-[white] w-[auto] shadow-lg shadow-gray-500/50 inline-block mx-[30px] my-[15px]">
      <div className="w-[100%]">
        <Image src="/images/bookmarker.png" width="300px" height="150px" />
      </div>
      <div className="px-[10px] py-[5px]">
        <h2 className="text-[1.25rem] font-bold inline-block md:text-[1.3rem]">
          {name}
        </h2>
        <p className="inline-block float-right text-[0.6rem] leading-5 font-medium text-[silver]">
          {createdAt}
        </p>
        <p className="underline text-[0.78rem] decoration-solid mt-[5px] text-[gray] md:text-[0.9rem]">
          Technologies used
        </p>
        <ul className="my-[10px] flex text-[0.8rem] md:text-[0.9rem] justify-around">
          {technologies.map((technology, index) => {
            return (
              <li key={index}>
                <Link href={technology.url}>
                  <a className="hover:underline hover:decoration-solid">
                    {technology.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href={`/project/${id}`}>
          <a className="text-black font-medium text-[1rem] mb-[10px] block text-center underline  md:text-[1.2rem] hover:text-[#1572A1]">
            Visit &#8594;
          </a>
        </Link>
      </div>
    </div>
  );
}
