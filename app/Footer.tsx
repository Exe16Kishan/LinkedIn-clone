import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-4 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold text-gray-400">in</span>
          <select className="bg-transparent text-xs text-gray-500 focus:outline-none">
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span className="cursor-pointer hover:underline">User Agreement</span>
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">Community Guidelines</span>
          <span className="cursor-pointer hover:underline">Cookie Policy</span>
          <span className="cursor-pointer hover:underline">Copyright Policy</span>
          <span className="cursor-pointer hover:underline">Send Feedback</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  )
}