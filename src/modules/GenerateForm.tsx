'use client'
import { Button } from '@/components/button'
import { Input } from '@/components/Input'
import React, { useState } from 'react'
import { useMatrix } from './MatrixContext'

export default function GenerateForm() {
	const { rows, setRows, cols, setCols, generateMatrixes } = useMatrix()
	const [error, setError] = useState('')
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				if (rows > 0 && cols > 0) {
					generateMatrixes()
					setError('')
				} else {
					setError('Please provide a valid number')
				}
			}}
			className="flex items-center space-x-4"
		>
			<label className="text-sm">Rows</label>
			<Input type="number" min={1} value={rows} onChange={(e) => setRows(parseInt(e.target.value))} />
			<label className="text-sm">Columns</label>
			<Input type="number" min={1} value={cols} onChange={(e) => setCols(parseInt(e.target.value))} />
			<Button>Generate</Button>

			{error ? <p className="text-red-500 text-sm italic">{error}</p> : null}
		</form>
	)
}
