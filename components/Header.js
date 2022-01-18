import styles from "./header.module.css";
import Link from "next/link";
function Header() {
  return (
    <header className={`px-[10px] py-[25px]`}>
      <Link href="/">
        <a className={`font-[poppins] font-[800] opacity-[0.8] text-[1.25rem]`}>Basheer.</a>
      </Link>
    </header>
  );
}

export default Header;

// .header__link {
//   text - decoration: none;
//   font - family: "Poppins", "roboto", sans - serif;
//   font - weight: 800;
//   color: black;
//   opacity: 0.5;
//   font - size: 1rem;
// }
// @media(min - width: 992px) {
//   .header__link {
//     font - size: 1.5rem;
//     margin - left: 115px;
//   }
// }
