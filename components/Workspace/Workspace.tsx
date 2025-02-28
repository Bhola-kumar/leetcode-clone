"use client";
import React from "react";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Playground from "./Playground/Playground";

const Workspace: React.FC = () => {
    return (
        <div className="flex flex-1 h-[calc(100vh-50px)]">
            <PanelGroup direction="horizontal" className="w-full">
                <Panel defaultSize={50} minSize={0} >
                    <ProblemDescription />  
                </Panel>

                <PanelResizeHandle />

                <Panel defaultSize={50} minSize={0}>
                    <Playground />
                </Panel>
            </PanelGroup>
        </div>
    );
};

export default Workspace;