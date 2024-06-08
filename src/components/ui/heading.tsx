import React from "react";

interface HeadingProps {
  title: React.ReactNode;
  text: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ title, text }) => {
  return (
    <header className="flex flex-col px-4 md:px-0 md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
      <div className="space-y-1">
        <h2 className=" text-lg sm:text-xl  md:text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        <p className=" text-xs sm:text-sm md:text-base text-muted-foreground">{text}</p>
      </div>
    </header>
  );
};

export default Heading;
