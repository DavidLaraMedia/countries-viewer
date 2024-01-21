import Container from "@/components/Container";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          Countries Viewer: Next.js + Leaflet + GraphQL
        </p>
      </Container>
    </header>
  );
};

export default Header;
