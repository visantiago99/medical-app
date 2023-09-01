import Head from 'next/head';
import { ReactElement } from 'react';

interface MainLayoutProps {
  children: ReactElement;
  title?: string;
}

const MainLayout = ({ children, title }: MainLayoutProps) => (
  <>
    <Head>
      <title>
        {title ? `${title} | ` : ''}
        PowerHub
      </title>
      <meta
        name="description"
        content="This is the Next Generation PowerHub!"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* <Header /> */}
    <div className="flex h-full w-full">
      {/* <Sidebar /> */}
      <main
        className="w-full bg-gray-50 overflow-y-auto"
        style={{ height: 'calc(100vh - 4rem)' }}
      >
        {children}
      </main>
    </div>
    <footer />
  </>
);

export default MainLayout;
