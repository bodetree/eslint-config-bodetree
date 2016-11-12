const TAB_WIDTH = 2;

module.exports = {
  plugins : [ 'react' ],
  parserOptions : {
    sourceType : 'module',
    ecmaFeatures : {
      jsx : true,
    },
  },
  rules : {
    'react/forbid-prop-types' : [ 'error' ],
    'react/prefer-stateless-function' : [ 'warn' ],
    'react/prop-types' : [ 'error' ],
    'react/require-optimization' : [ 'warn' ],

    'react/jsx-no-bind' : [ 'error' ],
    'react/jsx-no-literals' : [ 'warn' ],
  },
};
