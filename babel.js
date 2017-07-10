module.exports = {
  plugins : [ 'babel' ],
  rules : {
    // eslint-plugin-babel
    'babel/object-curly-spacing' : [ 'error', 'always' ],

    'babel/flow-object-type' : [ 'off' ],
    'babel/generator-star-spacing' : [ 'off' ],
    'babel/new-cap' : [ 'off' ],
    'babel/object-shorthand' : [ 'off' ],
  }
};
