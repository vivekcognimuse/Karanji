import Head from 'next/head';

const EntertainmentLayout = ({ children }) => {
  return (
    <div className="bg-[url('/page/entertainment.svg')]  bg-cover bg-right bg-no-repeat relative">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      {children} {/* This renders the content of each page */}
    </div>
  );
};

export default EntertainmentLayout;
