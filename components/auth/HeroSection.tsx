
export default function HeroSection() {
  return (
    <div className="flex-1 max-w-md text-center md:text-left">
      <h2 className="text-3xl md:text-5xl font-light text-gray-800 leading-tight mb-8">
        Welcome to your professional community
      </h2>
      <svg
        viewBox="0 0 400 300"
        className="hidden md:block w-full max-w-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="150" r="140" fill="#eaf1fb" />
        <rect x="120" y="110" width="160" height="110" rx="8" fill="#0a66c2" opacity="0.15" />
        <rect x="140" y="90" width="120" height="90" rx="8" fill="#0a66c2" opacity="0.35" />
        <circle cx="200" cy="130" r="25" fill="#0a66c2" />
        <rect x="165" y="165" width="70" height="35" rx="17" fill="#0a66c2" />
      </svg>
    </div>
  )
}