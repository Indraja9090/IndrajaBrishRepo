/* telling Babel how to transform your modern JavaScript so that it works in a specific JavaScript runtime environment — in this case, your current version of Node.js.*/
module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

/* conditionally load presets and plugins in your Babel configuration based on the environment.*/
// module.exports = api => {
//     const isTest = api.env('test'); // This will be true if NODE_ENV is 'test'

//     return {
//         /* @babel/preset-env - lets you write modern JavaScript (ES6 and beyond) and 
//             compiles it down to older JavaScript that can run in your target environment.*/
//         presets: [
//         ['@babel/preset-env', { targets: { node: 'current' } }], // Babel will only compile JS features that are not yet supported by your current Node.js version.
//         ],
//         plugins: [
//         ...(isTest ? ['babel-plugin-dynamic-import-node'] : []),
//         ],
//     };
// };

