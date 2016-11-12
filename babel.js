module.exports = {
  plugins : [ 'babel' ],
  rules : {
    // eslint-plugin-babel
    'babel/array-bracket-spacing' : [ 'error', 'always' ],
    'babel/arrow-parens' : [ 'error',  'always' ],
    // 'babel/func-params-comma-dangle' : [ 'error', 'always-multiline' ],
    'babel/no-await-in-loop' : [ 'error' ],
    'babel/object-curly-spacing' : [ 'error', 'always', { arraysInObjects : false, objectsInObjects : false } ],

    'babel/flow-object-type' : [ 'off' ],
    'babel/generator-star-spacing' : [ 'off' ],
    'babel/new-cap' : [ 'off' ],
    'babel/object-shorthand' : [ 'off' ],
  }
};
