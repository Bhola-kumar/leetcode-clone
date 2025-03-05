import React from "react";
import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import { problems } from "@/problemStore/problems";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    pid: string;
  };
};

const ProblemPage = async ({ params }: PageProps) => {
  const { pid } = await params;
  const problem = problems[pid];

  if (!problem) {
    notFound();
  }

  // Create a new problem object without the handler function
  const sanitizedProblem = {
    ...problem,
    handlerFunction: problem.handlerFunction.toString()
  };

  return (
    <>
      <Topbar problemPage />
      <Workspace problem={sanitizedProblem} />
    </>
  );
};

export default ProblemPage;

export async function generateStaticParams() {
  return Object.keys(problems).map((key) => ({
    pid: key,
  }));
}