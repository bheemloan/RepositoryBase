"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // 👈 Default Product accordion closed rakhne ke liye false state
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#031530] text-white px-6 py-3 border-b border-gray-800 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center text-2xl font-bold tracking-wide"
        >
          <span className="text-white">Bheem</span>
          <span className="text-sky-400">Loan</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-sky-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-sky-400 transition-colors">
            About Us
          </Link>

          {/* Desktop Product Dropdown (Hover based) */}
          <div className="relative group cursor-pointer py-1">
            <div className="flex items-center gap-1 hover:text-sky-400 transition-colors">
              <span>Product</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
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

            <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-[#031530] border border-gray-800 rounded-xl shadow-2xl py-2 z-50">
              <Link
                href="/products/personal-loan"
                className="block px-4 py-2 text-xs text-gray-200 hover:bg-sky-500/10 hover:text-sky-400 transition-colors"
              >
                Personal Loan
              </Link>
              <Link
                href="/products/business-loan"
                className="block px-4 py-2 text-xs text-gray-200 hover:bg-sky-500/10 hover:text-sky-400 transition-colors"
              >
                Business Loan
              </Link>
              <Link
                href="/products/home-loan"
                className="block px-4 py-2 text-xs text-gray-200 hover:bg-sky-500/10 hover:text-sky-400 transition-colors"
              >
                Home Loan
              </Link>
              <Link
                href="/products/gold-loan"
                className="block px-4 py-2 text-xs text-gray-200 hover:bg-sky-500/10 hover:text-sky-400 transition-colors"
              >
                Gold Loan
              </Link>
            </div>
          </div>

          <Link href="/#" className="hover:text-sky-400 transition-colors">
            Smart Link
          </Link>
          <Link href="/blog" className="hover:text-sky-400 transition-colors">
            Blog
          </Link>
          <Link
            href="/Contact"
            className="hover:text-sky-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/credit-score"
            className="hidden lg:flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 rounded-md transition-all"
          >
            <div className="w-6 h-3 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-t-full" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Free Credit Score
            </span>
          </Link>

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

        {/* Mobile Hamburger Icon Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 pt-2 border-t border-gray-800 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium px-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-sky-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-sky-400 transition-colors"
            >
              About Us
            </Link>

            {/* Mobile Product Accordion (Default Closed) */}
            <div className="space-y-1">
              <button
                onClick={() => setIsProductOpen(!isProductOpen)}
                className="flex items-center justify-between w-full text-left hover:text-sky-400 transition-colors focus:outline-none py-1"
              >
                <span>Product</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProductOpen ? "rotate-180" : ""
                  }`}
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
              </button>

              {/* Only Opens when clicked */}
              {isProductOpen && (
                <div className="flex flex-col space-y-2 pl-4 py-2 border-l border-sky-500/30 text-xs text-gray-300">
                  <Link
                    href="/products/personal-loan"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-sky-400 transition-colors"
                  >
                    Personal Loan
                  </Link>
                  <Link
                    href="/products/business-loan"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-sky-400 transition-colors"
                  >
                    Business Loan
                  </Link>
                  <Link
                    href="/products/home-loan"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-sky-400 transition-colors"
                  >
                    Home Loan
                  </Link>
                  <Link
                    href="/products/gold-loan"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-sky-400 transition-colors"
                  >
                    Gold Loan
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-sky-400 transition-colors"
            >
              Smart Link
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-sky-400 transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* Mobile Action Buttons */}
          <div className="pt-2 flex flex-col gap-3 px-2">
            <Link
              href="/credit-score"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-2 rounded-md transition-all text-xs font-bold"
            >
              <div className="w-6 h-3 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-t-full" />
              <span>FREE CREDIT SCORE</span>
            </Link>

            <button className="flex items-center justify-center gap-2 border border-white/40 hover:border-white px-3 py-2 rounded-lg text-sm font-medium transition-all">
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
        </div>
      )}
    </nav>
  );
}
