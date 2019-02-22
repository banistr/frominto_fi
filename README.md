# frominto

Finnish language is hard. We come from "Mäntyharju**lta**" or "Hiekkaharju**sta**".
We spend our time "Lahde**ssa**" or "Kesälahde**lla**". This is a library to solve the difficulties with the conjugations!

## Usage

```javascript
import frominto from 'frominto'

frominto('Helsinki')

// Would return:

{
 "from": "Helsingistä",
 "in": "Helsingissä",
 "to": "Helsinkiin"
}

frominto('Kauniainen')
frominto('Tampere')
```

## Contributions

Contributions are welcome and greatly appreciated!

1. Write a test case in [`test/index.js`](test/index.js)
2. Write a rule in [`index.ts`]() in the appropriate line
3. Make the pull request! :muscle:
