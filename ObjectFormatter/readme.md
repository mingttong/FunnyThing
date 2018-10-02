# 对象格式化助手

以Promise方式调用  

从前格式化对象：
```javascript
let obj = {
    name: 'mingttong',
    age: 18,
};
obj = formatName(obj);
obj = formatAge(obj);
```

现在格式化对象：
```javascript
new ObjectFormatter({
    name: 'mingttong',
    age: 18,
})
    .then(formatName)
    .then(formatAge)
    .then();
```
