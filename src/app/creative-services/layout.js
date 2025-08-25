import Head from "next/head";

const EntertainmentLayout = ({ children }) => {
  return (
    <div className="bg-[url('/page/entertainment.svg')]  bg-cover bg-right bg-no-repeat relative">
      {children} {/* This renders the content of each page */}
    </div>
  );
};

export default EntertainmentLayout;
