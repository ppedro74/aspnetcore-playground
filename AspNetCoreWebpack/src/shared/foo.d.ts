export = FOO;
export as namespace FOO;

declare namespace FOO {
    export class Bar {
        someNumber: number;
        someText: string;
        constructor(n: number, t: string);
    }
}