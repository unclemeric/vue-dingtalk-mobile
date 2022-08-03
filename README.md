# hwagain-dingalk-oa-approval

oa 审核审批应用

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### project dependence

```code
loading -> https://github.com/biigpongsatorn/vue-element-loading
vant -> https://youzan.github.io/vant/#/zh-CN/quickstart
```

### Tip：pretty code setting

- VS Code Extensions List

```plain
 DotENV
 ESLint
 Git History
 Local History
 markdownlint
 One Monokai Theme
 Prettier
 Vetur
 vscode-icons
 Vue 2 Sniooets
```

- VS Code preference settiong as：

```JS
{
  "editor.fontFamily": "Monaco",
  "workbench.colorTheme": "Monokai",
  "workbench.iconTheme": "vscode-icons",
  "typescript.check.npmIsInstalled": false,
  "workbench.startupEditor": "welcomePage",
  "git.autofetch": true,
  // "editor.formatOnSave": true,
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.postcss": "prettier",
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
  "vetur.format.defaultFormatter.ts": "prettier",
  "[javascript]": {
    "editor.formatOnSave": true
  },
  "[css]": {
    "editor.formatOnSave": true
  },
  "[scss]": {
    "editor.formatOnSave": true
  },
  "[vue]": {
    "editor.formatOnSave": true
  },
  "window.zoomLevel": 0, // 调整窗口的缩放级别
  "editor.tabSize": 2, //制表符符号eslint
  "editor.formatOnSave": true, //每次保存自动格式化
  "eslint.autoFixOnSave": true, // 每次保存的时候将代码按eslint格式进行修复
  "prettier.eslintIntegration": true, //让prettier使用eslint的代码格式进行校验
  "prettier.semi": false, //去掉代码结尾的分号
  "prettier.singleQuote": true, //使用带引号替代双引号
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false, //让函数(名)和后面的括号之间加个空格
  "vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned" //属性强制折行对齐
    }
  },
  "prettier.tabWidth": 2,
  "prettier.printWidth": 120,
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.wordWrap": "on",
    "editor.renderWhitespace": "all",
    "editor.acceptSuggestionOnEnter": "off"
  }
}

```

- add `.prettierrc` file

```JS
{
  "printWidth": 120,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "requirePragma": false,
  "proseWrap": "preserve",
  "autoFixOnSave": true,
  "eslintIntegration": true
}
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
