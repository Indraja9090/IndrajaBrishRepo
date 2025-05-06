
/* 
"Jest" testing library or "Node.js" won’t understand this .ts file and Modern Module JS code directly unless 
    you install "Babel" with "preset-typescript" package, or install "ts-jest" package to process it 
*/
/*
Node.js v22, already supports most modern JS features.
Examples of modern JS code that even Node v22 does not support without babel installation are:
                 export, import, TypeScript,Decorators (ESNext feature), JSX (used in React),Running modern JS in older browsers or older Node versions   
*/
export const multiply = (a: number, b: number): number => a * b;
