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
    'react/jsx-boolean-value' : [ 'error' ],
    'react/jsx-closing-bracket-location' : [ 'error' ],
    'react/jsx-curly-spacing' : [ 'error', 'never' ],
    'react/jsx-equals-spacing' : [ 'error', 'never' ],
    'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
    'react/jsx-handler-names' : [ 'error' ],
    'react/jsx-indent' : [ 'error', TAB_WIDTH ],
    'react/jsx-indent-props' : [ 'error', TAB_WIDTH ],
    'react/jsx-max-props-per-line' : [ 'error', { maximum : 3 } ],
    'react/jsx-space-before-closing' : [ 'error' ],
    'react/jsx-wrap-multilines' : [ 'error' ],
  },
};
