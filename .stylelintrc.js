module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard', // 配置 stylelint 拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-standard-scss', // 配置 stylelint scss 插件
    'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
    'stylelint-config-prettier' // 配置 stylelint 和 prettier 兼容
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.cjs',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
    'node_modules/',
    'dist/',
    'public/',
    'docs/'
  ],
  overrides: [
    // {
    //   files: ['**/*.(scss|css)'],
    //   customSyntax: 'postcss-scss',
    // },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    // "selector-class-pattern": [ // 命名规范 -
    //     "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
    //     {
    //         "message": "Expected class selector to be kebab-case"
    //     }
    // ],
    // "selector-pseudo-class-no-unknown": [
    //   true,
    //   {
    //     ignorePseudoClasses:['export']
    //   }
    // ]
    // "string-quotes":"single", // 单引号
    // "at-rule-empty-line-before": null,
    // "at-rule-no-unknown":null,
    // "at-rule-name-case": "lower",// 指定@规则名的大小写
    // "length-zero-no-unit": true,  // 禁止零长度的单位（可自动修复）
    // "shorthand-property-no-redundant-values": true, // 简写属性
    // "number-leading-zero": "never", // 小数不带0
    // "declaration-block-no-duplicate-properties": true, // 禁止声明快重复属性
    // "no-descending-specificity": true, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。
    // "selector-max-id": 0, // 限制一个选择器中 ID 选择器的数量
    // "max-nesting-depth": 3,
    'scss/at-import-partial-extension': null,
    'scss/dollar-variable-pattern': null, //解决类名不允许下划线
    'scss/double-slash-comment-whitespace-inside': null, // 解决双斜杠注释后要有一个空格
    'selector-class-pattern': null,
    'block-no-empty': null,
    'no-empty-source': null,
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep']
      }
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'no-duplicate-selectors': null,
    'selector-id-pattern': null, //指定id选择器的模式
    'custom-property-pattern': null, //为自定义属性指定模式。
    'no-invalid-double-slash-comments': null, //禁止使用双斜杠注释（关闭）
    // 'property-no-vendor-prefix': ['transform', 'columns'],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'if', 'else', 'include', 'use']
      }
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['line-clamp']
      }
    ],
    indentation: [2],
    'order/properties-order': [
      // 规则顺序
      'position',
      'content',
      'top',
      'right',
      'bottom',
      'left',
      'float',
      'display',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-collapse',
      'margin-top-collapse',
      'margin-right-collapse',
      'margin-bottom-collapse',
      'margin-left-collapse',
      'border',
      'border-radius',
      'outline',
      'outline-offset',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'height',
      'max-width',
      'max-height',
      'min-width',
      'min-height',
      'clip',
      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'osx-font-smoothing',
      'font-style',
      'font-weight',
      'line-height',
      'letter-spacing',
      'word-spacing',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-size-adjust',
      'text-shadow',
      'text-transform',
      'word-break',
      'word-wrap',
      'white-space',
      'vertical-align',
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'pointer-events',
      'opacity',
      'filter',
      'visibility',
      'size',
      'transform',
      'background',
      'background-color',
      'color',
      'clear',
      'cursor',
      'overflow',
      'overflow-x',
      'overflow-y',
      'z-index'
    ]
  }
}
