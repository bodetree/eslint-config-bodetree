module.exports = {
  plugins : [ 'import' ],
  rules : {
    'import/default' : [ 'error' ],
    'import/export' : [ 'error' ],
    'import/extensions' : [ 'off' ],
    'import/first' : [ 'error' ],
    'import/named' : [ 'error' ],
    'import/namespace' : [ 'error' ],
    'import/newline-after-import' : [ 'error' ],
    'import/no-absolute-path' : [ 'error' ],
    'import/no-anonymous-default-export' : [ 'off' ],
    'import/no-deprecated' : [ 'warn' ],
    'import/no-duplicates' : [ 'error' ],
    'import/no-dynamic-require' : [ 'error' ],
    'import/no-extraneous-dependencies' : [ 'warn' ],
    'import/no-internal-modules' : [ 'off' ],
    'import/no-mutable-exports' : [ 'warn' ],
    'import/no-named-as-default' : [ 'error' ],
    'import/no-named-as-default-member' : [ 'error' ],
    'import/no-named-default' : [ 'error' ],
    'import/no-unassigned-import' : [ 'off' ],
    'import/no-unresolved' : [ 'error' ],
    'import/no-webpack-loader-syntax' : [ 'warn' ],

    'import/order' : [ 'error', {
      groups : [
        [ 'builtin', 'external' ],
        'internal',
        [ 'sibling', 'index', 'parent' ],
      ],
      'newlines-between' : 'ignore',
    } ],

    'import/max-dependencies' : [ 'off' ],
    'import/no-amd' : [ 'off' ],
    'import/no-commonjs' : [ 'off' ],
    'import/no-namespace' : [ 'off' ],
    'import/no-nodejs-modules' : [ 'off' ],
    'import/no-restricted-paths' : [ 'off' ],
    'import/prefer-default-export' : [ 'off' ],
    'import/unambiguous' : [ 'off' ],
  },
};
