'use client'
import { Button } from '@/components/button'
import { Input } from '@/components/Input'
import { useState } from 'react'
import MatrixTable from './MatrixTable'
import { produce } from 'immer'
import { generateMatrix, performMatrixCalculation } from '@/lib/helpers'

export default function MatrixCalculator() {
	const [rows, setRows] = useState(4)
	const [cols, setCols] = useState(4)

	const [matrixA, setMatrixA] = useState<number[][]>([])
	const [matrixB, setMatrixB] = useState<number[][]>([])

	const [matrixC, setMatrixC] = useState<number[][]>([])

	function generateMatrixes() {
		if (rows > 0 && cols > 0) {
			setMatrixA(generateMatrix(rows, cols, 'add'))
			setMatrixB(generateMatrix(rows, cols, 'multiply'))
		}
	}

	return (
		<div className="space-y-10">
			<form
				onSubmit={(e) => {
					e.preventDefault()
					generateMatrixes()
				}}
				className="flex items-center space-x-4"
			>
				<label className="text-sm">Rows</label>
				<Input type="number" min={1} value={rows} onChange={(e) => setRows(parseInt(e.target.value))} />
				<label className="text-sm">Columns</label>
				<Input type="number" min={1} value={cols} onChange={(e) => setCols(parseInt(e.target.value))} />
				<Button>Generate</Button>
			</form>

			{matrixA?.length && matrixB?.length ? (
				<div className="space-y-10">
					<div className="flex gap-8">
						<MatrixTable
							caption="Matrix A"
							matrix={matrixA}
							handleChange={(value, rowIdx, colIdx) => {
								setMatrixA(
									produce((draft) => {
										draft[rowIdx][colIdx] = value
									})
								)
							}}
						/>
						<MatrixTable
							caption="Matrix B"
							matrix={matrixB}
							handleChange={(value, rowIdx, colIdx) => {
								setMatrixB(
									produce((draft) => {
										draft[rowIdx][colIdx] = value
									})
								)
							}}
						/>
					</div>

					<div className="flex gap-4 mb-8">
						<Button onClick={() => setMatrixC(performMatrixCalculation(matrixA, matrixB, rows, cols, 'add'))} className="bg-rose-500">
							Add
						</Button>
						<Button
							onClick={() => setMatrixC(performMatrixCalculation(matrixA, matrixB, rows, cols, 'subtract'))}
							className="bg-amber-500"
						>
							Subtract
						</Button>
						<Button
							onClick={() => setMatrixC(performMatrixCalculation(matrixA, matrixB, rows, cols, 'multiply'))}
							className="bg-emerald-500"
						>
							Multiplication
						</Button>
					</div>

					{matrixC?.length ? <MatrixTable matrix={matrixC} caption="Result" /> : null}
				</div>
			) : null}
		</div>
	)
}
