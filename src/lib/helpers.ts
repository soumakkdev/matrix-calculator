export function generateMatrix(rows: number, cols: number, op: 'add' | 'multiply') {
	const rowsArr = []
	for (let i = 0; i < rows; i++) {
		const colsArr = []
		for (let j = 0; j < cols; j++) {
			if (op === 'add') {
				colsArr.push(i + j)
			} else if (op === 'multiply') {
				colsArr.push(i * j)
			}
		}
		rowsArr.push(colsArr)
	}
	return rowsArr
}

export function performMatrixCalculation(matrixA: number[][], matrixB: number[][], rows: number, cols: number, op: 'add' | 'multiply' | 'subtract') {
	const rowsArr = []
	for (let i = 0; i < rows; i++) {
		const colsArr = []
		for (let j = 0; j < cols; j++) {
			const itemA = matrixA[i][j]
			const itemB = matrixB[i][j]

			if (op === 'add') {
				colsArr.push(itemA + itemB)
			} else if (op === 'multiply') {
				colsArr.push(itemA * itemB)
			} else if (op === 'subtract') {
				colsArr.push(itemA - itemB)
			}
		}
		rowsArr.push(colsArr)
	}
	return rowsArr
}
