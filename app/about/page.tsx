import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Breadcrumb & Header Section */}
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-slate-900 border-b pb-2 mb-6">
          About Us
        </h1>

        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>
            <span className="font-bold text-slate-900">BheemLoan</span> is a
            Digital Fintech Marketplace facilitating loan services for all
            eligible age groups. We make way for quick loan approvals and are
            recognised with one of the highest approval rates in the industry!
          </p>
          <p>
            We work with a vision to break financial barriers and to make loans
            easily accessible to all. Our instant loan app provides borrowers
            easy access to loans for their financial needs from our enlisted
            verified lenders.
          </p>
        </div>
      </section>

      {/* Our Mission & Services */}
      <section className="max-w-6xl mx-auto px-6 py-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h2>
          <p className="text-sm italic text-slate-700 bg-slate-50 p-4 border-l-4 border-sky-500 rounded-r-md">
            &ldquo;Facilitate swift and hassle-free loan approvals, empowering
            individuals and businesses to achieve their financial goals; one
            approval at a time.&rdquo;
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Our Services In Line (What We Do!)
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            BheemLoan is a Digital Fintech Marketplace. Our range of loan
            services caters to various financial purposes, such as medical
            expenses, education, travel, debt consolidation, or starting/growing
            a business.
          </p>
        </div>
      </section>

      {/* Promotional Callout Banner */}
      <div className="max-w-6xl mx-auto px-6 my-6">
        <div className="bg-[#031530] text-white p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          <div>
            <h3 className="text-xl font-bold">
              Get Instant Loan Online Up to{" "}
              <span className="text-yellow-400">₹50 Lakhs</span>
            </h3>
            <p className="text-xs text-gray-300 mt-1 flex gap-4">
              <span>✔ 100% Digital</span>
              <span>✔ Fast Approval</span>
              <span>✔ Flexible</span>
            </p>
          </div>
          <Link
            href="/apply"
            className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-2.5 rounded-lg text-sm transition-all"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Key Numbers / Stats Section */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div className="p-4 border rounded-xl bg-slate-50">
            <p className="text-xs text-gray-500">In the market</p>
            <p className="text-lg font-bold text-slate-900">since 2019</p>
          </div>
          <div className="p-4 border rounded-xl bg-slate-50">
            <p className="text-xs text-gray-500">Daily Active Users</p>
            <p className="text-lg font-bold text-slate-900">2 Million+</p>
          </div>
          <div className="p-4 border rounded-xl bg-slate-50">
            <p className="text-xs text-gray-500">Daily Applications</p>
            <p className="text-lg font-bold text-slate-900">17M+ Growing</p>
          </div>
          <div className="p-4 border rounded-xl bg-slate-50">
            <p className="text-xs text-gray-500">Loan Approvals</p>
            <p className="text-lg font-bold text-slate-900">1 Billion Soft</p>
          </div>
          <div className="p-4 border rounded-xl bg-slate-50 col-span-2 md:col-span-1">
            <p className="text-xs text-gray-500">Approval Rate</p>
            <p className="text-lg font-bold text-slate-900">80% Rate</p>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div className="border-2 border-slate-900 rounded-xl p-4 text-center space-y-2">
            <h4 className="font-bold text-sm">Instant Cash Loan</h4>
            <p className="text-[11px] text-gray-500">
              Access up to ₹15 Lakh in a flash to meet your needs.
            </p>
          </div>
          <div className="border-2 border-slate-900 rounded-xl p-4 text-center space-y-2">
            <h4 className="font-bold text-sm">Affordable Interest</h4>
            <p className="text-[11px] text-gray-500">
              Enjoy pocket-friendly interest rates starting at 11.99% p.a.
            </p>
          </div>
          <div className="border-2 border-slate-900 rounded-xl p-4 text-center space-y-2">
            <h4 className="font-bold text-sm">High Approval Rate</h4>
            <p className="text-[11px] text-gray-500">
              Streamlined process ensuring rapid approval rates.
            </p>
          </div>
          <div className="border-2 border-slate-900 rounded-xl p-4 text-center space-y-2">
            <h4 className="font-bold text-sm">Flexible Repayment</h4>
            <p className="text-[11px] text-gray-500">
              Plans designed to align seamlessly with your capabilities.
            </p>
          </div>
          <div className="border-2 border-slate-900 rounded-xl p-4 text-center space-y-2">
            <h4 className="font-bold text-sm">Safe and Secure</h4>
            <p className="text-[11px] text-gray-500">
              Your financial data is treated with utmost confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* App Download Banner with Online Images */}
      <section className="max-w-6xl mx-auto px-6 my-10">
        <div className="bg-[#031530] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="space-y-3 z-10">
            <h2 className="text-2xl font-bold">
              Download the BheemLoan App Now!
            </h2>
            <p className="text-xs text-gray-300">
              One solution to each of your financial needs at your fingertip.
            </p>
            <div className="flex gap-3 pt-2">
              <button className="bg-white text-slate-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-sky-400 transition-colors">
                Google Play
              </button>
              <button className="bg-white text-slate-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-sky-400 transition-colors">
                App Store
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 z-10">
            {/* Online App Feature Graphic */}
            <img
              src="https://images.unsplash.com/photo-1556742049-0a670f4a4591?w=400&auto=format&fit=crop&q=80"
              alt="BheemLoan App"
              className="w-48 h-32 object-cover rounded-xl border border-white/20 shadow-lg hidden sm:block"
            />

            {/* Online QR Code Image */}
            <div className="bg-white text-slate-900 p-3 rounded-xl text-center">
              <p className="text-xs font-bold mb-1">Scan to Download</p>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://bheemloan.com"
                alt="QR Code"
                className="w-24 h-24 mx-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16 space-y-3">
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          Frequently Asked Questions
        </h2>
        {[
          "What is the maximum & minimum loan limit on BheemLoan?",
          "What is the most user-friendly instant loan app in India?",
          "Are instant loan apps safe?",
          "What is the eligibility to apply for a loan on BheemLoan?",
        ].map((faq, index) => (
          <details
            key={index}
            className="border rounded-lg bg-slate-50 p-3 group cursor-pointer"
          >
            <summary className="text-sm font-semibold text-slate-800 flex justify-between items-center">
              {faq}
              <span className="group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <p className="text-xs text-gray-600 mt-2 pt-2 border-t">
              BheemLoan offers flexible limits from ₹10,000 up to ₹50 Lakhs
              depending on eligibility, income, and credit score with 100%
              digital verification.
            </p>
          </details>
        ))}
      </section>
    </div>
  );
}
