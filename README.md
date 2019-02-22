# frominto

[![Build Status](https://travis-ci.org/petja/frominto.svg?branch=master)](https://travis-ci.org/petja/frominto) ![npm](https://img.shields.io/npm/v/frominto.svg)

Finnish language is hard. We come from "Mäntyharju**lta**" or "Hiekkaharju**sta**".
We spend our time "Lahde**ssa**" or "Kesälahde**lla**". This library tries to solve the difficulties of the conjugations!

## Usage

```javascript
import frominto from 'frominto'

frominto('Helsinki')

// Would return:

{
 "from": "Helsingistä",
 "in": "Helsingissä",
 "to": "Helsinkiin",
 "via": "Helsingin"
}
```

## Contributions

Contributions are welcome and greatly appreciated :relaxed:

1. Write a test case in [`test/index.js`](test/index.js)
2. Write a rule in [`index.ts`]() in the appropriate line
3. Make the pull request! :muscle:
