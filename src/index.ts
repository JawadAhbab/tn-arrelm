import deepEqual from 'fast-deep-equal'

type ArrElmFunc = <T extends readonly any[]>(arr: T, elm: T[number], point?: number) => T[number]
export const arrNextElm: ArrElmFunc = (arr, elm, point = 1) => arrShiftElm(arr, elm, point)
export const arrPrevElm: ArrElmFunc = (arr, elm, point = 1) => arrShiftElm(arr, elm, -point)

const arrShiftElm = <T extends readonly any[]>(arr: T, elm: T[number], point: number) => {
  let nextidx = arr.findIndex(el => deepEqual(el, elm)) + point
  const lastidx = arr.length - 1
  nextidx = nextidx > lastidx ? 0 : nextidx < 0 ? lastidx : nextidx
  return arr[nextidx]
}
