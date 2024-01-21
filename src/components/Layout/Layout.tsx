import Head from 'next/head';
import { ReactNode } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className, ...rest }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout} {...rest}>
      <Head>
        <title>Next.js Countries Viewer</title>
        <meta
          name="description"
          content="Create mapping apps with Next.js Countries Viewer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;


