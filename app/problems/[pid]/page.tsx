import React from "react";
import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
const ProblemPage: React.FC = () => {
  return (
    <>
      <Topbar problemPage />
      <Workspace />
    </>
  );
};

export default ProblemPage;
