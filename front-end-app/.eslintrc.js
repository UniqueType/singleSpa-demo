// ESLint的用途
// 1、审查代码是否符合编码规范和统一的代码风格；
// 2、审查代码是否存在语法错误； 中文网地址 http://eslint.cn/
// 3、验证规则是写在 .eslintrc 文件中的 rules 下面的，配置一条验证规则，这么写规则名，值可以是以下几种:
// 1)、off 或 0：表示不验证规则。
// 2)、warn 或 1：表示验证规则，当不满足时，给警告。
// 3)、error 或 2 ：表示验证规则，不满足时报错。
// 4)、如果规则有参数，则这么写
// 5)、规则名: [值, 参数1, 参数2...] 如"indent": ["error", 2]
// You may use special comments to disable some warnings.
// Use // eslint-disable-next-line to ignore the next line.
// Use /* eslint-disable */ to ignore all warnings in a file.
// Use /* eslint no-var: "off" */ to ignore current warnings in a file.
module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // // allow debugger during development
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

        // Custom rule add or edit by hujunchao<hujunchao@sinosoft.com.cn>
        'no-console': 'off',
        "indent": [2, 4],
        'quotes': [2, 'single'], // js必须使用单引号
        "spaced-comment": ["error", "always", { "markers": ["/"] }],
        "no-multi-spaces": 1, // 不能有多余的空格
        "no-mixed-spaces-and-tabs": [2, false],
        "semi": [2, "always"], // 语句强制分号结尾
        "max-len": ["warn", 20000],
        "no-var": 2, // 禁用var，用let和const代替
        "no-new-object": 2,
        "import/no-named-default": 0,
        "import/first": 0,
        "import/no-webpack-loader-syntax": 0,
        "vue/no-parsing-error": 0,
        "vue/valid-v-bind": 0,
        'no-lonely-if': 2, // // 禁止else语句内只有if语句
        'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
        'no-trailing-spaces': 2, // 一行结束后面不要有空格
        'object-curly-spacing': [2, 'always', { // 大括号内是否允许不必要的空格 always始终允许；never始终不允许
            'objectsInObjects': false,
            'arraysInObjects': false
        }],
        'arrow-spacing': 2, // =>的前/后括号
        'array-bracket-spacing': [2, 'always'], // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        'operator-linebreak': [2, 'before'], // 换行时运算符在行尾还是行首
        'space-before-function-paren': [2, 'never'], // 函数定义时括号前面要不要有空格
        'space-in-parens': [2, 'never'], // 小括号里面要不要有空格
        'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }], // 对象字面量中冒号的前后空格
        'comma-style': [2, 'last'],  // 逗号跟在结尾
        'comma-spacing': [2, { 'before': false, 'after': true }],   // 逗号后有空格，前没有空格
        'space-unary-ops': [1, { 'words': true, 'nonwords': true }], // 一元运算符的前/后要不要加空格
        'no-unused-vars': [2], // 声明了变量但是没有使用检测
        "no-alert": 0, // 禁止使用alert confirm prompt
        "no-const-assign": 2, // 禁止修改const声明的变量
        "no-constant-condition": 2, // 禁止在条件中使用常量表达式 if(true) if(1)
        "no-dupe-keys": 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-dupe-args": 2, // 函数参数不能重复
        "no-duplicate-case": 2, // switch中的case标签不能重复
        "no-else-return": 2, // 如果if语句里面有return,后面不能跟else语句
        "no-new-func": 1,//禁止使用new Function
        "no-new-object": 2,// 禁止使用new Object()
        "no-new-wrappers": 2, // 禁止使用new创建包装实例，new String new Boolean new Number
        "no-floating-decimal": 2, // 禁止省略浮点数中的0 .5 3.
        "no-func-assign": 2, // 禁止重复的函数声明
        "no-plusplus": 0, // 禁止使用++，--
        "no-extra-semi": 2, // 禁止多余的冒号
        "no-irregular-whitespace": 2,//不能有不规则的空格
        "no-empty": 2, // 块语句中的内容不能为空
        "no-lonely-if": 2, // 禁止else语句内只有if语句
        "no-sparse-arrays": 2, // 禁止稀疏数组， [1,,2]
        "no-undef": 1, // 不能有未定义的变量
        "no-redeclare": 2, // 禁止重复声明变量
        "no-return-assign": 1, // return 语句中不能有赋值表达式
        "no-shadow": 0, // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
        "no-unused-vars": [2, { "vars": "all", "args": "after-used" }],//不能有声明后未被使用的变量或参数
        "no-unexpected-multiline": 2, // 避免多行表达式
        "arrow-parens": 2,//箭头函数用小括号括起来
        "camelcase": 2, // 强制驼峰法命名
        "curly": [2, "all"],//必须使用 if(){} 中的{}
        "default-case": 2,//switch语句最后必须有default
        "operator-assignment": [0, "always"],//赋值运算符 += -=什么的
        "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
        "no-irregular-whitespace": 2,//不能有不规则的空格
        "no-extra-parens": 0, // 禁止不必要的括号 //(a * b) + c;//报错
        // 禁止在return、throw、continue 和 break语句之后出现不可达代码,,,如下:
        /*
        function foo() {
            return true;
            console.log("done");
        }//错误
        */
        "no-unreachable": 2,
        "no-empty-function": 2, // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
        "no-param-reassign": 0,  // 不允许对 function 的参数进行重新赋值

        "no-self-assign": 2, // 禁止自我赋值
        "no-useless-concat": 2,// 禁止不必要的字符串字面量或模板字面量的连接
        "radix": 2,// 强制在parseInt()使用基数参数
        "prefer-template": 2, // 要求使用模板字面量而非字符串连接
        "no-self-compare": 2, // 禁止自身比较
        "brace-style": [2, "1tbs", { "allowSingleLine": true }], // if while function 后面的{必须与if在同一行，java风格
        "arrow-body-style": 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)'
            ],
            env: {
                mocha: true
            }
        }
    ]
}
