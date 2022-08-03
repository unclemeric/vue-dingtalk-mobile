module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-extra-semi': 0,
    'no-undef': 'off',
    'no-eval': 0,
    'one-var': 0, // 连续声明
    'handle-callback-err': 0,
    'space-before-function-paren': [0, 'always'],
    'prefer-promise-reject-errors': 0,
    'no-return-assign': 0, // return 语句中不能有赋值表达式
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
