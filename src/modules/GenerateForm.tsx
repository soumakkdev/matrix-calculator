'use client'
import { Button } from '@/components/button'
import { Input } from '@/components/Input'
import React from 'react'
import { useMatrix } from './MatrixContext'

export default function GenerateForm() {
	const { rows, setRows, cols, setCols, generateMatrixes } = useMatrix()
	return (
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
	)
}
