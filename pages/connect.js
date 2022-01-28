import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Link from "next/link";
import { useState } from "react";
import { GitHub, Twitter, Facebook, Instagram } from "@material-ui/icons";
export default function Connect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    alert(`This functionality is still undertest. Thanks`);
  };
  return (
    <div>
      <Layout>
        <NavBar page="connect" />
        <div className="px-[30px]">
          <div>
            <h1 className="text-[1.2rem] font-bold underline m-auto text-center">
              Get In Touch
            </h1>
          </div>
          <div className="w-[100%] sm:w-[80%] md:w-[60%] lg:w-[50%] my-[20px] m-auto">
            <form onSubmit={onSubmitHandler} className="flex flex-col">
              <div className="flex flex-row justify-between my-[10px] ">
                <label htmlFor="name" className="text-[0.9rem] md:text-[1rem]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="border-b-2 border-[gray] outline-none px-[5px] w-[75%] md:w-[80%] text-[0.9rem] md:text-[1rem]"
                />
              </div>
              <div className="flex flex-row justify-between my-[10px]">
                <label htmlFor="email" className="text-[0.9rem] md:text-[1rem]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@gmail.com"
                  className="border-b-2 border-[gray] outline-none px-[5px]  w-[75%] md:w-[80%] text-[0.9rem] md:text-[1rem]"
                />
              </div>
              <div className="flex flex-col justify-between my-[10px]">
                <label
                  htmlFor="message"
                  className="text-[0.9rem] md:text-[1rem]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello there.."
                  className="border-2 border-[gray] outline-none rounded-md p-[5px] mt-[10px] md:mt-[20px]  text-[0.9rem] md:text-[1rem]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-[100%] bg-[#477CE2] text-[white] px-[15px] py-[10px] my-[10px]"
              >
                Get in touch
              </button>
            </form>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-across w-[100%] m-auto sm:w-[80%]">
              <span className="h-[2px] grow-[2]  bg-[gray] px-[20px]"></span>
              <h1 className="mx-[10px] text-[1.1rem] md:text-[1.2rem]">
                Follow on
              </h1>
              <span className="h-[2px] grow-[2] bg-[gray] px-[20px]"></span>
            </div>
            <div className="mt-[20px]">
              <ul className="flex flex-wrap justify-evenly">
                <li className="hover:bg-github  hover:text-[white] p-[15px] rounded-lg">
                  <Link href="https://github.com/Basheer3648734">
                    <a>
                      <GitHub fontSize="large" />
                    </a>
                  </Link>
                </li>
                <li className="hover:bg-facebook  hover:text-[white] p-[15px]  rounded-lg ">
                  <Link href="https://www.facebook.com/ma.basheer.12/">
                    <a>
                      <Facebook fontSize="large" />
                    </a>
                  </Link>
                </li>
                <li className="hover:bg-twitter  hover:text-[white] p-[15px]  rounded-lg">
                  <Link href="https://twitter.com/MABASHEER8">
                    <a>
                      <Twitter fontSize="large" />
                    </a>
                  </Link>
                </li>
                <li className="hover:bg-instagram  hover:text-[white] p-[15px] rounded-lg ">
                  <Link href="https://www.instagram.com/basheer_0111/">
                    <a>
                      <Instagram fontSize="large" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
