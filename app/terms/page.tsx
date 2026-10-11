import Link from "next/link";

export default function TermsPage() {
  const sections = [
    {
      id: "1-eligibilitycondition-precedent",
      title: "1. Eligibility / Condition Precedent",
    },
    { id: "2-account-set-up", title: "2. Account Set Up" },
    { id: "3-service", title: "3. Service" },
    { id: "4-limited-warranty", title: "4. Limited Warranty" },
    { id: "5-confidential-information", title: "5. Confidential Information" },
    { id: "6-limitation-of-liability", title: "6. Limitation of Liability" },
    { id: "7-indemnity", title: "7. Indemnity" },
    { id: "8-privacy", title: "8. Privacy" },
    { id: "9-assignment", title: "9. Assignment" },
    {
      id: "10-arbitration-and-governing-law",
      title: "10. Arbitration and Governing Law",
    },
    { id: "11-notices", title: "11. Notices" },
    { id: "12-severability", title: "12. Severability" },
    { id: "13-waiver", title: "13. Waiver" },
    { id: "14-force-majeure", title: "14. Force Majeure" },
    {
      id: "15-other-products-and-services-terms-of-use",
      title: "15. Other Products & Services",
    },
    {
      id: "16-credit-card-other-financial-services",
      title: "16. Credit Card & Financial Services",
    },
    { id: "17-entire-agreement", title: "17. Entire Agreement" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ================= HERO HEADER ================= */}
      <section className="bg-gradient-to-br from-[#0a1535] via-[#132a5c] to-emerald-800 text-white py-14 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative text-center">
          <span className="inline-block bg-white/10 border border-white/20 backdrop-blur text-emerald-200 text-[11px] font-semibold px-3 py-1 rounded-full">
            📄 Legal
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-3">
            Terms & Conditions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Please read these Terms carefully before using KeshvaCredit's platform
            and services. Your continued use constitutes acceptance.
          </p>
          <p className="text-[11px] text-slate-400 mt-3">
            Last updated:{" "}
            <span className="text-emerald-300 font-semibold">3 Sep 2026</span>
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* ============ LEFT: Sticky Table of Contents ============ */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-4">
                On This Page
              </h3>
              <nav className="space-y-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-[11px] text-slate-500 hover:text-emerald-600 hover:border-l-2 hover:border-emerald-500 hover:pl-2 transition-all leading-snug py-0.5"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ============ RIGHT: Content ============ */}
          <article className="lg:col-span-3 order-1 lg:order-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {/* Intro */}
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              In consideration of BVALUE Services Private Limited (hereinafter
              referred to as "KeshvaCredit", which expression shall include where
              appropriate its affiliates, successors and assigns), the user
              agrees to be bound by these Terms and Conditions as amended,
              supplemented and or superseded by KeshvaCredit from time to time.
            </p>

            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              These Terms and Conditions/Terms of Service apply to any kind of
              loan, including but not limited to the following Loans:
            </p>

            <ul className="list-disc list-inside ml-4 mb-4 space-y-1.5 text-sm text-slate-600">
              <li>
                <Link
                  href="/loans/personal"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/loans/two-wheeler"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Vehicle Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/loans/consumer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Consumer Loan
                </Link>
              </li>
              <li>
                Other Loans [viz.{" "}
                <Link
                  href="/loans/gold"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Gold Loan
                </Link>
                ,{" "}
                <Link
                  href="/loans/home"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Home Loan
                </Link>
                ,{" "}
                <Link
                  href="/loans/business"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Business Loan
                </Link>
                ,{" "}
                <Link
                  href="/loans/marriage"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Marriage Loan
                </Link>
                ,{" "}
                <Link
                  href="/loans/medical"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Medical Loan
                </Link>
                ]
              </li>
            </ul>

            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              These terms of use (hereinafter the "Terms") establish an
              agreement between KeshvaCredit, having its principal place of
              business at 21st Cross, 7th Sector, HSR Layout, Bangalore –
              560102, and you and shall govern your use of the KeshvaCredit
              proprietary risk evaluation and measurement software system
              ("KeshvaCredit System") and the services set out in these Terms
              ("Service") rendered by KeshvaCredit.
            </p>

            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              Supplemental terms may apply to specific Services, for example,
              arrangements for a specific occasion, movement or advancement, and
              such supplemental terms will be uncovered to you regarding the
              appropriate Service(s). Supplemental terms are in addition to, and
              shall be deemed a part of, these Terms for the purposes of the
              applicable Service(s). Supplemental and/or amended terms shall
              prevail over these Terms in the event of a conflict with respect
              to the applicable Services.
            </p>

            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              BVALUE Services Private Limited may, at its sole discretion, amend
              the Terms from time to time. Unless otherwise set out herein,
              amendments will be effective upon KeshvaCredit's posting of such
              updated Terms at this location or the amended policies or
              supplemental terms on the applicable Service(s). Your continued
              access or use of the Services after such posting constitutes your
              consent to be bound by the Terms, as amended.
            </p>

            {/* ============ SECTION 1 ============ */}
            <h2
              id="1-eligibilitycondition-precedent"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              1. ELIGIBILITY / CONDITION PRECEDENT
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              KeshvaCredit may grant or continue to grant the loan to the borrower
              if the following conditions are fulfilled or continued to be
              fulfilled. If you are an individual, you must be at least 18 years
              old. If you are a non-individual, you must be duly authorized (by
              such non-individual entity) to agree to these Terms.
            </p>
            <ul className="list-disc list-inside ml-4 mb-4 space-y-2 text-sm text-slate-600">
              <li className="leading-relaxed pl-1">You must be a solvent.</li>
              <li className="leading-relaxed pl-1">
                Notwithstanding the aforesaid, you represent and warrant that
                you are capable of entering into these Terms and performing the
                obligations set out here under.
              </li>
              <li className="leading-relaxed pl-1">
                You must be citizen of India.
              </li>
              <li className="leading-relaxed pl-1">
                You must be a human being to enter into these Terms. Any use of
                KeshvaCredit System by 'bots' or other automated tools or methods
                is not permitted under this Agreement.
              </li>
              <li className="leading-relaxed pl-1">
                Your application form shall have been accepted by KeshvaCredit in
                the manner as prescribed by KeshvaCredit.
              </li>
              <li className="leading-relaxed pl-1">
                All the required documents legal or otherwise as may be required
                by KeshvaCredit, shall have been completed and signed to the
                satisfaction of KeshvaCredit.
              </li>
              <li className="leading-relaxed pl-1">
                All the primary and secondary evidence of the document as
                demanded by KeshvaCredit must be duly furnished.
              </li>
              <li className="leading-relaxed pl-1">
                There shall exist no potential event for default and all
                representations and warranties contained herein and in the
                application form and in the loan agreement or elsewhere shall be
                true.
              </li>
              <li className="leading-relaxed pl-1">
                All other conditions precedent as KeshvaCredit may require or
                impose have been fulfilled to the satisfaction of KeshvaCredit or
                otherwise have been duly compiled with.
              </li>
            </ul>

            {/* ============ SECTION 2 ============ */}
            <h2
              id="2-account-set-up"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              2. ACCOUNT SET UP
            </h2>
            <ul className="list-disc list-inside ml-4 mb-4 space-y-2 text-sm text-slate-600">
              <li className="leading-relaxed pl-1">
                Account registration requires you to submit certain information
                such as your name, address, mobile phone number and age and any
                unique identifier that may be issued to you by KeshvaCredit.
              </li>
              <li className="leading-relaxed pl-1">
                You agree that you have provided from start and maintained
                accurate, complete, and up-to-date information in your Account.
                Your failure to maintain accurate, complete, and up-to-date
                Account information may result in your inability to access and
                use KeshvaCredit Systems and/or the Services and/or the final
                referral for banking or financial that you seek or result in
                KeshvaCredit' termination of this agreement with you.
              </li>
              <li className="leading-relaxed pl-1">
                Solely You are responsible for all activity that occurs under
                your Account, and You agree to maintain the security and secrecy
                of your Account username and password at all times.
              </li>
              <li className="leading-relaxed pl-1">
                Unless otherwise permitted by KeshvaCredit in writing, you shall
                only use and operate one Account with KeshvaCredit. You acknowledge
                and agree that any misuse of your Account for reasons not
                attributable to KeshvaCredit shall be to your account and You will
                be liable for any and all liabilities incurred as a result of
                such misuse.
              </li>
              <li className="leading-relaxed pl-1">
                You thus assent that any data put together by you for Account
                set-up might be utilized by KeshvaCredit as per the security
                approach distributed at{" "}
                <Link
                  href="/Privacy-Policy"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  privacy policy
                </Link>{" "}
                which is deemed to be part of these Terms.
              </li>
            </ul>

            {/* ============ SECTION 3 ============ */}
            <h2
              id="3-service"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              3. SERVICE
            </h2>
            <ul className="list-disc list-inside ml-4 mb-4 space-y-3 text-sm text-slate-600">
              <li className="leading-relaxed pl-1">
                The Service establishes Your entrance to KeshvaCredit System, the
                check of information you have given on the KeshvaCredit entryway
                and assessment by KeshvaCredit of your credit worthiness, and
                subject to KeshvaCredit determining (in its sole and absolute
                discretion) that it is appropriate, your ability to submit an
                application ("Credit Facility Application") for short term
                credit facility ("Advance") to a duly licensed entity who has
                partnered with KeshvaCredit ("KeshvaCredit Partner") and use of such
                other functionalities of KeshvaCredit System as permitted by
                KeshvaCredit. For the avoidance of doubt, KeshvaCredit is under no
                obligation whatsoever to reveal to you (including your nominees,
                heirs and successors) its assessment of your creditworthiness at
                any point in time.
              </li>
              <li className="leading-relaxed pl-1">
                You acknowledge that KeshvaCredit allows You to submit a Credit
                Facility Application on the basis of a determination made by and
                in such formats, methodologies and algorithms in KeshvaCredit
                Systems only.
              </li>
              <li className="leading-relaxed pl-1">
                The KeshvaCredit Systems undertake a dynamic evaluation of risk in
                relation to each Credit Facility Application submitted by You
                based on various factors including the amount of the Advance,
                the credit eligibility parameters and other requirements set out
                by the KeshvaCredit Partner. KeshvaCredit Systems may undertake a
                separate determination in relation to each Credit Facility
                Application made by you. Given the dynamic nature of the
                determination made by KeshvaCredit Systems, You acknowledge that
                there is no assurance or guarantee that KeshvaCredit shall allow
                You to submit a Credit Facility Application for each and every
                Advance that you seek to avail.
              </li>
              <li className="leading-relaxed pl-1">
                You agree and accept that KeshvaCredit or a KeshvaCredit Partner may
                in its sole discretion, by itself or through authorized persons,
                advocate, agencies, bureau, etc. verify any information given,
                check credit references, employment details, and obtain credit
                reports to determine creditworthiness from time to time.
              </li>
              <li className="leading-relaxed pl-1">
                The Service does not guarantee that the Advance sought by You
                will be disbursed to You by the KeshvaCredit Partner. KeshvaCredit
                will make a preliminary determination of Your creditworthiness
                in relation to every Advance sought by You and submit its
                determination in this regard to the KeshvaCredit Partner. The final
                decision on whether or not to grant You the Advance will rest
                with KeshvaCredit Partner and will be made using KeshvaCredit
                Partner's credit decision processes and methodologies. KeshvaCredit
                Partner is free to reject any recommendation made by KeshvaCredit
                to it about processing of a Credit Facility Application or grant
                of Advance to You.
              </li>
              <li className="leading-relaxed pl-1">
                KeshvaCredit Partner will require You to submit further
                documentation, information, and details as required under
                applicable laws and its internal policies prior to taking any
                decision about grant of Advance to You. When KeshvaCredit Partner
                decides to grant an Advance to You, it shall require that You
                execute a loan/credit facility agreement ("Loan Documentation")
                with it to record the terms of the arrangement.
              </li>
              <li className="leading-relaxed pl-1">
                <strong>Repayment:</strong> You must repay the Advance along
                with all interest, charges and fees payable to KeshvaCredit Partner
                in such manner as prescribed by KeshvaCredit Partner as and when it
                becomes due.
                <br />
                Services of KeshvaCredit is only limited to connect you to the
                credit providers and the Services of KeshvaCredit ends the moment
                the KeshvaCredit Partner is connected to You / You are connected to
                the Credit provider.
              </li>
              <li className="leading-relaxed pl-1">
                <strong>Separate Transactions:</strong> You acknowledge that an
                Advance disbursed under the Loan Documentation is a distinct
                transaction between You and KeshvaCredit Partner, independent of
                KeshvaCredit' Service. Any dispute between KeshvaCredit Partner and
                you with respect to any Advance disbursed to You, must be
                directly settled between KeshvaCredit Partner and you and that you
                will not include or seek to include KeshvaCredit in such dispute,
                failing which KeshvaCredit shall be at liberty to take any and all
                actions that may be available to it to protect its interests.
              </li>
              <li className="leading-relaxed pl-1">
                <strong>Network Access and Devices:</strong> You are responsible
                for obtaining the data network access necessary to use the
                Services. Your internet network providers (be it mobile network
                or fixed line) data usage rates and fees will apply if you
                access or use the Services from a wireless-enabled device. You
                are responsible for acquiring and updating compatible hardware
                or devices necessary to access and use the Services and
                KeshvaCredit Systems and any updates thereto. KeshvaCredit does not
                guarantee that the Services, or any portion thereof, will
                function on any particular hardware or devices. In addition, the
                Services may be subject to malfunctions and delays inherent in
                the use of the internet and electronic communications.
              </li>
            </ul>

            <h3 className="text-base font-bold text-[#0a1535] mt-6 mb-3">
              License
            </h3>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              Subject to your compliance with these Terms, KeshvaCredit grants You
              a limited, non-exclusive, revocable, non-transferable license in
              India to: (i) access and use the KeshvaCredit Systems through your PC
              Framework or other portable specialized gadget solely in
              connection with your use of the Services; and (ii) access and use
              any content, information, and related materials that may be made
              available through the Services, in each case solely for your
              personal, non-commercial use. Any rights not expressly granted
              herein are reserved by KeshvaCredit and KeshvaCredit's licensors.
            </p>

            <h3 className="text-base font-bold text-[#0a1535] mt-6 mb-3">
              Restrictions
            </h3>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              You may not:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4 space-y-2 text-sm text-slate-600">
              <li className="leading-relaxed pl-1">
                Use the Services except as expressly provided in these Terms.
              </li>
              <li className="leading-relaxed pl-1">
                Provide any third parties with access to the Services.
              </li>
              <li className="leading-relaxed pl-1">
                Use the Services to post, send, transmit or otherwise make
                available any unsolicited or unauthorized email messages,
                advertising, promotional materials, junk mail, spam, or chain
                letters.
              </li>
              <li className="leading-relaxed pl-1">
                Remove any copyright, trademark or other proprietary notices
                from any portion of the Services.
              </li>
              <li className="leading-relaxed pl-1">
                Reproduce, modify, prepare derivative works based upon,
                distribute, license, lease, sell, resell, transfer, publicly
                display, publicly perform, transmit, stream, broadcast or
                otherwise exploit the Services except as expressly permitted by
                Buddy.
              </li>
              <li className="leading-relaxed pl-1">
                Decompile, reverse engineer or disassemble the Services.
              </li>
              <li className="leading-relaxed pl-1">
                Cause or launch any programs or scripts for the purpose of
                scraping, indexing, surveying, or otherwise data mining any
                portion of the Services or unduly burdening or hindering the
                operation and/or functionality of any aspect of the Services or
                KeshvaCredit Systems or any other computer system including by
                introduction of any virus, Trojan horses, worms, time bombs or
                such material.
              </li>
              <li className="leading-relaxed pl-1">
                Attempt to gain unauthorized access to or impair any aspect of
                the Services or its related systems or networks.
              </li>
              <li className="leading-relaxed pl-1">
                Re-sell, grant any rights to third parties to the Services,
                lease, time-share, lend or rent the Services.
              </li>
              <li className="leading-relaxed pl-1">
                Use the Services to host, display, upload, modify, publish,
                transmit, update or share any information.
              </li>
            </ul>

            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              You may not use the Services to upload, post, or share any content
              that:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4 space-y-2 text-sm text-slate-600">
              <li className="leading-relaxed pl-1">
                Belongs to any other Person and to which you do not have any
                right to;
              </li>
              <li className="leading-relaxed pl-1">
                Is grossly harmful, harassing, blasphemous, defamatory, obscene,
                pornographic, paedophilic, libellous, invasive of another's
                privacy, hateful, or racially, ethnically objectionable,
                disparaging, relating or encouraging money laundering or
                gambling, or otherwise unlawful in any manner whatever;
              </li>
              <li className="leading-relaxed pl-1">
                Harms minors in any manner
              </li>
              <li className="leading-relaxed pl-1">
                Infringes any patent, trademark, copyright or other proprietary
                rights;
              </li>
              <li className="leading-relaxed pl-1">
                Violates any law which is in force
              </li>
              <li className="leading-relaxed pl-1">
                Deceives or misleads the addressee about the origin of such
                messages or communicates any information which is grossly
                offensive or menacing in nature
              </li>
              <li className="leading-relaxed pl-1">
                Impersonates another person or threatens the unity, integrity,
                defence, security or sovereignty of India, friendly relations
                with foreign states, or public order or causes incitement to the
                commission of any cognisable offence or prevents investigation
                of any offence or is insulting any other nation.
              </li>
              <li className="leading-relaxed pl-1">
                KeshvaCredit shall have the on-going right to monitor your use of
                the Services to the extent required to determine your compliance
                with the terms of these Terms.
              </li>
            </ul>

            <h3 className="text-base font-bold text-[#0a1535] mt-6 mb-3">
              User Generated Content
            </h3>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              You understand that all User Generated Content, to the extent
              permitted by the KeshvaCredit System, is the sole responsibility of
              the person from whom such User Generated Content originated. This
              means that you, and not KeshvaCredit is solely responsible for any
              User Generated Content you upload, download, post, email,
              transmit, store or otherwise make available through your Use of
              the Service. KeshvaCredit does not control the User Generated Content
              used in the Service, nor does it guarantee the accuracy, integrity
              or quality of such User Generated Content. You understand and
              agree that your Use of the Service and any User Generated Content
              is solely at your own risk.
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              User Generated Content means any information that may be generated
              or encountered through your Use of the Service, such as data
              files, device characteristics, written text, software, music,
              graphics, photographs, images, sounds, videos, messages and any
              other like materials.
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              You shall not use the Services to upload, download, post, email,
              transmit, store or otherwise make available any User Generated
              Content that is unlawful, harassing, threatening, harmful,
              tortious, defamatory, libellous, abusive, violent, obscene,
              vulgar, pornographic, explicit, invasive of another's privacy,
              hateful, racially or ethnically offensive, or otherwise
              objectionable.
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              You are responsible for backing up, to your own computer or other
              device, any important documents, images or other User Generated
              Content that you store or access via the Service. KeshvaCredit shall
              use reasonable skill and due care in providing the Service, but
              KeshvaCredit does not guarantee or warrant that any User Generated
              Content you may store or access through the Service will not be
              subject to inadvertent damage, corruption or loss.
            </p>

            {/* ============ SECTION 4 ============ */}
            <h2
              id="4-limited-warranty"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              4. LIMITED WARRANTY
            </h2>
            <ul className="list-disc list-inside ml-4 mb-4 space-y-3 text-sm text-slate-600">
              <li className="leading-relaxed pl-1">
                You understand and acknowledge that certain risks are inherent
                in the transmission of information over the internet. By
                entering in to this agreement You have chosen to use the
                security measures provided by KeshvaCredit even though other
                security measures are available. While KeshvaCredit uses industry
                standard information security measures to protect the Service
                from viruses and malicious attacks, KeshvaCredit does not represent
                or guarantee that the Service will be free from loss,
                corruption, attack, viruses, interference, hacking, or other
                security intrusion and KeshvaCredit disclaims any liability
                relating thereto to the extent that such loss, corruption,
                attack, viruses, interference, hacking, or other security
                intrusion occur despite KeshvaCredit using the information security
                measures. KeshvaCredit warrants that, during the term of this
                agreement, KeshvaCredit will employ commercially reasonable system
                security measures. Except as expressly set forth in this
                section, KeshvaCredit makes no representation, warranty, covenant
                or agreement that its security measures will be effective and
                neither KeshvaCredit nor its affiliates shall have any liability
                for the breach of its security measures, or the integrity of the
                systems or KeshvaCredit' computer servers, unless caused by the
                wilful misconduct or gross negligence of its employees.
              </li>
              <li className="leading-relaxed pl-1">
                The Services are provided to you on an "as-is" and "as available
                basis". KeshvaCredit is not responsible for any failure of the
                telecommunications network or other communications links
                utilised to gain access to the Services. KeshvaCredit does not
                represent that the Services will meet your requirements or that
                operation of the Services will be uninterrupted or error free.
              </li>
              <li className="leading-relaxed pl-1">
                You further acknowledge that the Service is not intended or
                suitable for use in situations or environments where the failure
                or time delays of, or errors or inaccuracies in, the content,
                data or information provided by the Service could lead to death,
                personal injury, or severe physical or environmental damage.
              </li>
              <li className="leading-relaxed pl-1">
                KeshvaCredit and its affiliates, subsidiaries, officers, directors,
                employees, agents, partners and licensors hereby disclaims and
                expressly waives all other, conditions, representations and
                guarantees, whether express or implied, arising by law, custom,
                oral or written statements of KeshvaCredit or third parties
                including, but not limited to, any warranty of merchantability
                or fitness for particular purpose or of error-free and
                uninterrupted use or of non-infringement except to the extent
                expressly provided above (limited warranty). In particular,
                KeshvaCredit and its affiliates, subsidiaries, officers, directors,
                employees, agents, partners and licensors make no warranty that
                (i) the service will meet your requirements. (ii) your use of
                the service will be timely, uninterrupted, secure or error-free.
              </li>
            </ul>

            {/* ============ SECTION 5 ============ */}
            <h2
              id="5-confidential-information"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              5. CONFIDENTIAL INFORMATION
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              In the course of your dealings with KeshvaCredit, either party may
              share and provide the other with access to its confidential and
              proprietary information ("Confidential Information"). Confidential
              Information may be disclosed either orally, visually, in writing
              (including graphic material) or by way of consigned items. The
              receiving party agrees to take all reasonable security
              precautions, including precautions at least as great as it takes
              to protect its own confidential information, to protect the
              secrecy of the Confidential Information. Confidential Information
              disclosed shall be treated by the receiving party as confidential
              and shall not divulge, directly or indirectly, to any other
              person, firm, corporation, association or entity, for any purpose
              whatsoever, such information, and shall not make use of such
              information, without the prior written consent of the disclosing
              party. Confidential Information includes but is not limited to the
              Services, documentation, third party materials, business plans,
              business forecasts, financial information, customer lists,
              development, design details, specifications, patents, copyrights,
              trade secrets, proprietary information, methodologies, techniques,
              sketches, drawings, models, inventions, know-how, processes,
              algorithms, software programs, and software source documents.
            </p>

            {/* ============ SECTION 6 ============ */}
            <h2
              id="6-limitation-of-liability"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              6. LIMITATION OF LIABILITY
            </h2>
            <div className="bg-rose-50 border-l-4 border-rose-500 rounded-r-lg p-4 my-4">
              <p className="text-xs text-slate-700 leading-relaxed uppercase font-medium">
                In no event shall KeshvaCredit be liable, whether in contract, tort
                (including negligence) or otherwise for any loss of profits,
                business, contracts, or revenues, loss of operation time,
                increased costs or wasted expenditure, loss of goodwill or
                reputation, special, indirect, incidental punitive or
                consequential damage of any nature whatsoever or howsoever
                arising out of this agreement.
              </p>
            </div>

            {/* ============ SECTION 7 ============ */}
            <h2
              id="7-indemnity"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              7. INDEMNITY
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              You shall defend, indemnify and hold harmless KeshvaCredit, its
              officers, directors, employees and agents, from and against any
              and all claims, damages, obligations, losses, liabilities, debts
              and costs (including reasonable attorneys' fees), brought against
              KeshvaCredit by third parties alleging that:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4 space-y-2 text-sm text-slate-600">
              <li className="leading-relaxed pl-1">
                Your use of and access of the Service.
              </li>
              <li className="leading-relaxed pl-1">
                Your violation of these Terms.
              </li>
              <li className="leading-relaxed pl-1">
                Your violation of any third party right, including without
                limitation any copyright, property, or privacy right of
                KeshvaCredit' service providers or Partner.
              </li>
              <li className="leading-relaxed pl-1">
                Any claim that the User Generated Content you submitted caused
                damage to KeshvaCredit or KeshvaCredit' Partner.
              </li>
              <li className="leading-relaxed pl-1">
                Any rules that are mandated by the central bank of India and any
                other central or state rules, laws, bylaws or regulations
                applicable to the Services hereunder to be followed. Your
                indemnification obligation under this Section 8 will survive
                termination of this Agreement and Your use of the Services.
              </li>
            </ul>

            {/* ============ SECTION 8 ============ */}
            <h2
              id="8-privacy"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              8. PRIVACY
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              You understand that by using the Service, you consent and agree to
              the collection and use of certain information about You and your
              Use of the Service in accordance with KeshvaCredit'{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Privacy Policy
              </Link>{" "}
              and these Terms. KeshvaCredit' Privacy Policy applies to all Your
              information collected under these Terms.
            </p>

            {/* ============ SECTION 9 ============ */}
            <h2
              id="9-assignment"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              9. ASSIGNMENT
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              You shall not assign this Agreement [without the prior written
              consent of KeshvaCredit].
            </p>

            {/* ============ SECTION 10 ============ */}
            <h2
              id="10-arbitration-and-governing-law"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              10. ARBITRATION AND GOVERNING LAW
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              Irrespective of Your international placement the Parties hereby
              agree that this Agreement shall be governed by and construed in
              accordance with the laws of India, without regard to its conflict
              of laws principles. Any and all disputes that arise under this
              Agreement shall be subject to the exclusive jurisdiction of the
              competent courts in Bengaluru, India.
            </p>

            {/* ============ SECTION 11 ============ */}
            <h2
              id="11-notices"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              11. NOTICES
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              All notices and other communications made or required to be given
              under this Agreement shall be in writing and shall be deemed given
              upon receipt when sent through:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4 space-y-3 text-sm text-slate-600">
              <li className="leading-relaxed pl-1">
                Personal service, to the address specified below:
                <div className="bg-slate-50 rounded-lg p-3 mt-2 text-xs leading-relaxed">
                  BVALUE Services Pvt. Ltd.
                  <br />
                  No: 1187, Bhagwati, 5th main,
                  <br />
                  21st Cross, 7th Sector,
                  <br />
                  HSR Layout, Bengaluru – 560102
                </div>
              </li>
              <li className="leading-relaxed pl-1">
                Registered post acknowledgement due, or
                <div className="bg-slate-50 rounded-lg p-3 mt-2 text-xs leading-relaxed">
                  BVALUE Services Pvt. Ltd.
                  <br />
                  No: 1187, Bhagwati, 5th main,
                  <br />
                  21st Cross, 7th Sector,
                  <br />
                  HSR Layout, Bengaluru – 560102
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:info@KeshvaCredit.com"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    info@KeshvaCredit.com
                  </a>
                </div>
              </li>
            </ul>

            {/* ============ SECTION 12 ============ */}
            <h2
              id="12-severability"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              12. SEVERABILITY
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              If any of the terms, conditions, or provisions contained in this
              Agreement are determined by any court of competent jurisdiction to
              be invalid, unlawful, or unenforceable to any extent, such term,
              condition, or provision shall to that extent be severed from the
              remaining terms, conditions, and provisions which shall continue
              to be valid to the fullest extent permitted by law under the
              lawful circumstances.
            </p>

            {/* ============ SECTION 13 ============ */}
            <h2
              id="13-waiver"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              13. WAIVER
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              No waiver of any breach of any provision of this Agreement shall
              constitute a waiver of any prior, concurrent, or subsequent breach
              of the same or any other provisions of this Agreement. Further, no
              waiver shall be effective unless made in writing and signed by an
              authorized signatory of the waiving party.
            </p>

            {/* ============ SECTION 14 ============ */}
            <h2
              id="14-force-majeure"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              14. FORCE MAJEURE
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              KeshvaCredit will not be liable to the other for failure or delay in
              the performance of Services, if such delay or failure is caused by
              strike, riot, fire, flood, natural disaster, or other similar
              cause beyond its control.
            </p>

            {/* ============ SECTION 15 ============ */}
            <h2
              id="15-other-products-and-services-terms-of-use"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              15. OTHER PRODUCTS AND SERVICES TERMS OF USE
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              Bvalue Services Private Limited provides a variety of products and
              services to our valuable users. It goes as follows:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4 space-y-3 text-sm text-slate-600">
              <li className="leading-relaxed pl-1">
                <strong>Keshva Marketplace -</strong> Keshva Marketplace is an
                electronic platform which acts as a communication bridge to
                connect our users with the sellers on the interested products
                promoted in the App. Bvalue Services Private Limited will not
                collect any amount from its app user for this service. All
                transactions done would be directly with the Seller and the App
                user on the Sellers Network and will not control over any
                element of such transactions and shall have no liability to any
                party in connection with such transactions.
              </li>
              <li className="leading-relaxed pl-1">
                <strong>Keshva Club -</strong> Keshva Club is an add-on feature to
                the KeshvaCredit users to participate in exclusive offers promoted
                by partnered clients or affiliates. Bvalue Services Pvt. Ltd.
                Will not directly sell nor any of this products, only list the
                top offers to its app users.
              </li>
              <li className="leading-relaxed pl-1">
                <strong>Keshva Trade -</strong> This is also an exclusive service
                offered to KeshvaCredit users to get connected with the best
                trading app which is signed as a partner with KeshvaCredit. Any
                interested user will be directed to the trading app partner on
                real time to get the exiting offers.
              </li>
              <li className="leading-relaxed pl-1">
                <strong>Keshva Rewards</strong> is a feature offered by Bvalue
                Services Pvt. Ltd. to its KeshvaCredit users. A user of KeshvaCredit
                will be gratified with Rs. 50 when he/she refers the KeshvaCredit
                app to someone and the referral signs up & applies for a
                personal loan through KeshvaCredit. The user can take the amount to
                their own Bank Account via NEFT or UPI. This is a promotional
                activity done by Bvalue Services Private Limited and has all the
                rights to Suspend, Discontinue the Promotion with its sole
                discretion.
              </li>
            </ul>

            {/* ============ SECTION 16 ============ */}
            <h2
              id="16-credit-card-other-financial-services"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              16. CREDIT CARD & OTHER FINANCIAL SERVICES
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              The user acknowledges and agrees that KeshvaCredit being a Digital
              Fintech Marketplace, will have the right to pass the leads of the
              interested users to partnered brands associated with{" "}
              <Link
                href="/credit-cards"
                className="text-blue-600 underline hover:text-blue-800"
              >
                credit cards
              </Link>{" "}
              and other financial products, once the user shows interest in the
              service. The user further agrees to receive communications through
              calls/SMS/emails/other modes of communication from the partnered
              banks such as Standard Chartered, HDFC, SBI, ICICI, Axis, Kotak,
              PNB, BOI, BOB, IndusInd, Yes Bank etc, and other financial
              institutions regarding the credit card and other financial
              services. Our partnered brands have the authority to call the
              concerned user and help in getting the service approval based on
              the eligibility. All financial institutions and banks have the
              right to retain and use your information as required.
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              In this context, you agree and consent to receive all
              information/reports/statements/announcements at the communication
              mode given by you.
            </p>

            {/* ============ SECTION 17 ============ */}
            <h2
              id="17-entire-agreement"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              17. ENTIRE AGREEMENT
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              These Terms along with any supplementary terms or appendage as may
              be prescribed by Keshva / KeshvaCredit Partner constitute the entire
              agreement between the parties pertaining to the subject matter
              contained herein and any addition to this or any other written or
              oral agreements existing between the parties or modifications to
              these terms shall have no force or effect unless expressly agreed
              to in writing or acknowledged in writing by Keshva.
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              KeshvaCredit is solving the fundamental problem of providing to the
              fingertips a quick, convenient and transparent access to credit in
              India.
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              Any modifications to these terms and conditions shall be updated
              on this page of KeshvaCredit with the date of update, you shall be
              required to visit the Terms and Conditions and acquaint yourself
              with the Terms and Conditions from time to time and KeshvaCredit
              shall not be liable to intimate you upon any update or
              modification of hereunder.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong className="text-blue-800">RBI Sachet Portal:</strong>{" "}
                <a
                  href="https://sachet.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  https://sachet.rbi.org.in
                </a>
              </p>
            </div>

            {/* ============ Footer note ============ */}
            <div className="mt-10 pt-6 border-t border-slate-200">
              <p className="text-xs text-slate-500">
                This Terms and conditions was last updated on:{" "}
                <strong className="text-slate-700">3 Sep 2026</strong>
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ================= CTA STRIP ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-[#0a1535] py-10 px-4 sm:px-8 lg:px-16 text-white">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-lg lg:text-xl font-bold">
              Have questions about these terms?
            </h3>
            <p className="text-blue-100 text-xs mt-1">
              Our legal team is here to help.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/Contact"
              className="bg-white text-blue-700 font-bold text-sm px-5 py-2.5 rounded-lg hover:scale-105 transition shadow-lg"
            >
              📞 Contact Us
            </Link>
            <Link
              href="/Privacy-Policy"
              className="bg-white/10 border border-white/30 backdrop-blur text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white/20 transition"
            >
              🔒 Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
