// math.js code written in using modern JS(ES Module/ES6 syntax) i.e, using "import/export" which Node.js doesnt understand.

/* Generally NODE environment understands both old and modern JS code untill you explicity tell NODE that your .js file contains "ES Module" JS code
 either by setting "type": "module" in package.json or install Babel(which converts "modern js code" to "common js code" which understand by NodeJS) */

/* without setting "type": "module" in package.json or without installing Babel, 
        you'll get "SyntaxError: Cannot use import statement outside a module" when you run math.js */
/*
Node.js v22, already supports most modern JS features.
Examples of modern JS code that even Node v22 does not support without babel installation are:
                 export, import, TypeScript,Decorators (ESNext feature), JSX (used in React),Running modern JS in older browsers or older Node versions   
*/

export const add = (a, b) => a + b;     // Modern JS code


/*----------or--------*/

//  when you install Babel and run math.js then babel converts above Modern Module JS code(ECMAScript/ESM/ES6+) to node understandable code as shown below.

// function add(a, b) {            // Old JS code which Node.js understands.
//     return a + b;
//   }
// module.exports = { add };
  
/* 
Example: Defining "type":"module" in package.json 
                {
                "name": "my-app",
                "version": "1.0.0",
                "type": "module",   ←  👈 This line is important!
                ...
                }
*/  
// -----------------------------------------------  //
/*NOTE:
Defining "Myfile.js" as "Myfile.mjs" also will make Node.js to understand Myfile.js uses Modern JS Module code. 
*/
// -----------------------------------------------  //
/* 
JavaScript has two styles of modules:
        CommonJS – Old style → require() / module.exports
        ES Modules (ESM) – New style → import / export

👉 Node.js was originally built in CommonJS style.

When Node.js started (around 2009), browsers didn't support modules.
So Node team created their own system = CommonJS (require() system)
Later in 2015, ECMAScript (official JS standard) introduced ES Modules.

Now, Browsers only support ESM (import/export).

There are lakhs of Node.js applications already written in "require() / module.exports".
If we switch Node.js to use only "modern JS modules" then millions of old Node apps will break.
So Node had to support both (Old-style/CommonJS and New-style/ES Modules) systems.
Backward compatibility is important.
*/
// -----------------------------------------------  //
/*
if you're writing modern JavaScript (ES6+) like
    - You want to use import/export, arrow functions, etc.
    - You want to run tests with "Jest".
    - You want your code to work even in environments that don’t support latest JS
You need "Babel" package installed to convert (transpile) your code to old JS.
*/



