"use client";
import React from "react";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Playground from "./Playground/Playground";
import { Problem } from "@/problemStore/types/problem";

type WorkspaceProps = {
    problem: Problem;
};
const Workspace: React.FC<WorkspaceProps> = ({problem}) => {
    return (
        <div className="flex flex-1 h-[calc(100vh-50px)]">
            <PanelGroup direction="horizontal" className="w-full">
                <Panel defaultSize={50} minSize={0} >
                    <ProblemDescription problem={problem}/>  
                </Panel>

                <PanelResizeHandle />

                <Panel defaultSize={50} minSize={0}>
                    <Playground problem={problem}/>
                </Panel>
            </PanelGroup>
        </div>
    );
};

export default Workspace;