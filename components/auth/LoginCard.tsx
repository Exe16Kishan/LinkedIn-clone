'use client'

import LoginForm from './LoginForm'
import GoogleIcon from './GoogleIcon'

interface LoginCardProps {
  onLogin: (email: string, password: string) => void
  onSkip: () => void
}

export default function LoginCard({ onLogin, onSkip }: LoginCardProps) {
  return (
    <div className="w-full max-w-sm">
      <div className="bg-white rounded-lg shadow-[0_0_1px_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.15)] p-6 md:p-8">
        <LoginForm onSubmit={onLogin} />

        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-xs text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <button
          onClick={() => onLogin('', '')}
          className="w-full flex items-center justify-center gap-2 border border-gray-400 rounded-full py-2.5 font-semibold text-gray-700 hover:bg-gray-50 transition-colors text-sm"
        >
          <GoogleIcon />
          Sign in with Google
        </button>

        <button
          onClick={onSkip}
          className="w-full mt-3 border border-[#0a66c2] text-[#0a66c2] font-semibold py-2.5 rounded-full hover:bg-blue-50 transition-colors text-sm"
        >
          Skip login & go to Home →
        </button>

        <p className="text-center text-sm text-gray-600 mt-5">
          New to LinkedIn?{' '}
          <span
            onClick={onSkip}
            className="text-[#0a66c2] font-semibold cursor-pointer hover:underline"
          >
            Join now
          </span>
        </p>
      </div>
    </div>
  )
}