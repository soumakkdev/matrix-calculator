'use client'
import React, { useState } from 'react'
import { useMatrix } from './MatrixContext'
import MatrixTable from './MatrixTable'
import { Button } from '@/components/button'
import { performMatrixCalculation } from '@/lib/helpers'

export default function GenerateResult() {
	const { rows, cols, matrixA, matrixB, onMatrixAChange, onMatrixBChange } = useMatrix()

	const [matrixC, setMatrixC] = useState<number[][]>([])

	// if no matrix is generated, don't show anything
	if (!matrixA?.length || !matrixB?.length) {
		return null
	}

	return (
		<div className="space-y-10">
			<div className="flex gap-8">
				<MatrixTable caption="Matrix A" matrix={matrixA} handleChange={onMatrixAChange} />
				<MatrixTable caption="Matrix B" matrix={matrixB} handleChange={onMatrixBChange} />
			</div>

			<div className="flex gap-4 mb-8">
				<Button onClick={() => setMatrixC(performMatrixCalculation(matrixA, matrixB, rows, cols, 'add'))} className="bg-rose-500">
					Add
				</Button>
				<Button onClick={() => setMatrixC(performMatrixCalculation(matrixA, matrixB, rows, cols, 'subtract'))} className="bg-amber-500">
					Subtract
				</Button>
				<Button onClick={() => setMatrixC(performMatrixCalculation(matrixA, matrixB, rows, cols, 'multiply'))} className="bg-emerald-500">
					Multiplication
				</Button>
			</div>

			{matrixC?.length ? <MatrixTable matrix={matrixC} caption="Result" /> : null}
		</div>
	)
}
