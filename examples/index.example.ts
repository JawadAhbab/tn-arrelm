import { arrNextElm, arrPrevElm } from '../src/index'

const arr = ['a', 'b', 'c']

console.log(arrNextElm(arr, 'a'))
console.log(arrNextElm(arr, 'b'))
console.log(arrNextElm(arr, 'c'))

console.log(arrPrevElm(arr, 'a'))
console.log(arrPrevElm(arr, 'b'))
console.log(arrPrevElm(arr, 'c'))

type Arr2 = { lorem: number; ipsum: string }[]
const arr2: Arr2 = [
  { lorem: 1, ipsum: 'Jawad' },
  { lorem: 2, ipsum: 'Ahbab' },
  { lorem: 3, ipsum: 'Turna' },
]

const res = arrNextElm(arr2, { lorem: 2, ipsum: 'Ahbab' })
console.log(res)
