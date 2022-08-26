# 数据模板定义  

## String  
`'name|min-max': string`
```js 
Mock.mock({
  "string|1-10": "★"
})
```
```json
{
  "string": "★★★★★★★★★"
}
```
`'name|count': string`

```js
Mock.mock({
  "string|3": "★★★"
})
```
```json
{
  "string": "★★★★★★★★★"
}
```
## Number
`'name|+1': number`
```js
Mock.mock({
  "number|+1": 712
})
//Result
{
  "number": 610
}
```
`'name|min-max': number`
```js
Mock.mock({
  "number|1-100": 100
})
//Result
{
  "number": 94
}
```
`'name|min-max.dmin-dmax': number`
```js
Mock.mock({
  "number|1-100.1-10": 1
})
//Result
{
  "number": 24.66675126
}
```

```js
Mock.mock({
  "number|123.1-10": 1
})
//Result
{
  "number": 123.718
}
```
```js
Mock.mock({
  "number|123.3": 1
})
//Result
{
  "number": 123.618
}
```
```js
Mock.mock({
  "number|123.10": 1.123
})
//Result
{
  "number": 123.1231643516
}
```
## Boolean
`'name|1': boolean`
```js
Mock.mock({
  "boolean|1": true
})
//Result
{
  "boolean": true
}
```
`'name|min-max': boolean`
```js
Mock.mock({
  "boolean|1-2": true
})
//Result
{
  "boolean": true
}
```
## Object
`'name|count': object`
```js
Mock.mock({
  "object|2": {
    "310000": "上海市",
    "320000": "江苏省",
    "330000": "浙江省",
    "340000": "安徽省"
  }
})
//Result
{
  "object": {
    "330000": "浙江省",
    "340000": "安徽省"
  }
}
```
`'name|min-max': object`
```js
Mock.mock({
  "object|2-4": {
    "110000": "北京市",
    "120000": "天津市",
    "130000": "河北省",
    "140000": "山西省"
  }
})
//Result
{
  "object": {
    "120000": "天津市",
    "130000": "河北省"
  }
}
```
## Array
`'name|1': array`
```js
Mock.mock({
  "array|1": [
    "AMD",
    "CMD",
    "UMD"
  ]
})
//Result
{
  "array": "CMD"
}
```
`'name|+1': array`
```js
Mock.mock({
  "array|+1": [
    "AMD",
    "CMD",
    "UMD"
  ]
})
//Result
{
  "array": "AMD"
}
```
```js
Mock.mock({
  "array|1-10": [
    {
      "name|+1": [
        "Hello",
        "Mock.js",
        "!"
      ]
    }
  ]
})
//Result
{
  "array": [
    {
      "name": "Hello"
    },
    {
      "name": "Mock.js"
    },
    {
      "name": "!"
    },
    {
      "name": "Hello"
    },
    {
      "name": "Mock.js"
    },
    {
      "name": "!"
    },
    {
      "name": "Hello"
    },
    {
      "name": "Mock.js"
    },
    {
      "name": "!"
    }
  ]
}
```
`'name|min-max': array`
```js
Mock.mock({
  "array|1-10": [
    "Mock.js"
  ]
})
//Result
{
  "array": [
    "Mock.js",
    "Mock.js",
    "Mock.js",
    "Mock.js",
    "Mock.js",
    "Mock.js",
    "Mock.js",
    "Mock.js",
    "Mock.js"
  ]
}
```
```js
Mock.mock({
  "array|1-10": [
    "Hello",
    "Mock.js",
    "!"
  ]
})
//Result
{
  "array": [
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!"
  ]
}
```
`'name|count': array`
```js
Mock.mock({
  "array|3": [
    "Mock.js"
  ]
})
//Result
{
  "array": [
    "Mock.js",
    "Mock.js",
    "Mock.js"
  ]
}
```
```js
Mock.mock({
  "array|3": [
    "Hello",
    "Mock.js",
    "!"
  ]
})
//Result
{
  "array": [
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!"
  ]
}
```
## Function
`'name': function`
```js
Mock.mock({
  'foo': 'Syntax Demo',
  'name': function() {
    return this.foo
  }
})
//Result
{
  "foo": "Syntax Demo",
  "name": "Syntax Demo"
}
```
## RegExp
`'name': regexp`
```js
Mock.mock({
  'regexp': /[a-z][A-Z][0-9]/
})
//Result
{
  "regexp": "bZ3"
}
```
```js
Mock.mock({
  'regexp': /\w\W\s\S\d\D/
})
//Result
{
  "regexp": "I[\fs5)"
}
```
```js
Mock.mock({
  'regexp': /\d{5,10}/
})
//Result
{
  "regexp": "017362532"
}
```
```js
Mock.mock({
  'regexp|3': /\d{5,10}\-/
})
//Result
{
  "regexp": "16835756-6022826096-257625-74436-"
}
```
```js
Mock.mock({
  'regexp|1-5': /\d{5,10}\-/
})
Result
{
  "regexp": "805683237-33694336-9417575-53027-"
}
```
## Path
```js
Mock.mock({
  "foo": "Hello",
  "nested": {
    "a": {
      "b": {
        "c": "Mock.js"
      }
    }
  },
  "absolutePath": "@/foo @/nested/a/b/c"
})
//Result
{
  "foo": "Hello",
  "nested": {
    "a": {
      "b": {
        "c": "Mock.js"
      }
    }
  },
  "absolutePath": "Hello Mock.js"
}
```
```js
Mock.mock({
  "foo": "Hello",
  "nested": {
    "a": {
      "b": {
        "c": "Mock.js"
      }
    }
  },
  "relativePath": {
    "a": {
      "b": {
        "c": "@../../../foo @../../../nested/a/b/c"
      }
    }
  }
})
//Result
{
  "foo": "Hello",
  "nested": {
    "a": {
      "b": {
        "c": "Mock.js"
      }
    }
  },
  "relativePath": {
    "a": {
      "b": {
        "c": "Hello Mock.js"
      }
    }
  }
}
```