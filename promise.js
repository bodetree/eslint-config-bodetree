module.exports = {
  plugins : [ 'promise' ],
  rules : {
    // eslint-plugin-promise
    'promise/catch-or-return' : [ 'warn', { allowThen : true } ],
    'promise/param-names' : [ 'warn' ],
    'promise/no-native' : [ 'error' ],
  }
};
