const TechnologySolutionsLayout = ({ children }) => {
  return (
    <div className="bg-[url('/page/technology.svg')]  bg-cover bg-right bg-no-repeat relative">
      {children} {/* This renders the content of each page */}
    </div>
  );
};

export default TechnologySolutionsLayout;
