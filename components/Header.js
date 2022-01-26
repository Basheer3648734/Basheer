import Link from "next/link";
function Header() {
  return (
    <header className={`px-[10px] py-[25px] md:px-[0px]`}>
      <Link href="/">
        <a
          className={`font-[900] opacity-[0.8] text-[1.35rem] hover:underline hover:decoration-solid`}
        >
          Basheer.
        </a>
      </Link>
    </header>
  );
}

export default Header;
