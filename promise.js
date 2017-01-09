module.exports = {
  plugins : [ 'promise' ],
  rules : {
    // eslint-plugin-promise
    'promise/catch-or-return' : [ 'warn', { terminationMethod : [ 'catch', 'asCallback', 'finally' ] } ],
    'promise/param-names' : [ 'error' ],

    'promise/always-return' : [ 'off' ],
    'promise/no-native' : [ 'off' ],
    'promise/prefer-await-to-callbacks' : [ 'off' ],
    'promise/prefer-await-to-then' : [ 'off' ],
  }
};
