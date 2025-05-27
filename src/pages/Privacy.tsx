import React, { useRef, useEffect, useState } from "react";

// Section labels, no icons
const toc = [
  { label: "What Information Do We Collect?", id: "info" },
  { label: "How Do We Process Your Information?", id: "process" },
  { label: "What Legal Bases Do We Rely On?", id: "legal" },
  { label: "When and With Whom Do We Share Your Information?", id: "share" },
  { label: "Do We Use Cookies and Other Tracking Technologies?", id: "cookies" },
  { label: "How Long Do We Keep Your Information?", id: "retention" },
  { label: "How Do We Keep Your Information Safe?", id: "security" },
  { label: "Do We Collect Information from Minors?", id: "minors" },
  { label: "What Are Your Privacy Rights?", id: "rights" },
  { label: "Controls for Do-Not-Track Features", id: "dnt" },
  { label: "Do US Residents Have Specific Privacy Rights?", id: "us-rights" },
  { label: "Do We Make Updates to This Notice?", id: "updates" },
  { label: "How Can You Contact Us About This Notice?", id: "contact" },
  { label: "How Can You Review, Update, or Delete the Data We Collect from You?", id: "review" },
];

export default function PrivacyPolicyPage() {
  const refs = useRef({});
  const [active, setActive] = useState(toc[0].id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  // Scroll to section on ToC click
  const scrollToSection = (id) => {
    const el = refs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Highlight active ToC based on scroll
  useEffect(() => {
    const handleScroll = () => {
      let found = toc[0].id;
      for (const { id } of toc) {
        const el = refs.current[id];
        if (el && el.getBoundingClientRect().top < 180) found = id;
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#387f79] font-cormorant flex items-center justify-center px-2 py-10">
      {/* Unified card */}
      <div className="w-full max-w-6xl rounded-3xl shadow-2xl bg-[#264d49]/95 border border-[#fffbf0]/30 p-0 md:p-0 flex flex-col">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar TOC */}
          <aside className="md:w-1/3 w-full px-6 py-10 border-r border-[#fffbf0]/20 flex flex-col items-center">
            <div className="w-full">
              <h2 className="font-troye-sans text-3xl text-[#fffbf0] mb-2 tracking-wide text-center">Privacy Policy</h2>
              <p className="text-xs text-[#fffbf0]/80 font-cormorant text-center mb-7">Last updated May 12, 2025</p>
              <nav>
                <ol className="space-y-0.5">
                  {toc.map(({ label, id }, i) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className={`
                          w-full text-left rounded-lg px-3 py-2 transition-all font-cormorant text-base
                          ${active === id
                            ? "bg-[#fffbe6]/20 border-l-4 border-[#fffbf0] text-[#fffbe6] font-bold shadow"
                            : "hover:bg-[#fffbe6]/10 border-l-4 border-transparent text-[#fffbf0]/90"
                          }
                        `}
                        style={{ minHeight: "2.2rem" }}
                      >
                        <span className="font-semibold mr-1">{i + 1}.</span>{label}
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          {/* Policy Content */}
          <section className="md:w-2/3 w-full px-6 py-10 text-[#fffbf0]">
            {/* Intro */}
            <div className="mb-10">
              <p className="mb-4 text-lg leading-relaxed">
                This Privacy Notice for <span className="font-bold">Welcome Home Intl LLC</span> ("we," "us," or "our") explains how we collect, use, share, and protect your personal information when you use our Services.
              </p>
              <ul className="list-disc ml-8 text-base space-y-1.5">
                <li>
                  Visit our website at{" "}
                  <a href="http://www.welcomehomeintl.com" className="text-[#fffbe6] underline hover:text-[#fffbe6]/70 transition">
                    welcomehomeintl.com
                  </a>{" "}
                  or any related site
                </li>
                <li>Engage with us in sales, marketing, or events</li>
              </ul>
              <div className="bg-[#fffbe6]/10 border-l-4 border-[#fffbe6] px-4 py-3 my-8 rounded">
                <span className="font-bold">Questions or concerns?</span> Reading this notice will help you understand your rights. Contact us at{" "}
                <a href="mailto:info@welcomehomeintl.com" className="text-[#fffbe6] underline">
                  info@welcomehomeintl.com
                </a>
                .
              </div>
            </div>

            {/* Key Points Summary */}
            <section className="mb-10">
              <h3 className="font-troye-sans text-2xl mb-3 text-[#fffbe6] uppercase tracking-widest">Summary of Key Points</h3>
              <ul className="list-disc ml-8 space-y-2">
                <li>
                  <b>Personal information:</b> What you provide, plus device info when you use our Services.
                </li>
                <li>
                  <b>Sensitive info:</b> Only with your consent.
                </li>
                <li>
                  <b>Third party data:</b> <b className="text-green-200">No.</b>
                </li>
                <li>
                  <b>How processed:</b> Service, security, legal.
                </li>
                <li>
                  <b>Sharing:</b> Only in specific business situations.
                </li>
                <li>
                  <b>Safety:</b> Strong safeguards, but no system is 100% secure.
                </li>
                <li>
                  <b>Your rights:</b> Depending on your location, you may have privacy rights.
                </li>
              </ul>
            </section>

            <hr className="my-8 border-[#fffbf0]/20" />

            {/* Main sections */}
            {toc.map(({ label, id }, idx) => (
              <section
                key={id}
                ref={el => refs.current[id] = el}
                id={id}
                className="mb-12 scroll-mt-28"
              >
                <h3 className="font-troye-sans text-xl md:text-2xl mb-3 text-[#fffbe6] uppercase tracking-wide">
                  <span className="font-semibold">{idx + 1}.</span> {label}
                </h3>
                <PolicySection id={id} />
              </section>
            ))}

            {/* Button inside the card, aligned bottom-center */}
            <div className="flex justify-center mt-12">
              <a
                href="/"
                className="text-[#387f79] bg-[#fffbf0] px-7 py-2 rounded-full font-bd-sans hover:bg-white hover:scale-105 transition text-base shadow border border-[#fffbe6]/40"
                style={{ fontFamily: "inherit" }}
              >
                Back to Home
              </a>
            </div>

            <div className="text-center text-[#fffbf0]/60 text-xs mt-10 font-cormorant">
              &copy; Welcome Home Intl LLC 2025
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// --- PolicySection remains as before ---
function PolicySection({ id }) {
  switch (id) {
    case "info":
      return (
        <ul className="list-disc ml-8 space-y-1.5">
          <li>
            <b>Personal info you provide:</b> names, contacts, addresses, usernames, preferences, payment data, etc.
          </li>
          <li>
            <b>Sensitive info (with consent):</b> financial data.
          </li>
          <li>
            <b>Automatically collected:</b> IP address, device/browser, usage, location, cookies.
          </li>
        </ul>
      );
    case "process":
      return (
        <ul className="list-disc ml-8 space-y-1.5">
          <li>To create/manage accounts & authenticate users</li>
          <li>To deliver requested services</li>
          <li>To communicate & support you</li>
          <li>To fulfill/manage orders</li>
          <li>To enable user communications</li>
          <li>To protect individuals' vital interests</li>
        </ul>
      );
    case "legal":
      return (
        <ul className="list-disc ml-8 space-y-1.5">
          <li>Consent (where required; you can withdraw)</li>
          <li>Performance of contract</li>
          <li>Legal obligations</li>
          <li>Vital interests</li>
          <li>Other local requirements (see full policy)</li>
        </ul>
      );
    case "share":
      return (
        <p>
          We may share info only in business transfers (merger, sale, acquisition) or as required by law. No data is sold to third parties.
        </p>
      );
    case "cookies":
      return (
        <p>
          We use cookies and similar tech for security, analytics, and personalizing your experience.
          <br />
          <span className="italic">See our Cookie Notice for details or how to opt out.</span>
        </p>
      );
    case "retention":
      return (
        <p>
          We retain info as long as needed to provide Services and for legal obligations. Data is deleted or anonymized when no longer needed.
        </p>
      );
    case "security":
      return (
        <p>
          We use strong technical and organizational safeguards. <span className="italic">No system is 100% secure. Use the Services at your own risk.</span>
        </p>
      );
    case "minors":
      return (
        <p>
          No. We do not knowingly collect or market to children under 18. If you believe we have such data, contact us for immediate deletion.
        </p>
      );
    case "rights":
      return (
        <ul className="list-disc ml-8 space-y-1.5">
          <li>Review, update, or delete your data</li>
          <li>Withdraw consent at any time</li>
          <li>Opt out of marketing</li>
          <li>File complaints (EEA, UK, Switzerland)</li>
        </ul>
      );
    case "dnt":
      return (
        <p>
          We do not currently respond to DNT signals due to lack of standards. We'll update you if this changes.
        </p>
      );
    case "us-rights":
      return (
        <p>
          State laws may grant you rights to access, correct, or delete your data, and request more info. See section 11 for a breakdown by state and type of information.
        </p>
      );
    case "updates":
      return (
        <p>
          Yes, we update this policy as needed. The current version is always posted here with the revised date at the top.
        </p>
      );
    case "contact":
      return (
        <p>
          Email: <a href="mailto:info@welcomehomeintl.com" className="text-[#fffbe6] underline">info@welcomehomeintl.com</a>
          <br />
          Mail: Welcome Home Intl LLC, 30 N. Gould St. Ste N, Sheridan, WY 82801, United States
        </p>
      );
    case "review":
      return (
        <p>
          Submit a request by emailing <a href="mailto:info@welcomehomeintl.com" className="text-[#fffbe6] underline">info@welcomehomeintl.com</a> to review, update, or delete your personal info, subject to legal requirements.
        </p>
      );
    default:
      return null;
  }
}
