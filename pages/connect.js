import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Link from "next/link";
import { useState } from "react";
import { GitHub, Twitter, Facebook, Instagram } from "@material-ui/icons";
import Head from "next/head";
import { collection, addDoc } from "firebase/firestore";
import { server } from "../config/index.js";
import db from "../firebase";
export default function Connect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [messageSuccess, setmessageSuccess] = useState(null);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || message == "") {
      setError("Fields cannot be empty");
      setmessageSuccess(null);
      return;
    }
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setError("Invalid Email.");
      setmessageSuccess(null);
      return;
    }
    (async () => {
      try {
        await addDoc(collection(db, "visitors"), {
          name,
          email,
          message,
        });
        const response = await fetch(`${server()}/api/mailSender`, {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        });
        if (response.status != 200) {
          throw new Error("unable to send mail");
        } else if (response.status == 200) {
          setError(null);
          setmessageSuccess("Message sent succesfully. Thank you.");
        }
      } catch (e) {
        setError("Unable to send your request. Please try later");
        setmessageSuccess(null);
      }
    })();

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <Head>
        <title>Connect</title>
      </Head>
      <Layout>
        <NavBar page="connect" />
        <div className="px-[30px]">
          <div>
            <h1 className="text-[1.2rem] font-bold underline m-auto text-center">
              Get In Touch
            </h1>
            {error ? (
              <p
                className="text-center mt-[5px] text-[0.8rem] w-[100%]  m-auto px-[15px] py-[8px] rounded-md bg-error text-errorText md:w-[50%] md:text-[1rem]"
                id="error"
              >
                {error}
              </p>
            ) : (
              ""
            )}
            {messageSuccess ? (
              <p
                className="text-center mt-[5px] text-[0.8rem] w-[100%]  m-auto px-[15px] py-[8px] rounded-md bg-success text-successText md:w-[50%] md:text-[1rem]"
                id="success"
              >
                {messageSuccess}
              </p>
            ) : (
              ""
            )}
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
                  required
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
                  required
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
                  required
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
