import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import Codemirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';

export default function Playground() {
    return (
        <div className="flex flex-col w-full h-full bg-dark-layer-1 relative">
            <PreferenceNav />

            {/* <div className="flex-1 overflow-hidden"> */}
                <PanelGroup direction="vertical" className="h-[calc(100vh-94px)]">
                    <Panel defaultSize={60} minSize={0}>
                        <div className="w-full h-full overflow-auto">
                            <Codemirror
                                value={"const a = 1;"}
                                theme={vscodeDark}
                                extensions={[javascript()]}
                                style={{ fontSize: 16 }}
                            />
                        </div>
                    </Panel>

                    <PanelResizeHandle />
                    
                    <Panel defaultSize={40} minSize={0}>
                        
                    </Panel>
                </PanelGroup>
            {/* </div> */}
        </div>
    );
}