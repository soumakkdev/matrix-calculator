'use client'

import { generateMatrix } from '@/lib/helpers'
import { produce } from 'immer'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

interface IMatrixContext {
	rows: number
	setRows: Dispatch<SetStateAction<number>>
	cols: number
	setCols: Dispatch<SetStateAction<number>>
	generateMatrixes: () => void
	matrixA: number[][]
	onMatrixAChange: (value: number, rowIdx: number, colIdx: number) => void
	matrixB: number[][]
	onMatrixBChange: (value: number, rowIdx: number, colIdx: number) => void
}

export const MatrixContext = createContext<IMatrixContext>({} as IMatrixContext)

export const MatrixProvider = ({ children }: { children: ReactNode }) => {
	const [rows, setRows] = useState(4)
	const [cols, setCols] = useState(4)

	const [matrixA, setMatrixA] = useState<number[][]>([])
	const [matrixB, setMatrixB] = useState<number[][]>([])

	function generateMatrixes() {
		if (rows > 0 && cols > 0) {
			// generate the matrix based on the rows, cols and operation
			setMatrixA(generateMatrix(rows, cols, 'add'))
			setMatrixB(generateMatrix(rows, cols, 'multiply'))
		}
	}

	function onMatrixAChange(value: number, rowIdx: number, colIdx: number) {
		setMatrixA(
			produce((draft) => {
				draft[rowIdx][colIdx] = value
			})
		)
	}

	function onMatrixBChange(value: number, rowIdx: number, colIdx: number) {
		setMatrixB(
			produce((draft) => {
				draft[rowIdx][colIdx] = value
			})
		)
	}

	const contextValues = {
		rows,
		setRows,
		cols,
		setCols,
		generateMatrixes,
		matrixA,
		matrixB,
		onMatrixAChange,
		onMatrixBChange,
	}

	return <MatrixContext.Provider value={contextValues}>{children}</MatrixContext.Provider>
}

export const useMatrix = () => {
	return useContext(MatrixContext)
}
