import Image from "next/image";
import Link from "next/link";
export default function ProjectCard() {
  // image, title, visit site, created-date
  return (
    <div className="bg-[white] w-[auto] shadow-lg shadow-gray-500/50 inline-block mx-[30px] my-[15px]">
      <div className="w-[100%]">
        <Image src="/images/bookmarker.png" width="300px" height="150px" />
      </div>
      <div className="px-[10px] py-[5px]">
        <h2 className="text-[1.25rem] font-bold inline-block md:text-[1.3rem]">
          Book marker
        </h2>
        <p className="inline-block float-right text-[0.6rem] leading-5 font-medium text-[silver]">
          01/02/2022
        </p>
        <p className="underline text-[0.78rem] decoration-solid mt-[5px] text-[gray] md:text-[0.9rem]">
          Technologies used
        </p>
        <ul className="my-[10px] flex text-[0.8rem] md:text-[0.9rem] justify-around">
          <li>
            <Link href="#">
              <a className="hover:underline hover:decoration-solid">
                Tailwindcss
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="hover:underline hover:decoration-solid">React.js</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="hover:underline hover:decoration-solid">Firebase</a>
            </Link>
          </li>
        </ul>
        <Link href="https://bookmarker-ba651.web.app/login">
          <a className="text-brand font-medium text-[1rem] mb-[10px] block text-center hover:underline hover:decoration-solid md:text-[1.2rem]">
            Visit &#8594;
          </a>
        </Link>
      </div>
    </div>
  );
}
