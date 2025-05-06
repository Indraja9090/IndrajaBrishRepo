/*
Node.js v22, already supports most modern JS features.
Examples of modern JS code that even Node v22 does not support without babel installation are:
                 export, import, TypeScript,Decorators (ESNext feature), JSX (used in React),Running modern JS in older browsers or older Node versions  
*/

// Decorators (ESNext feature)

function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
  }
  
  class Person {
    @readonly
    name = 'Indraja';
  }
// Output: SyntaxError: Invalid or unexpected token (@)
// Solution:  Use Babel with @babel/plugin-proposal-decorators.

// --------------------------------------------------------------------------//

// JSX (used in React)

const element = <h1>Hello, Indraja!</h1>;
console.log(element);

// Output: SyntaxError: Unexpected token '<'
// Reason: JSX is not real JavaScript – it needs to be compiled using Babel (or frameworks like React + Vite/Webpack)
