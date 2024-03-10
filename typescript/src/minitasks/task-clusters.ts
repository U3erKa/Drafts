/* 
Наприклад:
[1, 2, 3, 4, 5], N=1 => [[1], [2], [3], [4], [5]]
[1, 2, 3, 4, 5], N=2 => [[1, 2], [3, 4], [5]]
[1, 2, 3, 4, 5], N=3 => [[1, 2, 3], [4, 5]]
*/

export const clusterize = <T>(arr: T[], clusterLength = 1): T[][] => {
  if (clusterLength < 1) clusterLength = 1

  const array = arr.slice()
  const result: T[][] = []

  while (array.length) {
    result.push(array.splice(0, clusterLength))
  }

  return result
}

const array = [1, 2, 3, 4, 5]

console.log(clusterize(array, 0)) // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]
console.log(clusterize(array, 1)) // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]
console.log(clusterize(array, 2)) // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
console.log(clusterize(array, 3)) // [ [ 1, 2, 3 ], [ 4, 5 ] ]
