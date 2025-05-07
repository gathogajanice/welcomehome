import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const FormPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const referralValue =
      data.get("referral") === "Other"
        ? data.get("referral_other")
        : data.get("referral");

    const payload = {
      email: data.get("email"),
      attributes: {
        FIRSTNAME: data.get("firstname"),
        LASTNAME: data.get("lastname"),
        CITY: data.get("city"),
        COUNTRY: data.get("country"),
        SMS: data.get("phone"),
        INTEREST: data.get("interest"),
        REFERRAL: referralValue,
        EARLYACCESS: data.get("earlyaccess")
      },
      listIds: [5], // Replace with your real Brevo list ID
      updateEnabled: true
    };

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": import.meta.env.VITE_BREVO_API_KEY as string
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      toast("You’ve joined the waitlist. Thank you.");
      setTimeout(() => navigate("/"), 3000);
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#387f79] flex items-center justify-center px-4 py-10 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/lovable-uploads/bg-img.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.06,
            mixBlendMode: 'overlay'
          }}
        />
        <form
          onSubmit={handleSubmit}
          className="relative z-10 bg-white/10 p-8 sm:p-12 rounded-xl shadow-lg w-full max-w-2xl space-y-6 text-white mt-16"
        >
          {/* Main heading */}
          <motion.div variants={titleVariants} className="text-center w-full">
  <h1 className="font-bd-sans text-xl sm:text-2xl md:text-3xl text-[#fffbf0] font-bold tracking-wide leading-tight">
    BE THE FIRST TO OWN WITH WELCOME HOME
  </h1>
</motion.div>


          {/* Input fields */}
          {[
            { name: "firstname", label: "First name" },
            { name: "lastname", label: "Last name" },
            { name: "email", label: "Email address", type: "email" },
            { name: "phone", label: "Phone number (optional)", type: "tel" },
            { name: "city", label: "City" },
            { name: "country", label: "Country" }
          ].map(({ name, label, type = "text" }) => (
            <div key={name}>
              <label className="block mb-1 font-bd-sans text-sm">{label}</label>
              <input
                name={name}
                type={type}
                required={name !== "phone"}
                placeholder={label}
                className="w-full p-3 rounded-xl bg-[#387f79] border border-white font-cormorant text-white placeholder-white"
              />
            </div>
          ))}

          {/* Dropdown - Interest */}
          <div>
            <label className="block mb-1 font-bd-sans text-sm">What best describes your interest?</label>
            <select
              name="interest"
              className="w-full p-3 rounded-xl bg-[#387f79] border border-white text-white font-cormorant"
              defaultValue="curious"
            >
              <option value="ready">I'm ready to invest</option>
              <option value="curious">I'm curious and want to learn more</option>
              <option value="travel">Interested in travel membership</option>
              <option value="community">Community + updates</option>
            </select>
          </div>

          {/* Early Access */}
          <div>
            <label className="block mb-1 font-bd-sans text-sm">Would you like early access to our first property in Senegal?</label>
            <div className="space-x-6 mt-1">
              <label><input type="radio" name="earlyaccess" value="yes" required /> Yes</label>
              <label><input type="radio" name="earlyaccess" value="no" /> No</label>
            </div>
          </div>

          {/* Referral */}
          <div>
            <label className="block mb-1 font-bd-sans text-sm">How did you hear about us?</label>
            <select
              name="referral"
              required
              className="w-full p-3 rounded-xl bg-[#387f79] border border-white text-white font-cormorant"
              onChange={(e) => {
                const show = e.target.value === "Other";
                const input = document.querySelector<HTMLInputElement>('input[name="referral_other"]');
                if (input) input.style.display = show ? "block" : "none";
              }}
            >
              <option value="">Select</option>
              <option value="Event">Event</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Friend">Friend</option>
              <option value="Ad">Ad</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              name="referral_other"
              placeholder="Please specify"
              className="mt-2 p-2 rounded bg-white/20 border border-white font-cormorant text-white placeholder-white"
              style={{ display: "none" }}
            />
          </div>

          {/* Privacy checkbox */}
          <div className="flex items-start gap-3 mt-4">
            <input type="checkbox" name="privacy" id="privacy-check" className="scale-110 mt-1" />
            <label htmlFor="privacy-check" className="font-bd-sans text-sm text-[#fffbf0]">
              We respect your privacy and promise to never share your information.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#fffbf0] text-[#387f79] font-bd-sans uppercase font-bold shadow-lg border border-white/40 hover:bg-[#fff]"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default FormPage;
