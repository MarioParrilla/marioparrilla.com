import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ShowCode = (data: { lang: string, code: string, customStyles?: React.CSSProperties | undefined }) => {
    return (
        <SyntaxHighlighter customStyle={data.customStyles} language={data.lang} style={atomOneDark} showLineNumbers={true} wrapLines={true} wrapLongLines={false}>
            {data.code}
        </SyntaxHighlighter>
    );
}

export default ShowCode;