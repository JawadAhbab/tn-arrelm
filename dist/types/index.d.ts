declare type ArrElmFunc = <T extends readonly any[]>(arr: T, elm: T[number], point?: number) => T[number];
export declare const arrNextElm: ArrElmFunc;
export declare const arrPrevElm: ArrElmFunc;
export {};
