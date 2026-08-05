import React from 'react'

function AnalyticsCard() {
  return (
     <div className="border-t border-zinc-200 py-2">
        <div className="flex justify-between px-5 py-2 bg-zinc-50 hover: cursor-pointer transition">
          <span className="text-sm text-zinc-600">
            Profile viewers
          </span>

          <span className="font-semibold text-gray-700">
            8
          </span>
        </div>

        <div className="flex justify-between px-5 py-2 bg-zinc-50 hover: cursor-pointer transition">
          <span className="text-sm text-zinc-600">
            Post impressions
          </span>

          <span className="font-semibold text-gray-700">
            1
          </span>
        </div>
      </div>
  )
}

export default AnalyticsCard