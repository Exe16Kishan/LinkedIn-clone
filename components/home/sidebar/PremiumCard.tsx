import React from 'react'

function PremiumCard() {
  return (
    <div className="border-t border-zinc-200 bg-zinc-50 px-5 py-3 hover: cursor-pointer transition">
        <p className="text-xs text-zinc-500">
          Unlock exclusive tools & insights
        </p>

        <div className="mt-2 flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-yellow-500"></div>

          <span className="text-sm font-medium text-zinc-800">
            Try Premium for ₹0
          </span>
        </div>
      </div>
  )
}

export default PremiumCard