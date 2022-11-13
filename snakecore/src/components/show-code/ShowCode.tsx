import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Data {
    lang: string,
    title: string,
    code: string,
    showLineNumbers?: boolean | undefined,
    wrapLongLine?: boolean | undefined
}

const ShowCode = (data: Data) => {
    return (
        <div className='flex flex-col'>
            <h1 className='text-white dark:text-black font-bold bg-zinc-900 dark:bg-white rounded-t-lg pl-5 border-[1px] border-zinc-700'>
                {data.title}
            </h1>
            <SyntaxHighlighter language={data.lang} style={atomOneDark} showLineNumbers={data.showLineNumbers ?? true} wrapLines={true} wrapLongLines={data.wrapLongLine ?? false}>
                {data.code}
            </SyntaxHighlighter>
        </div>
    );
}

export const TabShowCode = (data: { tabs: Array<Data> }) => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row text-white dark:text-black font-bold flex-wrap bg-zinc-900 dark:bg-white rounded-t-lg pl-5 border-[1px] border-zinc-700'>
                {
                    data.tabs.map((tab, i) => {
                        return (
                            <button className='border-r-2 px-2 border-zinc-700 dark:border-slate-300 dark:hover:bg-slate-300 hover:bg-zinc-700' onClick={() => setActiveTab(i)}>
                                {tab.title}
                            </button>
                        );
                    })
                }
            </div>
            <SyntaxHighlighter language={data.tabs[activeTab].lang} style={atomOneDark} showLineNumbers={data.tabs[activeTab].showLineNumbers ?? true} wrapLines={true} wrapLongLines={data.tabs[activeTab].wrapLongLine ?? false}>
                {data.tabs[activeTab].code}
            </SyntaxHighlighter>
        </div>
    );
}

export default ShowCode;