"use client";

import { useState } from "react";

type TabType = "contact" | "partner";

export default function ContactPage() {
  const [tab, setTab] = useState<TabType>("contact");
  const [submitted, setSubmitted] = useState(false);

  // Contact form
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Partner form
  const [partnerForm, setPartnerForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    partnerType: "",
    city: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setPartnerForm({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        website: "",
        partnerType: "",
        city: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Call Us",
      value: "+91 1800-123-4567",
      sub: "Mon-Sat, 9 AM - 9 PM",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: "✉️",
      title: "Email Us",
      value: "support@bheemloan.com",
      sub: "We reply within 24 hours",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      icon: "📍",
      title: "Visit Office",
      value: "HSR Layout, Bengaluru",
      sub: "Karnataka 560102",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: "💬",
      title: "Live Chat",
      value: "Available 24/7",
      sub: "Instant support",
      color: "from-rose-500 to-rose-700",
    },
  ];

  const faqs = [
    {
      q: "How quickly will I get a response?",
      a: "We typically respond within 24 hours on business days. For urgent queries, call our helpline.",
    },
    {
      q: "Can I visit your office without an appointment?",
      a: "Yes, you're welcome during working hours. For faster service, we recommend booking a slot.",
    },
    {
      q: "Do you have customer support in regional languages?",
      a: "Yes, we support Hindi, English, Tamil, Telugu, Kannada, and Marathi.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* =========================================================
          HERO HEADER
      ========================================================= */}
      <section className="bg-gradient-to-br from-[#0a1535] via-[#132a5c] to-[#1e3a8a] text-white py-14 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative text-center">
          <span className="inline-block bg-white/10 border border-white/20 backdrop-blur text-blue-100 text-[11px] font-semibold px-3 py-1 rounded-full">
            📬 We're here to help
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-3">
            Get in <span className="text-blue-400">Touch</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have a question about loans, EMIs, or your account? Or want to
            partner with us? Reach out — we're all ears.
          </p>
        </div>
      </section>

      {/* =========================================================
          CONTACT INFO CARDS
      ========================================================= */}
      <section className="py-12 px-4 sm:px-8 lg:px-16 -mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-2xl mb-3 shadow-lg`}
              >
                {c.icon}
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                {c.title}
              </p>
              <p className="font-bold text-[#0a1535] text-sm mt-1 break-all">
                {c.value}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          TABBED FORMS SECTION
      ========================================================= */}
      <section className="py-10 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* ===== TABS + FORM in one card layout ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT: Tabbed Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              {/* Tab buttons */}
              <div className="grid grid-cols-2 bg-slate-100 p-1.5 m-4 rounded-xl">
                <button
                  onClick={() => setTab("contact")}
                  className={`py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    tab === "contact"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  ✉️ Contact Us
                </button>
                <button
                  onClick={() => setTab("partner")}
                  className={`py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    tab === "partner"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  🤝 Become a Partner
                </button>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                {/* ============ CONTACT FORM ============ */}
                {tab === "contact" && (
                  <>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                      Send Message
                    </span>
                    <h2 className="text-xl lg:text-2xl font-bold text-[#0a1535] mt-1 mb-1">
                      Drop Us a Line
                    </h2>
                    <p className="text-xs text-slate-500 mb-6">
                      Fill the form and we'll get back to you within 24 hours.
                    </p>

                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                            Full Name *
                          </label>
                          <input
                            required
                            type="text"
                            value={contactForm.name}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                name: e.target.value,
                              })
                            }
                            placeholder="John Doe"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                            Email *
                          </label>
                          <input
                            required
                            type="email"
                            value={contactForm.email}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                email: e.target.value,
                              })
                            }
                            placeholder="you@example.com"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            value={contactForm.phone}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+91 98765 43210"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                            Subject *
                          </label>
                          <select
                            required
                            value={contactForm.subject}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                subject: e.target.value,
                              })
                            }
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                          >
                            <option value="">Select a topic</option>
                            <option value="loan">Loan Inquiry</option>
                            <option value="emi">EMI Related</option>
                            <option value="credit-score">Credit Score</option>
                            <option value="account">Account Help</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={contactForm.message}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              message: e.target.value,
                            })
                          }
                          placeholder="Tell us how we can help..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitted}
                        className={`w-full font-semibold py-3 rounded-lg transition-all shadow-lg text-sm ${
                          submitted
                            ? "bg-green-500 text-white cursor-not-allowed"
                            : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:scale-[1.02] active:scale-[0.98] shadow-blue-600/30"
                        }`}
                      >
                        {submitted ? "✓ Message Sent!" : "Send Message →"}
                      </button>

                      <p className="text-[10px] text-slate-400 text-center">
                        By submitting, you agree to our Terms & Privacy Policy.
                      </p>
                    </form>
                  </>
                )}

                {/* ============ PARTNER FORM ============ */}
                {tab === "partner" && (
                  <>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                      Partnership
                    </span>
                    <h2 className="text-xl lg:text-2xl font-bold text-[#0a1535] mt-1 mb-1">
                      Become Our Partner
                    </h2>
                    <p className="text-xs text-slate-500 mb-6">
                      Are you a bank, NBFC, DSA, or fintech? Let's grow
                      together.
                    </p>

                    <form onSubmit={handlePartnerSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                            Company Name *
                          </label>
                          <input
                            required
                            type="text"
                            value={partnerForm.companyName}
                            onChange={(e) =>
                              setPartnerForm({
                                ...partnerForm,
                                companyName: e.target.value,
                              })
                            }
                            placeholder="ABC Finance Pvt. Ltd."
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                            Contact Person *
                          </label>
                          <input
                            required
                            type="text"
                            value={partnerForm.contactPerson}
                            onChange={(e) =>
                              setPartnerForm({
                                ...partnerForm,
                                contactPerson: e.target.value,
                              })
                            }
                            placeholder="Your full name"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                            Business Email *
                          </label>
                          <input
                            required
                            type="email"
                            value={partnerForm.email}
                            onChange={(e) =>
                              setPartnerForm({
                                ...partnerForm,
                                email: e.target.value,
                              })
                            }
                            placeholder="business@company.com"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                            Phone *
                          </label>
                          <input
                            required
                            type="tel"
                            value={partnerForm.phone}
                            onChange={(e) =>
                              setPartnerForm({
                                ...partnerForm,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+91 98765 43210"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                            Website
                          </label>
                          <input
                            type="url"
                            value={partnerForm.website}
                            onChange={(e) =>
                              setPartnerForm({
                                ...partnerForm,
                                website: e.target.value,
                              })
                            }
                            placeholder="https://company.com"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                            City *
                          </label>
                          <input
                            required
                            type="text"
                            value={partnerForm.city}
                            onChange={(e) =>
                              setPartnerForm({
                                ...partnerForm,
                                city: e.target.value,
                              })
                            }
                            placeholder="Mumbai"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                          Partner Type *
                        </label>
                        <select
                          required
                          value={partnerForm.partnerType}
                          onChange={(e) =>
                            setPartnerForm({
                              ...partnerForm,
                              partnerType: e.target.value,
                            })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                        >
                          <option value="">Select partner type</option>
                          <option value="bank">Bank</option>
                          <option value="nbfc">NBFC</option>
                          <option value="dsa">DSA / Agent</option>
                          <option value="fintech">Fintech Platform</option>
                          <option value="broker">Broker</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                          Tell Us About Your Business *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={partnerForm.message}
                          onChange={(e) =>
                            setPartnerForm({
                              ...partnerForm,
                              message: e.target.value,
                            })
                          }
                          placeholder="Share your business model, client base, and what kind of partnership you're looking for..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitted}
                        className={`w-full font-semibold py-3 rounded-lg transition-all shadow-lg text-sm ${
                          submitted
                            ? "bg-green-500 text-white cursor-not-allowed"
                            : "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white hover:scale-[1.02] active:scale-[0.98] shadow-emerald-600/30"
                        }`}
                      >
                        {submitted
                          ? "✓ Application Submitted!"
                          : "Submit Partnership Request →"}
                      </button>

                      <p className="text-[10px] text-slate-400 text-center">
                        Our partnership team reviews applications within 2-3
                        business days.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* RIGHT: Map + Info */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-[280px]">
                <iframe
                  title="BheemLoan Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8865158297165!2d77.6396!3d12.9121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzQzLjYiTiA3N8KwMzgnMjIuNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Office Card */}
              <div className="bg-gradient-to-br from-[#0a1535] to-[#1e3a8a] rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                <div className="relative">
                  <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">
                    Head Office
                  </span>
                  <h3 className="font-bold text-lg mt-1 mb-3">
                    BheemLoan Services Pvt. Ltd.
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div className="flex items-start gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        📍
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        No. 1187, Bhagwati, 5th Main, 21st Cross Rd,
                        <br />
                        7th Sector, HSR Layout, Bengaluru,
                        <br />
                        Karnataka 560102
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        ✉️
                      </span>
                      <p className="text-slate-300">info@bheemloan.com</p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        🕐
                      </span>
                      <p className="text-slate-300">
                        Mon-Sat · 9 AM - 9 PM IST
                      </p>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="flex gap-2 mt-5 pt-5 border-t border-white/10">
                    {["X", "in", "f", "ig", "yt"].map((s, i) => (
                      <button
                        key={i}
                        className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK FAQ
      ========================================================= */}
      <section className="py-12 px-4 sm:px-8 lg:px-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-xl lg:text-2xl font-bold text-[#0a1535] mt-1">
              Quick Answers
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-slate-50 rounded-xl border border-slate-200 p-4 hover:border-blue-400 transition"
              >
                <summary className="cursor-pointer flex items-center justify-between text-sm font-semibold text-[#0a1535]">
                  {f.q}
                  <span className="text-blue-600 group-open:rotate-45 transition-transform text-lg">
                    +
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA STRIP
      ========================================================= */}
      <section className="bg-gradient-to-r from-blue-600 to-[#0a1535] py-10 px-4 sm:px-8 lg:px-16 text-white">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-lg lg:text-xl font-bold">
              Still have questions?
            </h3>
            <p className="text-blue-100 text-xs mt-1">
              Talk to our loan experts — free consultation, no obligation.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white text-blue-700 font-bold text-sm px-5 py-2.5 rounded-lg hover:scale-105 transition shadow-lg">
              📞 Call Now
            </button>
            <button className="bg-white/10 border border-white/30 backdrop-blur text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white/20 transition">
              💬 Live Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
