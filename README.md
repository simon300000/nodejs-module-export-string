# nodejs module export

`node index.js`



```
[Module: null prototype] { a: 1, default: { a: 1 } }
[Module: null prototype] { default: { a: 1 } }
[Module: null prototype] { a: 2, default: { a: 2 } }
[Module: null prototype] { default: { a: 2 } }
[Module: null prototype] { default: { a: 2 } }
```



Expected:

```
[Module: null prototype] { a: 1, default: { a: 1 } }
[Module: null prototype] { a: 1, default: { a: 1 } }
[Module: null prototype] { a: 2, default: { a: 2 } }
[Module: null prototype] { a: 2, default: { a: 2 } }
[Module: null prototype] { a: 2, default: { a: 2 } }
```

