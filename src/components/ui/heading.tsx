import React from "react";
interface HeadingProps {
  title: React.ReactNode;
  text: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ title, text }) => {
  return (
    <header className="flex items-center justify-between">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </header>
  );
};

export default Heading;
