<p align="center"><i>Bundle Size - 218 bytes gzipped</i></p>

```ts
import { arrNextElm, arrPrevElm } from 'tn-arrelm'

const arr = ['alpha', 'beta', 'gama']
const current = 'beta'
const point = 1

arrNextElm(arr, current, point?) // gama
arrPrevElm(arr, current, point?) // alpha
```
