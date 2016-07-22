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
    'react/display-name' : [ 'error' ],
    'react/no-danger' : [ 'error' ],
    'react/no-deprecated' : [ 'error' ],
    'react/no-did-mount-set-state' : [ 'error' ],
    'react/no-did-update-set-state' : [ 'error' ],
    'react/no-direct-mutation-state' : [ 'error' ],
    // 'react/no-find-dom-node' : [ 'error' ], @todo 6.0.0
    'react/no-is-mounted' : [ 'error' ],
    'react/no-render-return-value' : [ 'error' ],
    'react/no-string-refs' : [ 'warn' ],
    'react/no-unknown-property' : [ 'error' ],
    'react/prefer-es6-class' : [ 'error' ],
    'react/prefer-stateless-function' : [ 'warn' ],
    'react/react-in-jsx-scope' : [ 'error' ],
    'react/require-render-return' : [ 'error' ],
    'react/self-closing-comp' : [ 'error' ],
    'react/jsx-key' : [ 'warn' ],
    'react/no-comment-textnodes' : [ 'error' ],
    'react/jsx-no-duplicate-props' : [ 'warn', { ignoreCase : true } ],
    'react/jsx-no-target-blank' : [ 'error' ],
    'react/jsx-no-undef' : [ 'error' ],
    'react/jsx-pascal-case' : [ 'error' ],
    'react/jsx-uses-react' : [ 'error' ],
    'react/jsx-uses-vars' : [ 'error' ],
  },
};
