'use client'

import React, { useState } from 'react'

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-700 mb-1">
          Email or Phone
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-400 rounded-md px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[#0a66c2] focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-gray-400 rounded-md px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[#0a66c2] focus:border-transparent"
        />
        <span className="inline-block mt-2 text-sm font-semibold text-[#0a66c2] cursor-pointer hover:underline">
          Forgot password?
        </span>
      </div>

      <button
        type="submit"
        className="w-full bg-[#0a66c2] hover:bg-[#004182] text-white font-semibold py-2.5 rounded-full transition-colors text-base"
      >
        Sign in
      </button>
    </form>
  )
}