'use client'

interface NavbarProps {
  onJoinClick: () => void
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  return (
    <header className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
      <h1 className="text-2xl md:text-3xl font-bold text-[#0a66c2] tracking-tight">
        in
      </h1>
      <button
        onClick={onJoinClick}
        className="text-sm md:text-base text-gray-600 border border-gray-400 rounded-full px-5 py-1.5 font-semibold hover:border-gray-900 hover:text-gray-900 transition-colors"
      >
        Join now
      </button>
    </header>
  )
}