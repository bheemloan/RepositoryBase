"use client";

import Link from "next/link";

export const FinancialSolutions = () => {
  /* ============ SECTION 1: OUR PRODUCTS ============ */
  const products = [
    {
      icon: "👤",
      iconBg: "bg-emerald-50 text-emerald-600",
      title: "Instant Personal Loan",
      desc: "Quick cash for medical, travel, or personal needs up to ₹5 Lakhs.",
      href: "/loans/personal",
    },
    {
      icon: "💼",
      iconBg: "bg-blue-50 text-blue-600",
      title: "Business Expansion Loan",
      desc: "Unsecured collateral-free loans for MSMEs and shopkeepers up to ₹25 Lakhs.",
      href: "/loans/business",
    },
    {
      icon: "🛍️",
      iconBg: "bg-purple-50 text-purple-600",
      title: "Consumer Durable Loan",
      desc: "No Cost EMI options for electronics, appliances and gadgets.",
      href: "/loans/consumer",
    },
    {
      icon: "🩺",
      iconBg: "bg-orange-50 text-orange-600",
      title: "Emergency Credit Line",
      desc: "Revolving credit line, withdraw anytime, pay interest only on utilized amount.",
      href: "/loans/credit-line",
    },
  ];

  /* ============ SECTION 2: HOW IT WORKS ============ */
  const steps = [
    {
      num: "1",
      icon: "📝",
      title: "Enter Details & PAN",
      desc: "Fill a 2-minute digital application form with basic KYC.",
    },
    {
      num: "2",
      icon: "🛡️",
      title: "AI Credit Assessment",
      desc: "Real-time credit score check and eligible amount approval.",
    },
    {
      num: "3",
      icon: "🏦",
      title: "Direct Bank Transfer",
      desc: "Money credited to your bank account within 10 minutes.",
    },
  ];

  /* ============ SECTION 3: WHY CHOOSE US (EXPANDED) ============ */
  const features = [
    {
      icon: "🔒",
      iconBg: "bg-emerald-50 text-emerald-600",
      title: "Zero Hidden Charges",
      desc: "Transparent processing with 100% clear terms. No surprises.",
    },
    {
      icon: "🛡️",
      iconBg: "bg-blue-50 text-blue-600",
      title: "Bank-Grade Security",
      desc: "Your data is protected with 256-bit encryption standards.",
    },
    {
      icon: "📅",
      iconBg: "bg-purple-50 text-purple-600",
      title: "Flexible Repayments",
      desc: "Choose custom EMIs matching your monthly cash flow.",
    },
    {
      icon: "🎧",
      iconBg: "bg-orange-50 text-orange-600",
      title: "24/7 Support",
      desc: "Priority customer support via chat, call, and email.",
    },
    {
      icon: "⚡",
      iconBg: "bg-yellow-50 text-yellow-600",
      title: "10-Min Approval",
      desc: "AI-powered instant approval with direct bank transfer.",
    },
    {
      icon: "📊",
      iconBg: "bg-rose-50 text-rose-600",
      title: "Free Credit Score",
      desc: "Track your CIBIL score monthly with personalised tips.",
    },
  ];

  /* ============ SECTION 4: IMPACT STATS ============ */
  const impacts = [
    { icon: "👥", value: "2,00,000+", label: "Happy Customers" },
    { icon: "🤝", value: "50+", label: "Partner Lenders & Insurers" },
    { icon: "📍", value: "100+", label: "Cities Across India" },
    { icon: "⭐", value: "4.7/5", label: "Average Partner Rating" },
  ];

  return (
    <>
      {/* =========================================================
          SECTION 1: OUR PRODUCTS
      ========================================================= */}
      <section className="bg-white py-14 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest">
              Our Products
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a1535] mt-2">
              Financial Solutions for Every Stage of Life
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-2xl mx-auto">
              Choose from a wide range of loan and insurance products designed
              to meet your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="group bg-white rounded-2xl border border-slate-200 p-5 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center text-2xl mb-4`}
                >
                  {p.icon}
                </div>
                <h3 className="font-bold text-[#0a1535] text-base mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">
                  {p.desc}
                </p>
                <span className="text-xs font-semibold text-emerald-600 group-hover:text-emerald-700 flex items-center gap-1 transition-colors">
                  Know More{" "}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: HOW IT WORKS
      ========================================================= */}
      <section className="bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-50 py-14 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:text-left text-center">
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest">
                How It Works
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a1535] mt-2 mb-3">
                Simple 3-Step Digital Process
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
                Get started in minutes. Our digital process makes it easy, fast
                and hassle-free.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
              {steps.map((s, i) => (
                <div key={i} className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden sm:block absolute top-6 -right-4 text-slate-400 text-xl z-10">
                      →
                    </div>
                  )}
                  <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold shadow-md">
                        {s.num}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-xl">
                        {s.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-[#0a1535] text-sm mb-2">
                      {s.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: WHY CHOOSE US (EXPANDED — 6 features)
      ========================================================= */}
      <section className="bg-white py-14 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a1535] mt-2 mb-2">
              Your Trust, Our Priority
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              We follow best practices to ensure a safe, transparent and
              seamless experience for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-slate-200 p-5 hover:border-emerald-400 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold text-[#0a1535] text-sm mb-2 leading-tight">
                  {f.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: IMPACT BANNER
      ========================================================= */}
      <section className="px-4 sm:px-8 lg:px-16 pb-14 bg-white">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0a1535] via-[#0a2a4a] to-emerald-800 p-8 lg:p-10">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
            <div className="lg:col-span-1 text-center lg:text-left">
              <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">
                Our Impact
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mt-1.5 mb-2">
                Growing Together
              </h2>
              <p className="text-slate-300 text-xs leading-relaxed max-w-xs mx-auto lg:mx-0">
                We're proud to be a part of your financial journey.
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:divide-x lg:divide-white/10">
              {impacts.map((s, i) => (
                <div key={i} className="text-center px-2">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <p className="text-xl lg:text-2xl font-bold text-white">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
