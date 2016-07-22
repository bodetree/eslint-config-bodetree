const TAB_WIDTH = 2;

module.exports = {
  rules : {
    // style
    'brace-style' : [ 'error', '1tbs' ],
    'camelcase' : [ 'error', { properties : 'never' } ],
    'comma-dangle' : [ 'error', 'always-multiline' ],
    'comma-spacing' : [ 'error', { before : false, after : true } ],
    'eol-last' : [ 'error' ],
    'id-blacklist' : [ 'error', 'data' ],
    'indent' : [ 'error', TAB_WIDTH, { SwitchCase : 1 } ],
    'key-spacing' : [ 'error', { beforeColon : true, afterColon : true } ],
    'linebreak-style' : [ 'error', 'unix' ],
    'max-nested-callbacks' : [ 'warn', 3 ],
    'new-cap' : [ 'warn', { capIsNew : false } ],
    'no-lonely-if' : [ 'error' ],
    'no-multiple-empty-lines' : [ 'error' ],
    'no-nested-ternary' : [ 'error' ],
    'quote-props' : [ 'error', 'consistent-as-needed' ],
    'quotes' : [ 'error', 'single', 'avoid-escape' ],
    'semi' : [ 'error', 'always' ],
    'space-before-blocks' : [ 'error', 'always' ],
    'space-before-function-paren' : [ 'error', 'never' ],
    'space-infix-ops' : [ 'error' ],
    'spaced-comment' : [ 'error' ],
  },
};
