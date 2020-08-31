import styles from "./socialBtn.module.css";

function SocialBtn() {
  return (
    <div className={styles.socialBtn}>
      <a href="#">
        <img src="/images/instagram.png" />
      </a>
      <a href="#">
        <img src="/images/github.png" />
      </a>
      <a href="#">
        <img src="/images/linkedin.png" />
      </a>
      <a href="#">
        <img src="/images/twitter.png" />
      </a>
    </div>
  );
}

export default SocialBtn;
