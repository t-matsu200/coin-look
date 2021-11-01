import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import Analytics from '../component/analytics';
import styles from './index.module.scss';


type LayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Analytics />
      <div className={styles.default_layout}>
        <Header />
        <div className={styles.base_display}>
          <div className={styles.side_column}></div>
          <div className={styles.container}>
            <main className={styles.main}>{children}</main>
          </div>
          <div className={styles.side_column}></div>
          <div className={styles.sticky_bar}></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
