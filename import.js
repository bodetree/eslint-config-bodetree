module.exports = {
  plugins : [ 'import' ],
  rules : {
    'import/no-unresolved' : [ 'error' ],
    'import/named' : [ 'error' ],
    'import/default' : [ 'error' ],
    'import/namespace' : [ 'error' ],
    'import/export' : [ 'error' ],
    'import/no-named-as-default' : [ 'error' ],
    'import/no-named-as-default-member' : [ 'error' ],
    'import/no-extraneous-dependencies' : [ 'warn' ],
    'import/no-mutable-exports' : [ 'warn' ],
    'import/newline-after-import' : [ 'error' ],
  },
};
