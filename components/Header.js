import styles from "./header.module.css";
import Link from "next/link";
function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.header__link}>Basheer.</a>
      </Link>
    </header>
  );
}

export default Header;
