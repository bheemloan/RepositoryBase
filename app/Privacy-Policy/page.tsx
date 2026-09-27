import Link from "next/link";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "1-collection-and-storage-of-personal-information",
      title: "1. Collection and Storage of Personal Information",
    },
    {
      id: "2-personal-information-collected",
      title: "2. Personal Information Collected",
    },
    {
      id: "3-operating-system-specific-data-collection",
      title: "3. Operating System – Specific Data Collection",
    },
    {
      id: "4-disclosure-sharing-of-personal-information",
      title: "4. Disclosure / Sharing of Personal Information",
    },
    {
      id: "5-right-to-withdrawal-of-consent",
      title: "5. Right to Withdrawal of Consent",
    },
    { id: "6-data-security", title: "6. Data Security" },
    {
      id: "7-data-storage-and-information-security",
      title: "7. Data Storage and Information Security",
    },
    {
      id: "8-data-retention-and-destruction",
      title: "8. Data Retention and Destruction",
    },
    {
      id: "9-grievance-redressal-mechanism",
      title: "9. Grievance Redressal Mechanism",
    },
    {
      id: "10-amendment-of-privacy-policy",
      title: "10. Amendment of Privacy Policy",
    },
    {
      id: "11-jurisdiction-and-governing-laws",
      title: "11. Jurisdiction and Governing Laws",
    },
    {
      id: "12-change-in-privacy-policy",
      title: "12. Change in Privacy Policy",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ================= HERO HEADER ================= */}
      <section className="bg-gradient-to-br from-[#0a1535] via-[#132a5c] to-emerald-800 text-white py-14 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative text-center">
          <span className="inline-block bg-white/10 border border-white/20 backdrop-blur text-emerald-200 text-[11px] font-semibold px-3 py-1 rounded-full">
            🔒 Legal
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Your privacy matters to us. This policy explains how BheemLoan
            collects, uses, and protects your personal information.
          </p>
          <p className="text-[11px] text-slate-400 mt-3">
            Last updated:{" "}
            <span className="text-emerald-300 font-semibold">10 Sep 2026</span>
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
            {/* Intro Paragraphs */}
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              This Privacy Policy (hereinafter referred to as "Policy") is in
              accordance with the Information Technology Act, 2000, the
              Information Technology (Reasonable security practices and
              procedures and sensitive personal data or information) Rules,
              2011, and applicable RBI guidelines and regulations and describes
              the information collected from you (hereinafter referred to as
              "You", "Your" or "User") on Your visit to the Platform (defined
              further) and use of Platform; manner and procedure of collection
              of such information; use, storage, and disclosure of information
              collected; rights and choices available to You with respect to the
              information collected; and how BValue Services Private Limited
              (hereinafter "BheemLoan", "We", "Us") including online platform(s)
              www.bheemloan.com and "BheemLoan" (Mobile Application)
              (Collectively "Platform").
            </p>

            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              This Policy constitutes a legal agreement between You as the User
              of the Platform, and BValue Services Private Limited as the owner
              of the Platform. For clarity, User shall mean any person, who
              visits, uses and/or transacts through the Platform. You are
              permitted to use the Services available on the Platform only if
              you are a natural person, a citizen of India, and at least
              eighteen (18) years of age.
            </p>

            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              By visiting or accessing the Platform and voluntarily providing Us
              with information, including, but not limited to, personal
              information and sensitive personal information, You are consenting
              to Our use of the information in accordance with this Policy.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 my-6">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong className="text-amber-800">Disclaimer:</strong> We
                reserve the right to modify this Policy at any time and update
                this Policy from time to time, so please review this Policy
                frequently to understand the latest policy adopted by Us.
                Changes and modifications to this Policy will take effect
                immediately upon posting on the Platform. Any continued use of
                the Services shall signify Your acceptance of such updated
                Policy.
              </p>
            </div>

            <div className="bg-rose-50 border-l-4 border-rose-500 rounded-r-lg p-4 my-6">
              <p className="text-sm font-bold text-rose-800 leading-relaxed">
                IF YOU DO NOT AGREE WITH THE{" "}
                <Link
                  href="/terms"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  TERMS AND CONDITIONS
                </Link>{" "}
                OF THIS POLICY, PLEASE DO NOT USE OR ACCESS THIS PLATFORM.
              </p>
            </div>

            {/* ============ SECTION 1 ============ */}
            <h2
              id="1-collection-and-storage-of-personal-information"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              1. COLLECTION AND STORAGE OF PERSONAL INFORMATION
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              Personal Information collected from the Users is securely stored
              at servers located in India by BValue Services Private Limited. We
              use reasonable safeguards to preserve the veracity and security of
              the information collected against loss, theft, unauthorised
              access, disclosure, reproduction, use or amendment. To achieve the
              same, We use reasonable security practices and procedures as
              mandated under applicable laws for the protection of Your
              information. However, You understand and accept that there's no
              guarantee that data transmission over the Internet will be
              completely secure and that any information that You transmit to Us
              is at Your own risk. We assume no liability for any disclosure of
              information due to transmission errors, unauthorized third-party
              access to our Platform and databases, or other acts of third
              parties, or acts or omissions beyond our reasonable control and
              You shall not be entitled to hold BheemLoan responsible for any
              breach of security.
            </p>

            {/* ============ SECTION 2 ============ */}
            <h2
              id="2-personal-information-collected"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              2. PERSONAL INFORMATION COLLECTED
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              In order to provide you with a smooth and secure journey on our
              Platform, we collect your personal information including but not
              limited to the following:
            </p>
            <ol className="list-decimal list-inside ml-4 mb-4 space-y-2 text-sm text-slate-600">
              <li className="leading-relaxed pl-1">
                All information uploaded by the User on our Platform at the time
                of registration. This includes your personal information like
                first name, last name, email address, date of birth, mobile
                number, address with PIN Code.
              </li>
              <li className="leading-relaxed pl-1">
                BheemLoan is a Digital Fintech Marketplace that has partnered
                with RBI-approved lending partners listed on our{" "}
                <Link
                  href="/our-lenders"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Android
                </Link>{" "}
                and{" "}
                <Link
                  href="/our-lenders"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  iOS
                </Link>{" "}
                applications to facilitate their lending business. BheemLoan
                helps its users to connect with these RBI-approved lenders
                thereby enabling You to avail products offered by the Lending
                Partners such as{" "}
                <Link
                  href="/loans"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  loans
                </Link>{" "}
                and{" "}
                <Link
                  href="/credit-cards"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  credit cards
                </Link>{" "}
                (Android, not applicable for iOS) among other financial
                products, which shall vary from partner to partner. We collect
                the following information from You{" "}
                <b>with Your explicit consent</b> for processing Your{" "}
                <Link
                  href="/loans/personal"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  loan application
                </Link>
                :
                <ol className="list-decimal list-inside ml-6 mt-2 space-y-1.5 text-sm text-slate-600">
                  <li className="leading-relaxed pl-1">Education details,</li>
                  <li className="leading-relaxed pl-1">Details of parents,</li>
                  <li className="leading-relaxed pl-1">
                    House ownership details,
                  </li>
                  <li className="leading-relaxed pl-1">
                    Salary account details,
                  </li>
                  <li className="leading-relaxed pl-1">
                    Name of the bank where You have a primary account,
                  </li>
                  <li className="leading-relaxed pl-1">
                    Details regarding Your employment, comprising of years of
                    experience,
                  </li>
                  <li className="leading-relaxed pl-1">Details of income,</li>
                  <li className="leading-relaxed pl-1">
                    Name of the current and previous employers,
                  </li>
                  <li className="leading-relaxed pl-1">
                    Details regarding the years/months completed with the
                    current employer
                  </li>
                  <li className="leading-relaxed pl-1">
                    <strong>SMS:</strong>
                    <ol className="list-decimal list-inside ml-6 mt-2 space-y-1.5">
                      <li className="leading-relaxed pl-1">
                        <b>Android Devices:</b> We collect and monitor only your
                        financial/transaction SMS, to determine your
                        creditworthiness and the purpose of your loan
                        application. No personal SMS data is read or stored. We
                        may also use this information collected from you/your
                        mobile device to carry out data analytics to improve the
                        user experience, enhance performance, and accomplish
                        desired results. When we use your data to carry out data
                        analytics etc., we generally pseudonymize/ anonymize
                        your data to uphold your privacy. Data is collected once
                        explicit consent is provided from your end which can be
                        revoked anytime. The data collected is retained for a
                        maximum period of 90 days, post which it is
                        automatically deleted, and if the user unsubscribes or
                        withdraws consent, all associated data is permanently
                        removed.
                      </li>
                      <li className="leading-relaxed pl-1">
                        <b>iOS Devices:</b> We do not collect, access, read,
                        store, or process SMS messages from iOS devices.
                      </li>
                    </ol>
                  </li>
                  <li className="leading-relaxed pl-1">
                    <strong>Location Permission:</strong> This app collects your
                    location details (only once) to verify serviceability,
                    determine eligibility for financial services, and detect
                    unusual activity to prevent fraud. Location data is used
                    only at the time of verification and is not collected when
                    the app is running in the background. No collection occurs
                    until you provide explicit consent.
                  </li>
                  <li className="leading-relaxed pl-1">
                    <strong>Device Permission:</strong> This app collects
                    information about your device (only once) such as hardware
                    model, operating system version, and unique identifiers.
                    This data helps prevent fraud by ensuring that only
                    authorized devices access your account.
                  </li>
                  <li className="leading-relaxed pl-1">
                    KYC: We shall seek a <strong>'one-time access'</strong> of
                    the camera for selfies/photos for KYC and collect KYC
                    documents; and
                  </li>
                  <li className="leading-relaxed pl-1">
                    Any other information as required by the RBI-approved
                    lenders.
                  </li>
                </ol>
              </li>
            </ol>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              Except as explicitly mentioned in this policy, we do not access or
              collect any mobile phone resources such as files, media, contact
              lists, call logs, telephony functions, or biometric data.
            </p>

            {/* ============ SECTION 3 ============ */}
            <h2
              id="3-operating-system-specific-data-collection"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              3. OPERATING SYSTEM – SPECIFIC DATA COLLECTION
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              We collect Installed Applications Data differently based on your
              device operating system.
            </p>

            <h3 className="text-base font-bold text-[#0a1535] mt-5 mb-2">
              1.1 Android Devices
            </h3>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              On Android devices, we may collect package names/application
              identifiers of installed or visible apps, subject to Android
              permissions and system restrictions. This is used only for fraud
              detection, risk assessment, security verification, and loan
              eligibility assessment.
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              We comply with Android's package visibility rules and collect only
              the minimum data required. We do not access app content.
              <br />
              <strong>Consent (Android):</strong> We will obtain your explicit
              consent before collecting this data where required. You may accept
              or deny, but denial may limit certain services.
            </p>

            <h3 className="text-base font-bold text-[#0a1535] mt-5 mb-2">
              1.2 iOS Devices
            </h3>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              On iOS devices, we collect application-related information only if
              and to the extent technically permitted by Apple's system and
              APIs. We do not attempt to access a full list of installed apps if
              not allowed by iOS.
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              Any data collected is used only for fraud detection, risk
              assessment, security verification, and loan eligibility
              assessment.
              <br />
              <strong>Consent (iOS):</strong> We will request clear consent
              before collecting any such data where applicable. You may withdraw
              consent at any time.
            </p>

            <h3 className="text-base font-bold text-[#0a1535] mt-5 mb-2">
              2. Consent Summary
            </h3>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              We collect Installed Applications Data only after clear, informed,
              and separate consent, and only for:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4 space-y-1.5 text-sm text-slate-600">
              <li className="leading-relaxed pl-1">Fraud detection</li>
              <li className="leading-relaxed pl-1">
                Risk & security assessment
              </li>
              <li className="leading-relaxed pl-1">
                Loan eligibility evaluation
              </li>
            </ul>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              You may refuse or withdraw consent, but some services may not
              function properly without it.
            </p>

            {/* ============ SECTION 4 ============ */}
            <h2
              id="4-disclosure-sharing-of-personal-information"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              4. DISCLOSURE / SHARING OF PERSONAL INFORMATION
            </h2>
            <ol className="list-decimal list-inside ml-4 mb-4 space-y-3 text-sm text-slate-600">
              <li className="leading-relaxed pl-1">
                <strong>With Lending Partners:</strong> Personal Information
                collected from You is shared with our 'RBI-approved lending
                partners listed on our{" "}
                <Link
                  href="/our-lenders"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Android
                </Link>{" "}
                and{" "}
                <Link
                  href="/our-lenders"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  iOS
                </Link>{" "}
                applications, and credit bureaus' for the purpose of completing
                your application. We shall collect information for application
                processing as mentioned in this Clause upon seeking Your{" "}
                <strong>"explicit consent"</strong>.
              </li>
              <li className="leading-relaxed pl-1">
                <strong>Marketing and Promotional Purpose:</strong> At the time
                of registering on the Platform, Users have to provide their
                mobile number and email address for OTP. Hence, by registering
                you authorize BheemLoan to send texts and email alerts to you
                with your login details and any other service requirements,
                including promotional mails and SMS, even if you have registered
                yourself under DND or DNC or NCPR services. Your authorization
                shall be valid as long as your account is not deactivated or
                unless you withdraw your consent. If You wish to withdraw your
                consent, please feel free to reach out to{" "}
                <a
                  href="mailto:info@bheemloan.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  info@bheemloan.com
                </a>{" "}
                requesting the same.
              </li>
              <li className="leading-relaxed pl-1">
                <strong>Disclosure to Third Parties:</strong> We do not share
                your Personal Information with any third parties for commercial
                purposes which is contrary to, or otherwise violates this
                Policy. Notwithstanding the foregoing, We may share the
                information collected with our 'RBI-approved lending partners
                listed on our{" "}
                <Link
                  href="/our-lenders"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Android
                </Link>{" "}
                and{" "}
                <Link
                  href="/our-lenders"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  iOS
                </Link>{" "}
                applications', Affiliates, employees, and Service Providers, for
                the purposes as set forth in this Policy.
              </li>
            </ol>

            {/* ============ SECTION 5 ============ */}
            <h2
              id="5-right-to-withdrawal-of-consent"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              5. RIGHT TO WITHDRAWAL OF CONSENT
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              BheemLoan respects Your rights over your Personal Information. If
              during any time, you feel that we do not require the retention of
              your personal information or if you ask us to delete or remove
              your personal information, we shall do the same without asking any
              further questions. You can unsubscribe from BheemLoan by clicking
              on the given link:{" "}
              <Link
                href="/unsubscribe"
                className="text-blue-600 underline hover:text-blue-800 font-bold"
              >
                BheemLoan Unsubscribe
              </Link>
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              <strong>Note:</strong> We request that you review the information
              you have provided. If any information is inaccurate, incomplete,
              or outdated, you have the right to submit corrected details to us.
              Upon receiving your notification, we will promptly update our
              records within one (1) month. To help us offer you effective
              services, please ensure that the information you provide is always
              accurate and up-to-date.
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              Please note that we disclaim all responsibility for the
              authenticity of the information you provide to us.
            </p>

            {/* ============ SECTION 6 ============ */}
            <h2
              id="6-data-security"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              6. DATA SECURITY
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              BheemLoan understands the importance of one's personal information
              and thereby always uses the highest applicable standard to protect
              the information collected from You. We have put in place
              appropriate security measures to deal with any suspected data
              security breach. However, Users are aware that no information
              transmitted over the internet is safe and there is always a chance
              of breach of such data even when the highest security is in place.
              Therefore, we cannot guarantee its absolute security. Further, you
              are responsible for maintaining the confidentiality and security
              of your login id and password and must refrain from sharing your
              credentials with any third party.
            </p>

            {/* ============ SECTION 7 ============ */}
            <h2
              id="7-data-storage-and-information-security"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              7. DATA STORAGE AND INFORMATION SECURITY
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              The information provided by the User is stored in access
              controlled facilities with restricted access. User information
              transmitted over the internet is protected through the use of
              encryption, using the Secure Socket Layer (SSL) or equivalent
              protocols. We store and process your personal information on
              Google Cloud Platform (GCP) cloud infrastructure. To ensure the
              security and integrity of your data, we implement a range of
              safeguards, including firewalls, encryption of data via SSL, and
              access authorization controls. These measures help protect your
              information against loss, theft, unauthorized access, disclosure,
              modification, or misuse.
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              Our security practices align with applicable laws and industry
              standards to safeguard your information. We maintain a
              comprehensive information security policy that includes
              managerial, technical, operational, and physical controls to
              ensure data protection at all levels.
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              Please note, all information you provide to us is stored on
              servers located in India.
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              In the event of a security breach involving your information, we
              will take all necessary steps to prevent further misuse and
              mitigate any potential risks. We will also make reasonable efforts
              to notify you electronically, so you can take appropriate action
              to protect your interests.
            </p>

            {/* ============ SECTION 8 ============ */}
            <h2
              id="8-data-retention-and-destruction"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              8. DATA RETENTION AND DESTRUCTION
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              We take reasonable steps to ensure that your information is
              retained only for as long as necessary to fulfil the purpose for
              which it was collected, or longer if required by applicable law,
              with appropriate safeguards in place.
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              Additionally, all other information collected and stored is
              anonymized and aggregated in an irreversible manner. By providing
              your information, you explicitly consent to our use of such
              anonymized data for analytical and other purposes, without
              restriction, except as required by applicable law.
            </p>

            {/* ============ SECTION 9 ============ */}
            <h2
              id="9-grievance-redressal-mechanism"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              9. GRIEVANCE REDRESSAL MECHANISM
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              BValue Service Private Limited has appointed a Grievance Redressal
              Officer who shall be available to redress customer grievances
              relating to any digital lending-related complaints and any such
              disputes arising out of this Privacy Policy.
            </p>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              The name and contact details of the Grievance Redressal Officer
              are provided below:
            </p>
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 mb-4 text-sm text-slate-700 leading-relaxed">
              <p>
                <strong>Name:</strong> Piyush Kumar
              </p>
              <p className="mt-1.5">
                <strong>Address:</strong> No. 1187, Bhagwati, 2nd Floor, 5th
                Main, 21st Cross, HSR Layout, Sector-7, Bengaluru – 560102,
                Karnataka
              </p>
              <p className="mt-1.5">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:nodal.officer@bheemloan.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  nodal.officer@bheemloan.com
                </a>
              </p>
              <p className="mt-1.5">
                <strong>Phone Number:</strong> +91-9632016942
              </p>
              <p className="mt-3 text-xs text-slate-500 italic">
                <strong>N.B:</strong> Request You to give us 48-72 hrs to
                resolve your complaint.
              </p>
            </div>

            {/* ============ SECTION 10 ============ */}
            <h2
              id="10-amendment-of-privacy-policy"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              10. AMENDMENT OF PRIVACY POLICY
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              This Privacy Policy is subject to modification and/or change at
              the sole discretion of BheemLoan. All such modifications shall be
              strictly in line with the RBI requirements and guidelines issued
              from time to time.
            </p>

            {/* ============ SECTION 11 ============ */}
            <h2
              id="11-jurisdiction-and-governing-laws"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              11. JURISDICTION AND GOVERNING LAWS
            </h2>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
              BValue Services Private Limited is having its registered office in
              Bengaluru, Karnataka. For any such dispute arising out of this
              Policy, the Courts at Bengaluru, Karnataka shall have the
              exclusive jurisdiction to try such dispute.
            </p>

            {/* ============ SECTION 12 ============ */}
            <h2
              id="12-change-in-privacy-policy"
              className="text-xl font-bold text-[#0a1535] mt-8 mb-4 leading-tight scroll-mt-24"
            >
              12. CHANGE IN PRIVACY POLICY
            </h2>
            <ol className="list-decimal list-inside ml-4 mb-4 space-y-3 text-sm text-slate-600">
              <li className="leading-relaxed pl-1">
                BheemLoan will periodically inform its users, at least once
                every year, of its rules and regulations, privacy policy or user
                agreement or any change in this respect; and
              </li>
              <li className="leading-relaxed pl-1">
                BheemLoan will periodically inform its users, at least once
                every year, that in case of non-compliance by its users with
                rules and regulations, privacy policy or user agreement,
                BheemLoan reserves the right to terminate the access or usage
                rights of the users to its platform and/ or remove any
                information on its platform which does not comply with the
                Information Technology.
              </li>
            </ol>

            {/* ============ Footer note ============ */}
            <div className="mt-10 pt-6 border-t border-slate-200">
              <p className="text-xs text-slate-500">
                This Privacy Policy was last updated on:{" "}
                <strong className="text-slate-700">10 Sep 2026</strong>
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
              Have questions about your data?
            </h3>
            <p className="text-blue-100 text-xs mt-1">
              Our privacy team is here to help.
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
              href="/terms"
              className="bg-white/10 border border-white/30 backdrop-blur text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white/20 transition"
            >
              📄 Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
