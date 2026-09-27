"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* ============ NAV DATA ============ */
const loanTypes = [
  { name: "Personal Loan", href: "/loans/personal" },
  { name: "Instant Loan", href: "/loans/instant" },
  { name: "Business Loan", href: "/loans/business" },
  { name: "Two-Wheeler Loan", href: "/loans/two-wheeler" },
  { name: "Car Loan", href: "/loans/car" },
  { name: "Marriage Loan", href: "/loans/marriage" },
  { name: "Travel Loan", href: "/loans/travel" },
  { name: "Medical Loan", href: "/loans/medical" },
  { name: "Education Loan", href: "/loans/education" },
  { name: "Home Loan", href: "/loans/home" },
  { name: "Gold Loan", href: "/loans/gold" },
];

const resources = [
  { name: "Privacy Policy", href: "/Privacy-Policy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Bheem Score", href: "/bheem-score" },
  { name: "Bheem Calculator", href: "/calculators" },
  { name: "Quick Loans", href: "/quick-loans" },
  { name: "Bheem Games", href: "/games" },
  { name: "Bheem Card", href: "/card" },
  { name: "Gold Rate Today", href: "/gold-rate" },
  { name: "Our Business Partners", href: "/partners" },
  { name: "Statutory Disclosure", href: "/statutory-disclosure" },
  { name: "Grievance Redressal", href: "/grievance" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/Contact" },
  { name: "Features", href: "/features" },
  { name: "BheemLoan App", href: "/app" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Sitemap", href: "/sitemap" },
  { name: "Press Release", href: "/press" },
  { name: "Newsroom", href: "/newsroom" },
  { name: "FAQ", href: "/faq" },
];

const socials = [
  { label: "X", href: "https://twitter.com/bheemloan", title: "Twitter" },
  {
    label: "in",
    href: "https://linkedin.com/company/bheemloan",
    title: "LinkedIn",
  },
  { label: "f", href: "https://facebook.com/bheemloan", title: "Facebook" },
  { label: "ig", href: "https://instagram.com/bheemloan", title: "Instagram" },
  { label: "yt", href: "https://youtube.com/@bheemloan", title: "YouTube" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#020d20] text-gray-300 pt-12 pb-6 border-t border-gray-800 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* ============ Column 1: Brand Info & Socials ============ */}
        <div className="space-y-4">
          <Link href="/" className="inline-block text-2xl font-bold">
            <span className="text-white">Bheem</span>
            <span className="text-sky-400">Loan</span>
          </Link>
          <p className="text-xs text-gray-400 leading-relaxed">
            With the highest loan approval rate in the industry, BheemLoan
            offers a solution to each of your financial nuance at your
            fingertip.
          </p>

          {/* Social Icons */}
          <div className="flex gap-2">
            {socials.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.title}
                title={s.title}
                className="w-7 h-7 bg-white text-black font-bold flex items-center justify-center rounded text-xs cursor-pointer hover:bg-sky-400 hover:text-white transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Badges */}
          <div className="flex gap-2 pt-2 flex-wrap">
            {["100% SECURE", "TRUSTED BY MILLIONS", "AICPA SOC"].map(
              (badge) => (
                <div
                  key={badge}
                  className="bg-white text-black px-2 py-1 text-[10px] rounded font-bold text-center"
                >
                  {badge}
                </div>
              ),
            )}
          </div>
          <p className="text-[11px] text-gray-500">
            An ISO 27001:2022 certified company.
          </p>
        </div>

        {/* ============ Column 2: Loan Types ============ */}
        <FooterColumn
          title="Loan Types"
          items={loanTypes}
          pathname={pathname}
        />

        {/* ============ Column 3: Resources ============ */}
        <FooterColumn title="Resources" items={resources} pathname={pathname} />

        {/* ============ Column 4: Company ============ */}
        <FooterColumn title="Company" items={company} pathname={pathname} />

        {/* ============ Column 5: Address & Widgets ============ */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-base mb-1 border-b-2 border-sky-500 inline-block pb-1">
            Address
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            No: 1187, Bhagwati, 5th main, 21st Cross Rd, 7th Sector, HSR Layout,
            Bengaluru, Karnataka 560102
          </p>

          <div>
            <h4 className="text-white font-semibold text-xs">Reach Us</h4>
            <a
              href="mailto:info@bheemloan.com"
              className="text-xs text-sky-400 hover:underline"
            >
              info@bheemloan.com
            </a>
          </div>

          {/* Side Banner Cards */}
          <div className="space-y-2 pt-2">
            <Link
              href="/credit-score"
              className="bg-white text-black p-2 rounded-lg flex items-center justify-between cursor-pointer hover:opacity-90 transition"
            >
              <span className="text-[11px] font-bold uppercase">
                Check Your{" "}
                <span className="text-sky-600">Free Credit Score</span>
              </span>
              <div className="w-8 h-4 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-t-full" />
            </Link>

            <Link
              href="/gold-rate"
              className="bg-white text-black p-2 rounded-lg flex items-center justify-between cursor-pointer hover:opacity-90 transition"
            >
              <span className="text-xs font-bold uppercase text-gray-800">
                Gold Rate Today
              </span>
              <span className="text-lg">🪙</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ============ Bottom Copyright Strip ============ */}
      <div className="mt-12 pt-4 border-t border-gray-800/80 text-center text-xs text-gray-500">
        CIN No: U74300KA2019PTC127853 | © {new Date().getFullYear()} BheemLoan
        Services Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ============================================================
   REUSABLE FOOTER COLUMN
============================================================ */
function FooterColumn({
  title,
  items,
  pathname,
}: {
  title: string;
  items: { name: string; href: string }[];
  pathname: string;
}) {
  return (
    <div>
      <h3 className="text-white font-semibold text-base mb-3 border-b-2 border-sky-500 inline-block pb-1">
        {title}
      </h3>
      <ul className="space-y-2 text-xs text-gray-400">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`hover:text-sky-400 transition-colors ${
                  isActive ? "text-sky-400 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
