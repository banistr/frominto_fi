# frominto

[![Build Status](https://travis-ci.org/petja/frominto.svg?branch=master)](https://travis-ci.org/petja/frominto) [![npm](https://img.shields.io/npm/v/frominto.svg)](https://www.npmjs.com/package/frominto)

🇫🇮 Finnish language is hard. We come from "Mäntyharju**lta**" or "Hiekkaharju**sta**".
We spend our time "Lahde**ssa**" or "Kesälahde**lla**". This library features more than 90 conjugation rules (elative, inessive, illative and genitive cases), 132 automated tests and pinch of awesomeness ✨

This project is based on the [work of Antti Kosonen](https://github.com/banistr/frominto_fi) which haven't updated since 2016. Many new features have been added in this fork!

## Usage

```typescript
import { strictEqual } from 'assert/strict'
import { From, In, To, Via, frominto } from 'frominto'

// Method 1
strictEqual(From('Helsinki'), 'Helsingistä')
strictEqual(In('Helsinki'), 'Helsingissä')
strictEqual(To('Helsinki'), 'Helsinkiin')
strictEqual(Via('Helsinki'), 'Helsingin')

// Method 2
const cityConjugations = frominto('Helsinki')
strictEqual(cityConjugations.from, 'Helsingistä')
strictEqual(cityConjugations.in, 'Helsingissä')
strictEqual(cityConjugations.to, 'Helsinkiin')
strictEqual(cityConjugations.via, 'Helsingin')
```

## Contributions

Contributions are welcome and greatly appreciated ☺️

1. Write a test case in [`test/index.ts`](test/index.ts)
2. Write a rule in [`index.ts`](index.ts) in the appropriate line
3. Make the pull request! 💪
