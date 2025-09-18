export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background-alt to-background flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-8 h-8 border-4 border-accent-500/20 border-t-accent-500 rounded-full animate-spin"></div>
        <p className="text-text-secondary text-sm">Loading...</p>
      </div>
    </div>
  )
}
