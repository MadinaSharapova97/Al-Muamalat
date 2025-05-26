import { DotWave } from '@uiball/loaders'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <DotWave size={60} speed={0.9} color="#009688" />
    </div>
  )
}
