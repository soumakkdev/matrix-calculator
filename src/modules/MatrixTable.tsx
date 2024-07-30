'use client'
import React from 'react'

export default function MatrixTable({
	caption,
	matrix,
	handleChange,
}: {
	caption: string
	matrix: number[][]
	handleChange?: (value: number, rowIdx: number, colIdx: number) => void
}) {
	return (
		<table>
			<caption className="mb-1 text-sm">{caption}</caption>
			<tbody>
				{matrix?.map((rows, rowIdx) => {
					return (
						<tr key={rowIdx}>
							{rows?.map((col, colIdx) => {
								return (
									<td key={colIdx} className="border">
										{handleChange ? (
											<input
												value={col}
												min={0}
												type="number"
												onChange={(e) => {
													handleChange(parseInt(e.target.value), rowIdx, colIdx)
												}}
												className="flex w-12 border-0 p-1"
											/>
										) : (
											<div className="py-2 px-3">{col}</div>
										)}
									</td>
								)
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
