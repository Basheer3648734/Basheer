import styles from "./socialBtn.module.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
function SocialBtn() {
  return (
    <div className={styles.socialBtn}>
      <a
        href="https://www.instagram.com/basheer_0111/"
        target="_blank"
        rel="noopener"
      >
        <InstagramIcon />
      </a>
      <a
        href="https://github.com/Basheer3648734"
        target="_blank"
        rel="noopener"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/mohammed-abdul-basheer-1717b61a1/"
        target="_blank"
        rel="noopener"
      >
        <LinkedInIcon />
      </a>
      <a href="https://twitter.com/MABASHEER8" target="_blank" rel="noopener">
        <TwitterIcon />
      </a>
    </div>
  );
}

export default SocialBtn;
