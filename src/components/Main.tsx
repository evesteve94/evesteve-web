import React, { ReactNode } from "react";
import "../styles/main.css";

const Main: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
