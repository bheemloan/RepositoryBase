"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import { AppDownloadPopup } from "./AppDownloadPopup";
import { CalculatorModal, CalculatorType } from "./CalculatorModal";
import { FinancialSolutions } from "./FinancialSolutions";
/* ============ COUNT UP COMPONENT ============ */
const CountUp = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // IntersectionObserver — jab visible ho tab start
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Count animation
  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // easeOutCubic — smooth end
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [hasStarted, end, duration]);

  const formatted = count.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export const DashBoard = (props: {}) => {
  /* ============ HERO CAROUSEL STATE ============ */
  const slides = useMemo(
    () => [
      {
        image: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/1200/800`,
        alt: "Loan 1",
      },
      {
        image: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1000}/1200/800`,
        alt: "Loan 2",
      },
      {
        image: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 2000}/1200/800`,
        alt: "Loan 3",
      },
      {
        image: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 3000}/1200/800`,
        alt: "Loan 4",
      },
    ],
    [],
  );

  const [current, setCurrent] = useState(0);

  // ✅ Calculator modal state — DashBoard ke andar
  const [calcType, setCalcType] = useState<CalculatorType>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  /* ============ DATA ============ */
  const heroStats = [
    { end: 500, prefix: "₹", suffix: "Cr+", l: "Disbursed", decimals: 0 },
    { end: 50, prefix: "", suffix: "K+", l: "Customers", decimals: 0 },
    { end: 10, prefix: "", suffix: " Min", l: "Approval", decimals: 0 },
  ];

  const steps = [
    {
      num: "01",
      title: "Personal Details",
      desc: "Fill the basic personal details required for applying for loans",
    },
    {
      num: "02",
      title: "Verify PAN Details",
      desc: "Enter your PAN to securely fetch your credit report.",
    },
    {
      num: "03",
      title: "Employment Details",
      desc: "Share your employment information to help us assess your eligibility.",
    },
    {
      num: "04",
      title: "Submit Application",
      desc: "Review your details and submit your loan application for processing",
    },
  ];

  const partners = [
    { name: "MoneyView", logo: "https://picsum.photos/seed/moneyview/200/100" },
    { name: "Zype", logo: "https://picsum.photos/seed/zype/200/100" },
    {
      name: "DigiCredit",
      logo: "https://picsum.photos/seed/digicredit/200/100",
    },
    { name: "JetFund", logo: "https://picsum.photos/seed/jetfund/200/100" },
    { name: "Byuddy Loan", logo: "https://picsum.photos/seed/byuddy/200/100" },
    { name: "KreditBee", logo: "https://picsum.photos/seed/kreditbee/200/100" },
    { name: "LazyPay", logo: "https://picsum.photos/seed/lazypay/200/100" },
    { name: "Navi", logo: "https://picsum.photos/seed/navi/200/100" },
    { name: "Fibe", logo: "https://picsum.photos/seed/fibe/200/100" },
    { name: "PaySense", logo: "https://picsum.photos/seed/paysense/200/100" },
    {
      name: "Indiabulls",
      logo: "https://picsum.photos/seed/indiabulls/200/100",
    },
    { name: "Bajaj Finserv", logo: "https://picsum.photos/seed/bajaj/200/100" },
  ];

  const loanTypes = [
    { icon: "🧑‍💼", name: "Personal Loan", rate: "10.5%", amount: "₹50K - ₹50L" },
    { icon: "🏠", name: "Home Loan", rate: "8.5%", amount: "Up to ₹5 Cr" },
    { icon: "💼", name: "Business Loan", rate: "11.0%", amount: "Up to ₹1 Cr" },
    { icon: "🎓", name: "Education Loan", rate: "9.5%", amount: "Up to ₹75 L" },
  ];

  const creditCards = [
    {
      name: "Cashback Card",
      bank: "HDFC Bank",
      tag: "5% Cashback",
      img: "https://picsum.photos/seed/cc1/400/250",
    },
    {
      name: "Rewards Plus",
      bank: "ICICI Bank",
      tag: "10X Rewards",
      img: "https://picsum.photos/seed/cc2/400/250",
    },
    {
      name: "Travel Elite",
      bank: "Axis Bank",
      tag: "Free Lounge",
      img: "https://picsum.photos/seed/cc3/400/250",
    },
  ];

  // ✅ calculators array with key
  const calculators = [
    {
      key: "emi" as CalculatorType,
      icon: "💰",
      name: "EMI Calculator",
      desc: "Calculate your monthly loan EMI instantly",
    },
    {
      key: "sip" as CalculatorType,
      icon: "📈",
      name: "SIP Calculator",
      desc: "Plan your mutual fund investments smartly",
    },
    {
      key: "fd" as CalculatorType,
      icon: "🏦",
      name: "FD/RD Calculator",
      desc: "See returns on fixed & recurring deposits",
    },
    {
      key: "tax" as CalculatorType,
      icon: "📊",
      name: "Tax Calculator",
      desc: "Estimate your income tax liability easily",
    },
  ];

  const investments = [
    {
      icon: "📈",
      title: "Mutual Funds",
      desc: "SIP & lumpsum plans across top AMCs",
    },
    { icon: "📉", title: "Stocks", desc: "Direct equity & trading accounts" },
    { icon: "🥇", title: "Gold", desc: "Digital gold & sovereign gold bonds" },
    {
      icon: "🏦",
      title: "Fixed Deposits",
      desc: "High-yield FD plans from banks",
    },
  ];

  const insurances = [
    {
      icon: "❤️",
      title: "Health Insurance",
      desc: "Cashless hospitalization across 10K+ hospitals",
    },
    {
      icon: "🛡️",
      title: "Life Insurance",
      desc: "Secure your family's financial future",
    },
    {
      icon: "📋",
      title: "Term Insurance",
      desc: "High cover at affordable premiums",
    },
    {
      icon: "🚗",
      title: "Vehicle Insurance",
      desc: "Comprehensive car & bike coverage",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Mehta",
      city: "Bengaluru",
      img: "https://i.pravatar.cc/100?img=12",
      text: "The app experience was smooth and easy to understand. Got my loan in 15 minutes!",
    },
    {
      name: "Aman Verma",
      city: "Bengaluru",
      img: "https://i.pravatar.cc/100?img=33",
      text: "Simple interface and decent offers shown. Highly recommended for first-timers.",
    },
    {
      name: "Suresh Patil",
      city: "Pune",
      img: "https://i.pravatar.cc/100?img=45",
      text: "I liked how clearly the loan details were shown. No hidden charges at all.",
    },
  ];

  const blogs = [
    {
      img: "https://picsum.photos/seed/blog1/600/400",
      tag: "Loan Tips",
      title: "5 Ways to Improve Your CIBIL Score Fast",
      date: "24 Feb 2026",
    },
    {
      img: "https://picsum.photos/seed/blog2/600/400",
      tag: "Investment",
      title: "SIP vs Lumpsum: Which is Better in 2026?",
      date: "20 Feb 2026",
    },
    {
      img: "https://picsum.photos/seed/blog3/600/400",
      tag: "Tax",
      title: "Tax Saving Options Under Section 80C",
      date: "16 Feb 2026",
    },
  ];

  const news = [
    {
      tag: "RBI",
      title: "RBI keeps repo rate unchanged at 6.5%",
      time: "2 hours ago",
    },
    {
      tag: "Markets",
      title: "Sensex hits all-time high, Nifty crosses 24,000",
      time: "5 hours ago",
    },
    {
      tag: "Policy",
      title: "New tax regime changes effective from April 2026",
      time: "1 day ago",
    },
  ];

  const team = [
    {
      name: "Aarav Sharma",
      role: "CEO & Founder",
      img: "https://i.pravatar.cc/150?img=15",
    },
    {
      name: "Priya Nair",
      role: "Chief Financial Officer",
      img: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Rohan Kapoor",
      role: "Chief Technology Officer",
      img: "https://i.pravatar.cc/150?img=52",
    },
  ];

  return (
    <>
      {/* ============ MODALS ============ */}
      <AppDownloadPopup />
      <CalculatorModal type={calcType} onClose={() => setCalcType(null)} />

      {/* ============ GLOBAL KEYFRAMES ============ */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* =========================================================
          1. HERO SECTION
      ========================================================= */}
      <section className="bg-gradient-to-b from-[#e8f0fe] to-white pt-6 pb-8 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-3 order-1">
            <span className="inline-block bg-blue-100 text-blue-700 text-[11px] font-semibold px-3 py-1 rounded-full">
              ⚡ Instant Approval in 10 Minutes
            </span>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0a1535] leading-snug">
              Apply Loans Online with{" "}
              <span className="text-blue-600">Instant Approval</span> & Free
              Credit Score
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Home, Personal, Business, Car, or Gold Loan — KeshvaCredit offers
              competitive rates, flexible tenures, and a 100% digital process.
              Trusted by millions across India.
            </p>
            <ul className="space-y-1.5 pt-1">
              {[
                "Curated options from multiple lenders",
                "Eligibility insights that work for you",
                "Zero confusion, zero hassle",
                "Simple steps that make borrowing effortless",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-xs sm:text-sm text-slate-700"
                >
                  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center text-[9px] font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md transition hover:scale-105">
                Apply Now →
              </button>
              <button className="bg-white hover:bg-slate-50 text-[#0a1535] text-sm font-semibold px-5 py-2.5 rounded-lg border border-slate-300 transition">
                Check Eligibility
              </button>
            </div>

            {/* ✅ ANIMATED STATS */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              {heroStats.map((s, i) => (
                <div key={i}>
                  <p className="text-sm lg:text-base font-bold text-[#0a1535]">
                    <CountUp
                      end={s.end}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      decimals={s.decimals}
                      duration={2000}
                    />
                  </p>
                  <p className="text-[10px] text-slate-500">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden order-2">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.image}
                  alt={slide.alt}
                  className="flex-shrink-0 w-full h-[180px] sm:h-[220px] lg:h-[280px] object-cover"
                />
              ))}
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all ${current === i ? "w-5 bg-white" : "w-1.5 bg-white/60"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. OUR PARTNERS — AUTO SCROLL
      ========================================================= */}
      <section className="bg-white py-10 px-4 sm:px-8 lg:px-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-lg lg:text-xl font-bold text-[#0a1535]">
              Our Trusted Partners
            </h2>
            <p className="text-slate-500 text-[11px] mt-1">
              Banks, NBFCs, Mutual Funds & Fintech platforms
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />
            <div className="flex gap-5 w-max animate-scroll">
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-32 h-20 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition flex flex-col items-center justify-center gap-1.5 px-2"
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="w-10 h-10 object-cover rounded-full border border-slate-100"
                  />
                  <p className="text-[10px] font-semibold text-[#0a1535] text-center leading-tight">
                    {p.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. APPLICATION PROCESS
      ========================================================= */}
      <section className="bg-slate-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg lg:text-xl font-bold text-[#0a1535] mb-12">
            Application Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {steps.map((step, i) => (
              <div key={i} className="relative pt-8">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#0a1535] border-r-[#0a1535] rotate-45" />
                    <div className="absolute inset-1.5 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-sm font-bold text-[#0a1535]">
                        {step.num}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl pt-12 pb-4 px-4 shadow-sm border border-slate-100 hover:shadow-md transition">
                  <h3 className="text-center text-sm font-bold text-[#0a1535] mb-3">
                    {step.title}
                  </h3>
                  <div className="bg-[#0a1535] rounded-xl px-3 py-4 min-h-[90px] flex items-center">
                    <p className="text-[11px] text-white text-center leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. LOANS DIRECTORY
      ========================================================= */}
      <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              Loans
            </span>
            <h2 className="text-lg lg:text-xl font-bold text-[#0a1535] mt-1">
              Loans Directory & Application
            </h2>
            <p className="text-slate-500 text-xs mt-1">
              Compare, check eligibility, and apply in minutes
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {loanTypes.map((loan, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 border border-slate-200 hover:shadow-lg hover:border-blue-400 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-xl mb-2.5">
                  {loan.icon}
                </div>
                <h3 className="font-bold text-[#0a1535] text-sm">
                  {loan.name}
                </h3>
                <div className="flex justify-between mt-2.5 text-[10px]">
                  <div>
                    <p className="text-slate-500">From</p>
                    <p className="font-bold text-blue-600 text-sm">
                      {loan.rate}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-500">Amount</p>
                    <p className="font-semibold text-[#0a1535] text-[11px]">
                      {loan.amount}
                    </p>
                  </div>
                </div>
                <button className="w-full mt-3 bg-[#0a1535] group-hover:bg-blue-600 text-white text-[11px] font-semibold py-1.5 rounded-md transition">
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. CREDIT CARDS HUB
      ========================================================= */}
      <section className="bg-slate-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              Credit Cards
            </span>
            <h2 className="text-lg lg:text-xl font-bold text-[#0a1535] mt-1">
              Top Credit Cards 2026
            </h2>
            <p className="text-slate-500 text-xs mt-1">
              Reviews, offers & direct apply links
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {creditCards.map((cc, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition group bg-white"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={cc.img}
                    alt={cc.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {cc.tag}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[10px] text-slate-500">{cc.bank}</p>
                  <h3 className="font-bold text-[#0a1535] text-sm group-hover:text-blue-600 transition mt-0.5">
                    {cc.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2.5">
                    <div className="text-yellow-500 text-[10px]">
                      ⭐⭐⭐⭐⭐
                    </div>
                    <button className="text-[11px] font-semibold text-blue-600">
                      Apply →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. INTERACTIVE CALCULATORS
      ========================================================= */}
      <section className="bg-[#0a1535] py-12 px-4 sm:px-8 lg:px-16 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
              Free Tools
            </span>
            <h2 className="text-lg lg:text-xl font-bold mt-1">
              Interactive Financial Calculators
            </h2>
            <p className="text-slate-400 text-xs mt-1">
              Plan smarter with our easy-to-use calculators
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {calculators.map((c, i) => (
              <div
                key={i}
                onClick={() => setCalcType(c.key)}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-blue-400 transition cursor-pointer group"
              >
                <div className="text-2xl mb-2">{c.icon}</div>
                <h3 className="font-bold text-sm">{c.name}</h3>
                <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                  {c.desc}
                </p>
                <button className="mt-3 text-[11px] font-semibold text-blue-400 group-hover:text-blue-300">
                  Calculate →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          7. INVESTMENT & WEALTH
      ========================================================= */}
      <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              Invest
            </span>
            <h2 className="text-lg lg:text-xl font-bold text-[#0a1535] mt-1">
              Investment & Wealth Management
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {investments.map((inv, i) => (
              <div
                key={i}
                className="text-center p-5 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-2xl mb-3">
                  {inv.icon}
                </div>
                <h3 className="font-bold text-[#0a1535] text-sm">
                  {inv.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1.5">{inv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          8. INSURANCE SOLUTIONS
      ========================================================= */}
      <section className="bg-slate-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              Protect
            </span>
            <h2 className="text-lg lg:text-xl font-bold text-[#0a1535] mt-1">
              Insurance Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {insurances.map((ins, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{ins.icon}</div>
                <h3 className="font-bold text-[#0a1535] text-sm">
                  {ins.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                  {ins.desc}
                </p>
                <button className="mt-3 text-[11px] font-semibold text-blue-600">
                  Compare Plans →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          9. CREDIT SCORE CHECK
      ========================================================= */}
      <section className="bg-gradient-to-r from-blue-600 to-[#0a1535] py-12 px-4 sm:px-8 lg:px-16 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">
              Free Credit Score
            </span>
            <h2 className="text-xl lg:text-2xl font-bold mt-2 mb-3">
              Check Your CIBIL Score — 100% Free
            </h2>
            <p className="text-blue-100 text-xs mb-5 leading-relaxed">
              Get your credit score instantly and unlock personalised tips to
              improve it. No impact on your score.
            </p>
            <ul className="space-y-1.5 text-xs mb-5">
              {[
                "Instant score check — no signup needed",
                "Personalised improvement tips",
                "Track your score monthly",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-green-400 text-[#0a1535] flex items-center justify-center text-[9px] font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-white text-blue-700 text-sm font-bold px-5 py-2.5 rounded-lg hover:scale-105 transition shadow-lg">
              Check Free Score →
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-center">
            <p className="text-[10px] text-blue-200">Your Credit Score</p>
            <p className="text-5xl font-bold text-white my-2">
              <CountUp end={785} duration={1800} />
            </p>
            <p className="text-[11px] text-green-400 font-semibold">
              ▲ Excellent
            </p>
            <div className="w-full h-1.5 bg-white/20 rounded-full mt-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 via-green-400 to-green-500"
                style={{ width: "78%" }}
              />
            </div>
            <div className="flex justify-between text-[9px] text-blue-200 mt-1.5">
              <span>300</span>
              <span>900</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          10. TAX PLANNING
      ========================================================= */}
      <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              Tax
            </span>
            <h2 className="text-lg lg:text-xl font-bold text-[#0a1535] mt-1">
              Tax Planning & Filing Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "📋",
                title: "Tax Saving Options",
                desc: "Explore 80C, 80D & other deductions to save up to ₹1.5 Lakh",
              },
              {
                icon: "📄",
                title: "ITR Filing Guide",
                desc: "Step-by-step guide to file your income tax return",
              },
              {
                icon: "🧑‍💼",
                title: "Expert Assistance",
                desc: "Get a CA to file your taxes hassle-free",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
              >
                <div className="text-3xl mb-2.5">{t.icon}</div>
                <h3 className="font-bold text-[#0a1535] text-sm mb-1.5">
                  {t.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.desc}
                </p>
                <button className="mt-3 text-[11px] font-semibold text-blue-600">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          11. FINANCIAL NEWS
      ========================================================= */}
      <section className="bg-slate-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                News
              </span>
              <h2 className="text-lg lg:text-xl font-bold text-[#0a1535] mt-1">
                Financial News & Market Updates
              </h2>
            </div>
            <button className="hidden sm:block text-xs font-semibold text-blue-600">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {news.map((n, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition cursor-pointer"
              >
                <span className="inline-block bg-blue-100 text-blue-700 text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                  {n.tag}
                </span>
                <h3 className="font-bold text-[#0a1535] text-sm mt-2.5 leading-snug hover:text-blue-600 transition">
                  {n.title}
                </h3>
                <p className="text-[10px] text-slate-400 mt-2.5">🕐 {n.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          12. ABOUT US & LEADERSHIP
      ========================================================= */}
      <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                About Us
              </span>
              <h2 className="text-xl lg:text-2xl font-bold text-[#0a1535] mt-2 mb-3">
                Making Finance Simple for Every Indian
              </h2>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                Founded in 2020, KeshvaCredit is on a mission to democratise access
                to financial products across India. We connect millions of
                borrowers with trusted lenders through our technology-driven
                marketplace.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { end: 5, suffix: "+", l: "Years" },
                  { end: 50, suffix: "K+", l: "Customers" },
                  { end: 38, suffix: "+", l: "Partners" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="text-center p-2.5 bg-slate-50 rounded-lg"
                  >
                    <p className="text-base font-bold text-[#0a1535]">
                      <CountUp end={s.end} suffix={s.suffix} duration={1800} />
                    </p>
                    <p className="text-[10px] text-slate-500">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/office/800/500"
                alt="Office"
                className="w-full h-[220px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          13. TESTIMONIALS
      ========================================================= */}
      <section className="bg-slate-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              Reviews
            </span>
            <h2 className="text-lg lg:text-xl font-bold text-[#0a1535] mt-1">
              Customer Reviews & Testimonials
            </h2>
            <p className="text-slate-500 text-xs mt-1">
              Real stories from real customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition"
              >
                <div className="text-yellow-500 text-xs mb-2.5">⭐⭐⭐⭐⭐</div>
                <p className="text-slate-700 text-xs leading-relaxed italic mb-4">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div>
                    <p className="font-semibold text-[#0a1535] text-xs">
                      {t.name}
                    </p>
                    <p className="text-[10px] text-slate-500">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinancialSolutions />
    </>
  );
};
