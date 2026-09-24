import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#031530] text-white px-6 py-3 flex items-center justify-between border-b border-gray-800">
      {/* Brand Logo / Name */}
      <Link
        href="/"
        className="flex items-center gap-2 text-2xl font-bold tracking-wide"
      >
        <span className="text-white">Bheem</span>
        <span className="text-sky-400">Loan</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {/* Dropdown: Loans */}
        <div className="relative group cursor-pointer flex items-center gap-1 hover:text-sky-400 transition-colors">
          <span>Loans</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Dropdown: Credit Card */}
        <div className="relative group cursor-pointer flex items-center gap-1 hover:text-sky-400 transition-colors">
          <span>Credit Card</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <Link href="/about" className="hover:text-sky-400 transition-colors">
          About Us
        </Link>
        <Link href="/blog" className="hover:text-sky-400 transition-colors">
          Blog
        </Link>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-6">
        {/* Free Credit Score Badge */}
        <Link
          href="/credit-score"
          className="hidden lg:flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 rounded-md transition-all"
        >
          <div className="w-6 h-3 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-t-full" />
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            Free Credit Score
          </span>
        </Link>

        {/* Download App Button */}
        <button className="flex items-center gap-2 border border-white/40 hover:border-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 18l-6-6h4V4h4v8h4l-6 6zM4 20h16"
            />
          </svg>
          <span>Download App</span>
        </button>
      </div>
    </nav>
  );
}
