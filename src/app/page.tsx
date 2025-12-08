import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoAI Insights',
  description: 'EcoAI Insights offers personalized climate impact assessments and AI-driven sustainability recommendations for small businesses. Our platform combines cutting-edge AI technology with expert analysis to help businesses reduce their environmental footprint efficiently.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoAI Insights</h1>
      <p className="mt-4 text-lg">EcoAI Insights offers personalized climate impact assessments and AI-driven sustainability recommendations for small businesses. Our platform combines cutting-edge AI technology with expert analysis to help businesses reduce their environmental footprint efficiently.</p>
    </main>
  )
}
