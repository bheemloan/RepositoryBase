import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#020d20] text-gray-300 pt-12 pb-6 border-t border-gray-800 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Column 1: Brand Info & Socials */}
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
            {["X", "in", "f", "ig", "yt"].map((social, idx) => (
              <span
                key={idx}
                className="w-7 h-7 bg-white text-black font-bold flex items-center justify-center rounded text-xs cursor-pointer hover:bg-sky-400 hover:text-white transition-colors"
              >
                {social}
              </span>
            ))}
          </div>

          {/* Badges */}
          <div className="flex gap-2 pt-2">
            <div className="bg-white text-black p-1 text-[10px] rounded font-bold text-center">
              100% SECURE
            </div>
            <div className="bg-white text-black p-1 text-[10px] rounded font-bold text-center">
              TRUSTED BY MILLIONS
            </div>
            <div className="bg-white text-black p-1 text-[10px] rounded font-bold text-center">
              AICPA SOC
            </div>
          </div>
          <p className="text-[11px] text-gray-500">
            An ISO 27001:2022 certified company.
          </p>
        </div>

        {/* Column 2: Loan Types */}
        <div>
          <h3 className="text-white font-semibold text-base mb-3 border-b-2 border-sky-500 inline-block pb-1">
            Loan Types
          </h3>
          <ul className="space-y-2 text-xs text-gray-400">
            {[
              "Personal Loan",
              "Instant Loan",
              "Business Loan",
              "Two-Wheeler Loan",
              "Car Loan",
              "Marriage Loan",
              "Travel Loan",
              "Medical Loan",
              "Education Loan",
              "Home Loan",
              "Gold Loan",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-sky-400 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-white font-semibold text-base mb-3 border-b-2 border-sky-500 inline-block pb-1">
            Resources
          </h3>
          <ul className="space-y-2 text-xs text-gray-400">
            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Bheem Score",
              "Bheem Calculator",
              "Quick Loans",
              "Bheem Games",
              "Bheem Card",
              "Gold Rate Today",
              "Our Business Partners",
              "Statutory Disclosure",
              "Grievance Redressal",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-sky-400 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <h3 className="text-white font-semibold text-base mb-3 border-b-2 border-sky-500 inline-block pb-1">
            Company
          </h3>
          <ul className="space-y-2 text-xs text-gray-400">
            {[
              "About Us",
              "Contact Us",
              "Features",
              "BheemLoan App",
              "Testimonials",
              "Blog",
              "Sitemap",
              "Press Release",
              "Newsroom",
              "FAQ",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-sky-400 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Address & Widgets */}
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
            <p className="text-xs text-sky-400">info@bheemloan.com</p>
          </div>

          {/* Side Banner Cards */}
          <div className="space-y-2 pt-2">
            <div className="bg-white text-black p-2 rounded-lg flex items-center justify-between cursor-pointer hover:opacity-90">
              <span className="text-[11px] font-bold uppercase">
                Check Your{" "}
                <span className="text-sky-600">Free Credit Score</span>
              </span>
              <div className="w-8 h-4 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-t-full" />
            </div>
            <div className="bg-white text-black p-2 rounded-lg flex items-center justify-between cursor-pointer hover:opacity-90">
              <span className="text-xs font-bold uppercase text-gray-800">
                Gold Rate Today
              </span>
              <span className="text-lg">🪙</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="mt-12 pt-4 border-t border-gray-800/80 text-center text-xs text-gray-500">
        CIN No: U74300KA2019PTC127853 | © {new Date().getFullYear()} BheemLoan
        Services Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
