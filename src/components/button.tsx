'use client'
import { cn } from '@/lib/utils'
import * as React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
	return (
		<button
			className={cn(
				'h-10 px-5 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 disabled:pointer-events-none disabled:opacity-50 bg-sky-500 text-white hover:bg-sky/90',
				className
			)}
			ref={ref}
			{...props}
		/>
	)
})
Button.displayName = 'Button'

export { Button }
