import Container from "@/components/Container";
import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer: React.FC = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <Container className={`${styles.footerContainer} ${styles.footerLegal}`}>
        <p>
          &copy; Countries Viewer,{" "}
          {new Date().getFullYear()}
        </p>
        <a href="https://github.com/DavidLaraMedia/countries-viewer" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
          <FaGithub /> 
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
