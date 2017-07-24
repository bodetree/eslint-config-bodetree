module.exports = {
  plugins : [ 'promise' ],
  rules : {
    // eslint-plugin-promise
    'promise/catch-or-return' : [ 'warn', { terminationMethod : [ 'catch', 'nodeify' ] } ],
    'promise/param-names' : [ 'error' ],
    'promise/no-callback-in-promise' : [ 'warn' ],
    'promise/no-nesting' : [ 'warn' ],
    'promise/no-promise-in-callback' : [ 'warn' ],

    'promise/avoid-new' : [ 'off' ],
    'promise/always-return' : [ 'off' ],
    'promise/no-native' : [ 'off' ],
    'promise/no-return-wrap' : [ 'off' ],
    'promise/prefer-await-to-callbacks' : [ 'off' ],
    'promise/prefer-await-to-then' : [ 'off' ],
  }
};
