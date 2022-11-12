interface CodeMap {
    [key: string]: string
}

class CodeExampleService {
    private static code: CodeMap = {};

    public static addCodeExample = (data: { id: string, example: string }) => this.code[data.id] = data.example;

    public static getCodeExample = (data: { id: string }): string => this.code[data.id];
}

export default CodeExampleService;