import Head from "next/head";

const CompanyLayout = ({ children }) => {
  return (
    <div className="bg-[url('/page/home.svg')]  bg-cover bg-right bg-no-repeat relative">
      {children} {/* This renders the content of each page */}
    </div>
  );
};

export default CompanyLayout;
