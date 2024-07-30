import GenerateForm from '@/modules/GenerateForm'
import GenerateResult from '@/modules/GenerateResult'
import { MatrixProvider } from '@/modules/MatrixContext'

export default function Home() {
	return (
		<main className="max-w-6xl mx-auto py-5">
			<h1 className="text-2xl font-bold mb-5">Matrix Calculator</h1>
			<MatrixProvider>
				<div className="space-y-10">
					<GenerateForm />
					<GenerateResult />
				</div>
			</MatrixProvider>
		</main>
	)
}
