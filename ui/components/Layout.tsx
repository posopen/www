import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
  brandName: string;
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ brandName, children }) => {
  return (
    <>
      <Header brandName={brandName} />
      <main style={styles.main}>
        {children}
      </main>
      <Footer brandName={brandName} />
    </>
  );
};

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: 'calc(100vh - 128px)', // header + footer
    padding: '32px'
  }
};
