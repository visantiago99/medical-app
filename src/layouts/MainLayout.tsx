import Header from '@/components/base/Header';
import Sidebar from '@/components/base/Sidebar';
import Head from 'next/head';
import { ReactElement } from 'react';
import { Roboto } from 'next/font/google';

interface MainLayoutProps {
  children: ReactElement;
  title?: string;
}

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const MainLayout = ({ children, title }: MainLayoutProps) => (
  <>
    <Head>
      <title>{`Medical App - ${title ?? ''}`}</title>
      <meta
        name="description"
        content="This is the Next Generation Medical App!"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div className="flex h-full w-full">
      <Sidebar />
      <main
        className={`w-full h-full bg-slate-300 overflow-y-auto px-8 py-4 ${roboto.className}`}
        style={{ height: 'calc(100vh - 4rem)' }}
      >
        {children}
      </main>
    </div>
    <footer />
  </>
);

export default MainLayout;
