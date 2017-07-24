const TAB_WIDTH = 2;

module.exports = {
  rules : {
    'react/jsx-boolean-value' : [ 'error', 'always' ],
    'react/jsx-closing-bracket-location' : [ 'error' ],
    'react/jsx-curly-spacing' : [ 'error', 'never' ],
    'react/jsx-equals-spacing' : [ 'error', 'never' ],
    'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
    'react/jsx-handler-names' : [ 'error' ],
    'react/jsx-indent' : [ 'error', TAB_WIDTH ],
    'react/jsx-indent-props' : [ 'error', TAB_WIDTH ],
    'react/jsx-max-props-per-line' : [ 'error', { maximum : 3 } ],
    'react/jsx-tag-spacing' : [ 'error', { beforeSelfClosing : 'always', closingSlash : 'never', afterOpening : 'never' } ],
    'react/jsx-wrap-multilines' : [ 'error' ],
  },
};
