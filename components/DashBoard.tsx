import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-100 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full text-center space-y-8 z-10 bg-slate-50 border border-slate-200 p-8 md:p-12 rounded-3xl shadow-xl">
        <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 px-4 py-1.5 rounded-full text-sky-700 text-xs md:text-sm font-semibold tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
          Dashboard Under Construction
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-slate-900">Bheem</span>
            <span className="text-sky-600">Loan</span>
            <span className="block text-2xl md:text-4xl mt-2 text-slate-700">
              Dashboard is Coming Soon 🚀
            </span>
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Hum aapke liye ek fast, secure aur seamless financial dashboard
            build kar rahe hain. Jald hi aap yahan apne loans, EMI schedule, aur
            credit score manage kar payenge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left">
          <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
            <p className="text-sky-600 text-xs font-bold uppercase">
              Quick View
            </p>
            <p className="text-slate-800 text-sm font-semibold mt-1">
              Loan Status
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
            <p className="text-sky-600 text-xs font-bold uppercase">Tracking</p>
            <p className="text-slate-800 text-sm font-semibold mt-1">
              EMI Payments
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
            <p className="text-sky-600 text-xs font-bold uppercase">
              Free Check
            </p>
            <p className="text-slate-800 text-sm font-semibold mt-1">
              Credit Report
            </p>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-all duration-200 text-sm shadow-md shadow-sky-500/20"
          >
            Back To Home
          </Link>
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-3 border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium rounded-xl transition-all duration-200 text-sm"
          >
            Notify Me On Launch
          </button>
        </div>
      </div>
    </div>
  );
}
