import React, { useRef, useEffect, useState } from "react";

// Table of Contents for Terms
const toc = [
  { label: "Interpretation and Definitions", id: "definitions" },
  { label: "Acknowledgment", id: "acknowledgment" },
  { label: "Links to Other Websites", id: "links" },
  { label: "Termination", id: "termination" },
  { label: "Limitation of Liability", id: "liability" },
  { label: "\"AS IS\" and \"AS AVAILABLE\" Disclaimer", id: "disclaimer" },
  { label: "Governing Law", id: "law" },
  { label: "Disputes Resolution", id: "disputes" },
  { label: "For European Union (EU) Users", id: "eu" },
  { label: "United States Legal Compliance", id: "us-compliance" },
  { label: "Severability and Waiver", id: "severability" },
  { label: "Translation Interpretation", id: "translation" },
  { label: "Changes to These Terms and Conditions", id: "changes" },
  { label: "Contact Us", id: "contact" },
];

export default function TermsPage() {
  const refs = useRef({});
  const [active, setActive] = useState(toc[0].id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  // Scroll to section
  const scrollToSection = (id) => {
    const el = refs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Highlight ToC on scroll
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
      <div className="w-full max-w-6xl rounded-3xl shadow-2xl bg-[#264d49]/95 border border-[#fffbf0]/30 flex flex-col">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar TOC */}
          <aside className="md:w-1/3 w-full px-6 py-10 border-r border-[#fffbf0]/20 flex flex-col items-center">
            <div className="w-full">
              <h2 className="font-troye-sans text-3xl text-[#fffbf0] mb-2 tracking-wide text-center">Terms &amp; Conditions</h2>
              <p className="text-xs text-[#fffbf0]/80 font-cormorant text-center mb-7">Last updated May 22, 2025</p>
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

          {/* Main Content */}
          <section className="md:w-2/3 w-full px-6 py-10 text-[#fffbf0]">
            <div className="mb-10">
              <p className="mb-4 text-lg leading-relaxed">
                Please read these terms and conditions carefully before using Our Service.
              </p>
            </div>

            {toc.map(({ label, id }, idx) => (
              <section
                key={id}
                ref={el => refs.current[id] = el}
                id={id}
                className="mb-10 scroll-mt-28"
              >
                <h3 className="font-troye-sans text-xl md:text-2xl mb-3 text-[#fffbe6] uppercase tracking-wide">
                  <span className="font-semibold">{idx + 1}.</span> {label}
                </h3>
                <TermsSection id={id} />
              </section>
            ))}

            {/* Button inside card */}
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

// --- Individual Section Content for Terms & Conditions ---
function TermsSection({ id }) {
  switch (id) {
    case "definitions":
      return (
        <>
          <h4 className="font-bold mb-1">Interpretation</h4>
          <p className="mb-2">
            The words of which the initial letter is capitalized have meanings defined under the following conditions.
            The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>
          <h4 className="font-bold mb-1">Definitions</h4>
          <p className="mb-2">
            For the purposes of these Terms and Conditions:
          </p>
          <ul className="list-disc ml-8">
            <li>
              <b>Affiliate</b> means an entity that controls, is controlled by or is under common control with a party...
            </li>
            <li>
              <b>Country</b> refers to: Wyoming, United States
            </li>
            <li>
              <b>Company</b> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Welcome Home International LLC, 30 N. Gould St. Ste N Sheridan, WY 82801.
            </li>
            <li>
              <b>Device</b> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
            </li>
            <li>
              <b>Service</b> refers to the Website.
            </li>
            <li>
              <b>Terms and Conditions</b> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement...
            </li>
            <li>
              <b>Third-party Social Media Service</b> means any services or content (including data, information, products or services) provided by a third-party...
            </li>
            <li>
              <b>Website</b> refers to Welcome Home, accessible from www.welcomehomeintl.com
            </li>
            <li>
              <b>You</b> means the individual accessing or using the Service, or the company, or other legal entity...
            </li>
          </ul>
        </>
      );
    case "acknowledgment":
      return (
        <>
          <p>
            These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company.
            These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
          </p>
          <p>
            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions...
          </p>
          <p>
            By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms...
          </p>
          <p>
            You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
          </p>
          <p>
            Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company...
          </p>
        </>
      );
    case "links":
      return (
        <>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
          </p>
          <p>
            The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party...
          </p>
          <p>
            We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
          </p>
        </>
      );
    case "termination":
      return (
        <>
          <p>
            We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including...
          </p>
          <p>
            Upon termination, Your right to use the Service will cease immediately.
          </p>
        </>
      );
    case "liability":
      return (
        <>
          <p>
            Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers...
          </p>
          <p>
            To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever...
          </p>
          <p>
            Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages...
          </p>
        </>
      );
    case "disclaimer":
      return (
        <>
          <p>
            The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind...
          </p>
          <p>
            Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer...
          </p>
        </>
      );
    case "law":
      return (
        <p>
          The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service...
        </p>
      );
    case "disputes":
      return (
        <p>
          If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
        </p>
      );
    case "eu":
      return (
        <p>
          If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
        </p>
      );
    case "us-compliance":
      return (
        <p>
          You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo...
        </p>
      );
    case "severability":
      return (
        <>
          <h4 className="font-bold mb-1">Severability</h4>
          <p>
            If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted...
          </p>
          <h4 className="font-bold mb-1">Waiver</h4>
          <p>
            Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms...
          </p>
        </>
      );
    case "translation":
      return (
        <p>
          These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
        </p>
      );
    case "changes":
      return (
        <p>
          We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect...
        </p>
      );
    case "contact":
      return (
        <p>
          If you have any questions about these Terms and Conditions, You can contact us:<br />
          By email: <a href="mailto:info@welcomehomeintl.com" className="text-[#fffbe6] underline">info@welcomehomeintl.com</a>
        </p>
      );
    default:
      return null;
  }
}
