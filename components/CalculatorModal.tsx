"use client";

import { useState, useEffect } from "react";

export type CalculatorType = "emi" | "sip" | "fd" | "tax" | null;

interface CalculatorModalProps {
  type: CalculatorType;
  onClose: () => void;
}

export const CalculatorModal = ({ type, onClose }: CalculatorModalProps) => {
  useEffect(() => {
    if (type) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [type]);

  if (!type) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes calcFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes calcPopIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(15px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .calc-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 5px;
          border-radius: 9999px;
          background: linear-gradient(
            to right,
            #2563eb 0%,
            #2563eb var(--progress, 50%),
            #e2e8f0 var(--progress, 50%),
            #e2e8f0 100%
          );
          outline: none;
          cursor: pointer;
        }
        .calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #2563eb;
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.4);
          cursor: pointer;
          transition: all 0.2s;
        }
        .calc-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .calc-slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #2563eb;
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.4);
          cursor: pointer;
        }
      `}</style>

      <div
        className="fixed inset-0 z-[1000] bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-3 animate-[calcFadeIn_0.25s_ease-out]"
        onClick={onClose}
      >
        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[88vh] overflow-hidden flex flex-col animate-[calcPopIn_0.35s_ease-out]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ===== HEADER ===== */}
          <div className="relative bg-gradient-to-br from-[#0a1535] via-[#132a5c] to-[#1e3a8a] text-white px-5 py-4 overflow-hidden flex-shrink-0">
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-blue-500/20 rounded-full blur-2xl" />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-xl">
                  {type === "emi" && "💰"}
                  {type === "sip" && "📈"}
                  {type === "fd" && "🏦"}
                  {type === "tax" && "📊"}
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">
                    {type === "emi" && "EMI Calculator"}
                    {type === "sip" && "SIP Calculator"}
                    {type === "fd" && "FD / RD Calculator"}
                    {type === "tax" && "Income Tax Calculator"}
                  </h3>
                  <p className="text-[10px] text-blue-200 mt-0.5">
                    {type === "emi" && "Calculate monthly loan EMI"}
                    {type === "sip" && "Plan mutual fund investments"}
                    {type === "fd" && "Returns on fixed & recurring deposits"}
                    {type === "tax" && "Estimate income tax liability"}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500 border border-white/20 text-white flex items-center justify-center text-xs transition-all hover:rotate-90 flex-shrink-0"
              >
                ✕
              </button>
            </div>
          </div>

          {/* ===== BODY ===== */}
          <div className="p-4 overflow-y-auto">
            {type === "emi" && <EMICalculator />}
            {type === "sip" && <SIPCalculator />}
            {type === "fd" && <FDCalculator />}
            {type === "tax" && <TaxCalculator />}
          </div>
        </div>
      </div>
    </>
  );
};

/* ============================================================
   EMI CALCULATOR
============================================================ */
const EMICalculator = () => {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10.5);
  const [tenure, setTenure] = useState(24);

  const monthlyRate = rate / 12 / 100;
  const emi =
    monthlyRate === 0
      ? amount / tenure
      : (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1);

  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - amount;
  const principalPercent = (amount / totalPayment) * 100;

  return (
    <div className="space-y-4">
      <div className="bg-slate-50 rounded-xl p-4 space-y-4 border border-slate-100">
        <SliderField
          label="Loan Amount"
          value={amount}
          min={10000}
          max={10000000}
          step={10000}
          onChange={setAmount}
          format={(v) => `₹${v.toLocaleString("en-IN")}`}
          icon="💰"
        />
        <SliderField
          label="Interest Rate (p.a.)"
          value={rate}
          min={1}
          max={25}
          step={0.1}
          onChange={setRate}
          format={(v) => `${v}%`}
          icon="📊"
        />
        <SliderField
          label="Tenure"
          value={tenure}
          min={6}
          max={360}
          step={6}
          onChange={setTenure}
          format={(v) => `${v} months`}
          icon="📅"
        />
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-[#0a1535] rounded-xl p-4 text-white">
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <div className="relative">
          <p className="text-[10px] text-blue-100 uppercase tracking-widest font-semibold">
            Monthly EMI
          </p>
          <p className="text-2xl font-bold text-white mt-0.5">
            ₹{Math.round(emi).toLocaleString("en-IN")}
          </p>

          <div className="w-full h-1.5 bg-white/20 rounded-full mt-2.5 overflow-hidden flex">
            <div
              className="h-full bg-blue-300"
              style={{ width: `${principalPercent}%` }}
            />
            <div
              className="h-full bg-yellow-400"
              style={{ width: `${100 - principalPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-[9px] text-blue-100 mt-1.5">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />{" "}
              Principal
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />{" "}
              Interest
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3.5 pt-3.5 border-t border-white/10">
            <div>
              <p className="text-[9px] text-blue-200 uppercase">Principal</p>
              <p className="text-xs font-bold mt-0.5">
                ₹{amount.toLocaleString("en-IN")}
              </p>
            </div>
            <div>
              <p className="text-[9px] text-blue-200 uppercase">
                Total Interest
              </p>
              <p className="text-xs font-bold text-yellow-300 mt-0.5">
                ₹{Math.round(totalInterest).toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold py-2.5 rounded-lg transition-all shadow-md shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98]">
        Apply With This Plan →
      </button>
    </div>
  );
};

/* ============================================================
   SIP CALCULATOR
============================================================ */
const SIPCalculator = () => {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const months = years * 12;
  const monthlyRate = rate / 12 / 100;
  const futureValue =
    monthlyRate === 0
      ? monthly * months
      : monthly *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate);

  const invested = monthly * months;
  const returns = futureValue - invested;
  const investedPercent = (invested / futureValue) * 100;

  return (
    <div className="space-y-4">
      <div className="bg-slate-50 rounded-xl p-4 space-y-4 border border-slate-100">
        <SliderField
          label="Monthly Investment"
          value={monthly}
          min={500}
          max={100000}
          step={500}
          onChange={setMonthly}
          format={(v) => `₹${v.toLocaleString("en-IN")}`}
          icon="💵"
        />
        <SliderField
          label="Expected Return (p.a.)"
          value={rate}
          min={1}
          max={30}
          step={0.5}
          onChange={setRate}
          format={(v) => `${v}%`}
          icon="📈"
        />
        <SliderField
          label="Period"
          value={years}
          min={1}
          max={40}
          step={1}
          onChange={setYears}
          format={(v) => `${v} years`}
          icon="⏳"
        />
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-[#0a1535] rounded-xl p-4 text-white">
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <div className="relative">
          <p className="text-[10px] text-emerald-100 uppercase tracking-widest font-semibold">
            Estimated Future Value
          </p>
          <p className="text-2xl font-bold text-white mt-0.5">
            ₹{Math.round(futureValue).toLocaleString("en-IN")}
          </p>

          <div className="w-full h-1.5 bg-white/20 rounded-full mt-2.5 overflow-hidden flex">
            <div
              className="h-full bg-blue-300"
              style={{ width: `${investedPercent}%` }}
            />
            <div
              className="h-full bg-emerald-300"
              style={{ width: `${100 - investedPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-[9px] text-emerald-100 mt-1.5">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300" /> Invested
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />{" "}
              Returns
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3.5 pt-3.5 border-t border-white/10">
            <div>
              <p className="text-[9px] text-emerald-200 uppercase">Invested</p>
              <p className="text-xs font-bold mt-0.5">
                ₹{invested.toLocaleString("en-IN")}
              </p>
            </div>
            <div>
              <p className="text-[9px] text-emerald-200 uppercase">
                Est. Returns
              </p>
              <p className="text-xs font-bold text-emerald-300 mt-0.5">
                ₹{Math.round(returns).toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-sm font-semibold py-2.5 rounded-lg transition-all shadow-md shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98]">
        Start SIP Now →
      </button>
    </div>
  );
};

/* ============================================================
   FD / RD CALCULATOR
============================================================ */
const FDCalculator = () => {
  const [mode, setMode] = useState<"fd" | "rd">("fd");
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(7.5);
  const [years, setYears] = useState(5);

  let maturity = 0;
  let invested = 0;

  if (mode === "fd") {
    maturity = amount * Math.pow(1 + rate / 4 / 100, 4 * years);
    invested = amount;
  } else {
    const monthly = amount / 12;
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    maturity =
      monthly *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    invested = monthly * months;
  }

  const returns = maturity - invested;
  const investedPercent = (invested / maturity) * 100;

  return (
    <div className="space-y-4">
      <div className="flex gap-1 p-1 bg-slate-100 rounded-lg">
        <button
          onClick={() => setMode("fd")}
          className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
            mode === "fd"
              ? "bg-white text-[#0a1535] shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Fixed Deposit
        </button>
        <button
          onClick={() => setMode("rd")}
          className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
            mode === "rd"
              ? "bg-white text-[#0a1535] shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Recurring Deposit
        </button>
      </div>

      <div className="bg-slate-50 rounded-xl p-4 space-y-4 border border-slate-100">
        <SliderField
          label={mode === "fd" ? "Total Investment" : "Yearly Investment"}
          value={amount}
          min={5000}
          max={5000000}
          step={5000}
          onChange={setAmount}
          format={(v) => `₹${v.toLocaleString("en-IN")}`}
          icon="💵"
        />
        <SliderField
          label="Interest Rate (p.a.)"
          value={rate}
          min={1}
          max={15}
          step={0.1}
          onChange={setRate}
          format={(v) => `${v}%`}
          icon="📊"
        />
        <SliderField
          label="Period"
          value={years}
          min={1}
          max={20}
          step={1}
          onChange={setYears}
          format={(v) => `${v} years`}
          icon="⏳"
        />
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-[#0a1535] rounded-xl p-4 text-white">
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <div className="relative">
          <p className="text-[10px] text-purple-100 uppercase tracking-widest font-semibold">
            Maturity Amount
          </p>
          <p className="text-2xl font-bold text-white mt-0.5">
            ₹{Math.round(maturity).toLocaleString("en-IN")}
          </p>

          <div className="w-full h-1.5 bg-white/20 rounded-full mt-2.5 overflow-hidden flex">
            <div
              className="h-full bg-blue-300"
              style={{ width: `${investedPercent}%` }}
            />
            <div
              className="h-full bg-purple-300"
              style={{ width: `${100 - investedPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-[9px] text-purple-100 mt-1.5">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300" /> Invested
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />{" "}
              Returns
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3.5 pt-3.5 border-t border-white/10">
            <div>
              <p className="text-[9px] text-purple-200 uppercase">Invested</p>
              <p className="text-xs font-bold mt-0.5">
                ₹{Math.round(invested).toLocaleString("en-IN")}
              </p>
            </div>
            <div>
              <p className="text-[9px] text-purple-200 uppercase">
                Est. Returns
              </p>
              <p className="text-xs font-bold text-purple-300 mt-0.5">
                ₹{Math.round(returns).toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-sm font-semibold py-2.5 rounded-lg transition-all shadow-md shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98]">
        Book {mode === "fd" ? "FD" : "RD"} Now →
      </button>
    </div>
  );
};

/* ============================================================
   TAX CALCULATOR
============================================================ */
const TaxCalculator = () => {
  const [income, setIncome] = useState(1000000);
  const [regime, setRegime] = useState<"new" | "old">("new");

  const calculateNew = (inc: number) => {
    let tax = 0;
    if (inc > 300000 && inc <= 700000) tax = (inc - 300000) * 0.05;
    else if (inc > 700000 && inc <= 1000000) tax = 20000 + (inc - 700000) * 0.1;
    else if (inc > 1000000 && inc <= 1200000)
      tax = 50000 + (inc - 1000000) * 0.15;
    else if (inc > 1200000 && inc <= 1500000)
      tax = 80000 + (inc - 1200000) * 0.2;
    else if (inc > 1500000) tax = 140000 + (inc - 1500000) * 0.3;
    return tax;
  };

  const calculateOld = (inc: number) => {
    let tax = 0;
    if (inc > 250000 && inc <= 500000) tax = (inc - 250000) * 0.05;
    else if (inc > 500000 && inc <= 1000000) tax = 12500 + (inc - 500000) * 0.2;
    else if (inc > 1000000) tax = 112500 + (inc - 1000000) * 0.3;
    return tax;
  };

  const tax = regime === "new" ? calculateNew(income) : calculateOld(income);
  const cess = tax * 0.04;
  const totalTax = tax + cess;
  const effectiveRate = income > 0 ? (totalTax / income) * 100 : 0;
  const takeHome = income - totalTax;
  const taxPercent = (totalTax / income) * 100;

  return (
    <div className="space-y-4">
      <div className="flex gap-1 p-1 bg-slate-100 rounded-lg">
        <button
          onClick={() => setRegime("new")}
          className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
            regime === "new"
              ? "bg-white text-[#0a1535] shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          New Regime
        </button>
        <button
          onClick={() => setRegime("old")}
          className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all ${
            regime === "old"
              ? "bg-white text-[#0a1535] shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Old Regime
        </button>
      </div>

      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
        <SliderField
          label="Annual Income"
          value={income}
          min={300000}
          max={5000000}
          step={50000}
          onChange={setIncome}
          format={(v) => `₹${v.toLocaleString("en-IN")}`}
          icon="💼"
        />
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-rose-600 via-rose-700 to-[#0a1535] rounded-xl p-4 text-white">
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <div className="relative">
          <p className="text-[10px] text-rose-100 uppercase tracking-widest font-semibold">
            Total Tax Payable
          </p>
          <p className="text-2xl font-bold text-white mt-0.5">
            ₹{Math.round(totalTax).toLocaleString("en-IN")}
          </p>
          <p className="text-[10px] text-rose-200 mt-0.5">
            Effective Rate:{" "}
            <span className="font-bold text-white">
              {effectiveRate.toFixed(2)}%
            </span>
          </p>

          <div className="w-full h-1.5 bg-white/20 rounded-full mt-2.5 overflow-hidden flex">
            <div
              className="h-full bg-emerald-300"
              style={{ width: `${100 - taxPercent}%` }}
            />
            <div
              className="h-full bg-rose-300"
              style={{ width: `${taxPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-[9px] text-rose-100 mt-1.5">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" /> Take
              Home
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-300" /> Tax
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3.5 pt-3.5 border-t border-white/10">
            <div>
              <p className="text-[9px] text-rose-200 uppercase">Base + Cess</p>
              <p className="text-xs font-bold mt-0.5">
                ₹{Math.round(tax).toLocaleString("en-IN")}
              </p>
            </div>
            <div>
              <p className="text-[9px] text-rose-200 uppercase">Take Home</p>
              <p className="text-xs font-bold text-emerald-300 mt-0.5">
                ₹{Math.round(takeHome).toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white text-sm font-semibold py-2.5 rounded-lg transition-all shadow-md shadow-rose-600/30 hover:scale-[1.02] active:scale-[0.98]">
        File ITR With Expert →
      </button>
    </div>
  );
};

/* ============================================================
   REUSABLE SLIDER FIELD
============================================================ */
const SliderField = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
  icon,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
  icon?: string;
}) => {
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-[11px] font-semibold text-slate-600 flex items-center gap-1.5">
          {icon && <span className="text-sm">{icon}</span>}
          {label}
        </label>
        <span className="text-xs font-bold text-blue-600 bg-white px-2 py-0.5 rounded border border-blue-100">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="calc-slider"
        style={{ ["--progress" as any]: `${percent}%` }}
      />
      <div className="flex justify-between text-[9px] text-slate-400 mt-1">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
};
