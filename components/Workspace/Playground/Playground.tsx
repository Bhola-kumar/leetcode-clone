import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import Codemirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import EditorFooter from './EditorFooter';
import { Problem } from '@/problemStore/types/problem';
type PlaygroundProps = {
    problem: Problem;
};
const Playground: React.FC<PlaygroundProps> = ({ problem }) => {
    const [activeTestCaseId, setActiveTestCaseId] = React.useState(0);
    return (

        <div className="flex flex-col w-full h-full bg-dark-layer-1 relative">
            <PreferenceNav />

            {/* <div className="flex-1 overflow-hidden"> */}
            <PanelGroup direction="vertical" className="h-[calc(100vh-94px)]">
                <Panel defaultSize={60} minSize={6}>
                    <div className="w-full h-full overflow-auto">
                        <Codemirror
                            value={problem.starterCode}
                            theme={vscodeDark}
                            extensions={[javascript()]}
                            style={{ fontSize: 16 }}
                        />
                    </div>
                </Panel>

                <PanelResizeHandle />

                <Panel defaultSize={40} minSize={0}>
                    {/* testcase heading */}
                    <div className="px-5 w-full h-full overflow-auto">
                        <div className="flex h-10 items-center space-x-6">
                            <div className="relative flex h-full flex-col justify-center cursor-pointer">
                                <div className="text-sm font-medium leading-5 text-white">
                                    Testcases
                                </div>
                                <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white" />
                            </div>
                        </div>

                        <div className="flex">
                            {/* TestCases */}
                            {
                                problem.examples.map((example, index) => (
                                    <div key={example.id} className="mr-2 items-start mt-2" onClick={() => setActiveTestCaseId(index)}>
                                        <div className="flex flex-wrap items-center gap-y-4">
                                            <div className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 realtive rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap ${activeTestCaseId === index ? "text-white" : "text-gray-500"}`}>Case {index + 1}</div>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>

                        <div className="font-semibold my-4">
                            <p className="text-sm font-medium mt-4 text-white">Input:</p>
                            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
                                {problem.examples[activeTestCaseId].inputText}
                            </div>
                            <p className="text-sm font-medium mt-4 text-white">Output:</p>
                            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
                                {problem.examples[activeTestCaseId].outputText}
                            </div>

                        </div>
                        <br />
                    </div>
                </Panel>
            </PanelGroup>
            <EditorFooter />.
            {/* </div> */}
        </div>
    );
}

export default Playground;