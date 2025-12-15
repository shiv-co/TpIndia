// GetQuoteWizard.jsx
import React, { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";




const SERVICES = [
  "Video Editing",
  "Photography",
  "Website Development",
  "Documentary Shoot",
  "Drone Shoot",
  "E-Commerce Website",
  "Cinematic Shoot",
  "Podcast & Talk Shows / Music Video",
  "Logo Design",
  "Short Film Shoot",
  "Social Media Content",
  "Others (type below)",
];

const BUDGET_OPTIONS = [
  "₹5,000 – ₹10,000",
  "₹10,000 – ₹20,000",
  "₹20,000 – ₹50,000",
  "₹50,000+",
  "Not sure",
];

const TIMELINE_OPTIONS = [
  "1–3 days",
  "1 week",
  "2 weeks",
  "1 month",
  "Flexible",
];

/* service-specific fields config:
   Each entry can be: { name, label, type = 'text' | 'select' | 'number', options?, placeholder?, required? }
*/
const SERVICE_FEATURES = {
  "Website Development": [
    "Admin Panel",
    "Login / Signup",
    "Payment Gateway",
    "Blog / CMS",
    "SEO Setup",
    "Analytics",
    "Chat / WhatsApp",
    "Animations",
    "API Integration",
    "Responsive Design",
  ],

  "E-Commerce Website": [
    "Product Catalog",
    "Payment Gateway",
    "Cart System",
    "Order Management",
    "Coupons / Discounts",
    "Admin Dashboard",
    "SEO Setup",
    "Analytics",
  ],

  "Video Editing": [
    "Basic Editing",
    "Color Grading",
    "Sound Design",
    "Transitions",
    "Subtitles",
    "Motion Graphics",
    "Social Media Reels",
  ],

  Photography: [
    "Photo Retouching",
    "Color Correction",
    "Event Photography",
    "Product Photography",
    "Raw + Edited Deliverables",
  ],

  "Documentary Shoot": [
    "On-ground Filming",
    "Interviews Setup",
    "Voiceover",
    "Color Grading",
    "Sound Design",
    "Script Assistance",
  ],

  "Cinematic Shoot": [
    "Cinematic Filming",
    "Drone Shots",
    "Motion Graphics",
    "Color Grading",
    "Story Cut",
  ],

  "Drone Shoot": [
    "Aerial Photography",
    "Aerial Videography",
    "Location Scouting",
    "Permits Handling",
  ],

  "Podcast & Talk Shows / Music Video": [
    "Multi-Cam Recording",
    "Audio Mixing",
    "Set Design Assistance",
    "Color Grading",
    "Cinematic B-Roll",
  ],

  "Logo Design": [
    "Minimal Logo",
    "Text-Based Logo",
    "Illustrative Logo",
    "Monogram",
    "Brand Identity Kit",
  ],

  "Short Film Shoot": [
    "Storyboarding",
    "Cinematic Filming",
    "Voiceover",
    "Color Grading",
    "VFX / Motion",
  ],

  "Social Media Content": [
    "Reels Editing",
    "Short Form Content",
    "Content Strategy",
    "Color Correction",
    "Sound Design",
  ],

  "Others (type below)": [],
};

const SERVICE_FIELDS = {
  "Website Development": [
    {
      name: "websiteType",
      label: "Website Type",
      type: "select",
      options: [
        "Business Website",
        "Portfolio",
        "Landing Page",
        "Web App",
        "Other",
      ],
    },
    {
      name: "pages",
      label: "Approx. number of pages",
      type: "text",
      placeholder: "eg. 5-10",
    },
  ],
  "E-Commerce Website": [
    {
      name: "catalogSize",
      label: "Product count estimate",
      type: "text",
      placeholder: "eg. up to 30 / 100+",
    },
    {
      name: "payment",
      label: "Payment gateways needed",
      type: "text",
      placeholder: "Razorpay / UPI / Paytm / Others",
    },
  ],
  "Video Editing": [
    {
      name: "videoLength",
      label: "Final video length",
      type: "text",
      placeholder: "eg. 3-10 minutes",
    },
    {
      name: "editingStyle",
      label: "Editing style",
      type: "select",
      options: [
        "Fast cuts",
        "Cinematic",
        "Documentary",
        "Social Reels",
        "Other",
      ],
    },
  ],
  Photography: [
    {
      name: "shootType",
      label: "Shoot type",
      type: "select",
      options: ["Event", "Product", "Portrait", "Commercial", "Other"],
    },
    {
      name: "hours",
      label: "Estimated shoot hours",
      type: "text",
      placeholder: "eg. 4-8 hours",
    },
  ],
  "Documentary Making": [
    {
      name: "duration",
      label: "Documentary duration",
      type: "text",
      placeholder: "eg. 15-60 minutes",
    },
    {
      name: "locations",
      label: "No. of locations",
      type: "text",
      placeholder: "eg. 1-3",
    },
  ],
  "Cinematic Shoot": [
    {
      name: "scale",
      label: "Scale of shoot",
      type: "select",
      options: ["Solo operator", "Small crew", "Full crew"],
    },
    {
      name: "days",
      label: "Days of shoot",
      type: "text",
      placeholder: "eg. 1-5 days",
    },
  ],
  "Drone Shoot": [
    {
      name: "area",
      label: "Area / location type",
      type: "text",
      placeholder: "City / Rural / Mountain / Seaside",
    },
    {
      name: "permits",
      label: "Need permits?",
      type: "select",
      options: ["Yes", "No", "Not sure"],
    },
  ],
  "Podcast & Talk Shows": [
    {
      name: "format",
      label: "Format",
      type: "select",
      options: ["Podcast", "Talk Show", "Other"],
    },
    {
      name: "length",
      label: "Duration per episode/video",
      type: "text",
      placeholder: "eg. 30-60 mins ",
    },
  ],
  "Music Video": [
    {
      name: "format",
      label: "Format",
      type: "select",
      options: ["Music Video", "Other"],
    },
    {
      name: "length",
      label: "Duration of video",
      type: "text",
      placeholder: "eg. 3-5 mins",
    },
  ],
  "Logo Design": [
    {
      name: "style",
      label: "Preferred style",
      type: "select",
      options: ["Minimal", "Text-based", "Illustrative", "Emblem", "Other"],
    },
  ],
  "Short Film Shoot": [
    {
      name: "duration",
      label: "Expected runtime",
      type: "text",
      placeholder: "eg. 8-20 minutes",
    },
    { name: "locations", label: "No. of locations", type: "text" },
  ],
  "Social Media Content": [
    {
      name: "platforms",
      label: "Platforms",
      type: "text",
      placeholder: "Instagram / YouTube / Facebook / Shorts",
    },
    {
      name: "count",
      label: "Posts / videos required",
      type: "text",
      placeholder: "eg. 10 reels",
    },
  ],
  "Others (type below)": [
    {
      name: "otherDescription",
      label: "Please describe your project",
      type: "text",
      placeholder: "Describe your requirement",
    },
  ],
};

/* --------------------------
   Component
   -------------------------- */

export default function GetQuoteWizard() {
  const [step, setStep] = useState(0);
  const [serviceType, setServiceType] = useState("");
  const [form, setForm] = useState({
    // generic fields
    name: "",
    email: "",
    mobile: "",
    budget: "",
    timeline: "",
    additional: "",
    // dynamic service fields will be added here
    features: [],
    otherFeatureText: "",
  });

  const formRef = useRef(null);
  const totalSteps = 7; // 0..6

  // derive fields for the selected service
  const dynamicFields = useMemo(
    () => SERVICE_FIELDS[serviceType] || [],
    [serviceType]
  );

  // helpers
  const update = (patch) => setForm((s) => ({ ...s, ...patch }));

  const toggleFeature = (feat) => {
    setForm((s) => {
      const set = new Set(s.features);
      if (set.has(feat)) set.delete(feat);
      else set.add(feat);
      return { ...s, features: Array.from(set) };
    });
  };

  // Next with basic validation per step
  const handleNext = () => {
    // validation rules for certain steps
    if (step === 0 && !serviceType) {
      alert("Please choose a service to continue.");
      return;
    }
    if (step === 1) {
      // example: if dynamic fields exist and one is required, you can extend validation
    }
    if (step === 5) {
      // contact step: require either email or mobile
      if (!form.email.trim() && !form.mobile.trim()) {
        alert(
          "Please provide either Email or Mobile Number so we can contact you."
        );
        return;
      }
    }
    setStep((s) => Math.min(totalSteps - 1, s + 1));
  };

  const handleBack = () => setStep((s) => Math.max(0, s - 1));

  //   const handleSubmit = async () => {
  //     // Final validation: ensure serviceType and contact info
  //     if (!serviceType) {
  //       alert("Service not selected.");
  //       setStep(0);
  //       return;
  //     }
  //     if (!form.email.trim() && !form.mobile.trim()) {
  //       alert("Please provide either Email or Mobile Number.");
  //       setStep(5);
  //       return;
  //     }

  //     // Prepare template params for EmailJS
  //     const params = {
  //       serviceType,
  //       summary: JSON.stringify(
  //         {
  //           ...form,
  //         },
  //         null,
  //         2
  //       ),
  //       name: form.name || "Not provided",
  //       email: form.email || "Not provided",
  //       mobile: form.mobile || "Not provided",
  //       budget: form.budget || "Not provided",
  //       timeline: form.timeline || "Not provided",
  //       additional: form.additional || "None",
  //     };

  //     try {
  //       // show simple loading (disable button in real UI)
  //       await emailjs.send(
  //         EMAILJS_SERVICE_ID,
  //         EMAILJS_TEMPLATE_ID,
  //         {
  //           ...params,
  //           // if your template expects specific fields, map them here
  //           message: `New Quote Request\nService: ${serviceType}\n\nDetails:\n${params.summary}`,
  //         },
  //         EMAILJS_PUBLIC_KEY
  //       );
  //       alert("Quote request sent successfully. We'll contact you soon!");
  //       // reset
  //       setServiceType("");
  //       setForm({
  //         name: "",
  //         email: "",
  //         mobile: "",
  //         budget: "",
  //         timeline: "",
  //         additional: "",
  //         features: [],
  //         otherFeatureText: "",
  //       });
  //       setStep(0);
  //     } catch (err) {
  //       console.error("EmailJS error:", err);
  //       alert("Failed to send. Please try again or contact directly.");
  //     }
  //   };

  const handleSubmit = () => {
    if (!form.email.trim() && !form.mobile.trim()) {
      alert("Please provide either Email or Mobile Number.");
      setStep(5);
      return;
    }

    const whatsappNumber = "919932012125"; // ← YOUR WHATSAPP NUMBER HERE

    const message = `
*New Get Quote Request*

*Service:* ${serviceType}

${dynamicFields.map((f) => `*${f.label}:* ${form[f.name] || "-"}`).join("\n")}

*Features:* ${form.features.length > 0 ? form.features.join(", ") : "None"}

${form.otherFeatureText ? `*Other Feature:* ${form.otherFeatureText}` : ""}

*Budget:* ${form.budget || "-"}
*Timeline:* ${form.timeline || "-"}
*Additional Info:* ${form.additional || "-"}

*Name:* ${form.name || "-"}
*Email:* ${form.email || "-"}
*Mobile:* ${form.mobile || "-"}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  /* --------------- Render helpers --------------- */
  const renderServiceCards = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {SERVICES.map((s) => (
        <motion.button
          key={s}
          onClick={() => {
            setServiceType(s);
            setStep(1);
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`group flex flex-col items-start gap-3 p-4 rounded-2xl border transition-shadow text-left bg-white/5 border-[var(--border-color)] shadow-sm ${
            serviceType === s
              ? "ring-2 ring-[var(--accent-color)]"
              : "hover:shadow-lg"
          }`}
        >
          <div className="text-lg font-semibold">{s}</div>
          <div className="text-xs text-[var(--text-secondary)]">
            {s === "Others (type below)"
              ? "Describe custom service in next step."
              : `Request a quote for ${s.toLowerCase()}.`}
          </div>
        </motion.button>
      ))}
    </div>
  );

  const renderDynamicFields = () => (
    <div className="space-y-4">
      {dynamicFields.length === 0 && (
        <div className="text-[var(--text-secondary)]">
          No extra questions for this service. Click Next to continue.
        </div>
      )}

      {dynamicFields.map((f) => {
        const value = form[f.name] || "";
        if (f.type === "select") {
          return (
            <div key={f.name}>
              <label className="block text-sm font-medium mb-2">
                {f.label}
              </label>
              <select
                value={value}
                onChange={(e) => update({ [f.name]: e.target.value })}
                className="w-full p-3 rounded border bg-transparent border-[var(--border-color)] text-[var(--text-secondary)]"
              >
                <option value="" className="bg-[#eeeeee]  text-gray-700">Select</option>
                {f.options.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#eeeeee]  text-gray-700">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          );
        }
        return (
          <div key={f.name}>
            <label className="block text-sm font-medium mb-2">{f.label}</label>
            <input
              type="text"
              placeholder={f.placeholder || ""}
              value={value}
              onChange={(e) => update({ [f.name]: e.target.value })}
              className="w-full p-3 rounded border bg-transparent border-[var(--border-color)]"
            />
          </div>
        );
      })}
    </div>
  );

  const renderFeaturesStep = () => {
    const relatedFeatures = SERVICE_FEATURES[serviceType] || [];

    return (
      <div className="space-y-4">
        {/* If no predefined features (like "Others") show a small message */}
        {relatedFeatures.length === 0 && (
          <div className="text-sm text-[var(--text-secondary)]">
            No preset features available for this service. You can write your
            custom requirements below.
          </div>
        )}

        {/* Dynamic Feature Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {relatedFeatures.map((feat) => (
            <button
              key={feat}
              type="button"
              onClick={() => toggleFeature(feat)}
              className={`p-3 text-sm rounded-lg text-left border transition ${
                form.features.includes(feat)
                  ? "bg-[var(--accent-color)] text-white border-[var(--accent-color)]"
                  : "bg-transparent border-[var(--border-color)] text-[var(--text-secondary)] hover:shadow-sm"
              }`}
            >
              {feat}
            </button>
          ))}
        </div>

        {/* Other Features */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Other features (optional)
          </label>
          <input
            value={form.otherFeatureText}
            onChange={(e) => update({ otherFeatureText: e.target.value })}
            placeholder="Describe any additional features you need"
            className="w-full p-3 rounded border bg-transparent border-[var(--border-color)] text-[var(--text-primary)]"
          />
        </div>
      </div>
    );
  };

  const renderBudgetTimeline = () => (
    <div className="space-y-4">
      <div>
        <label className="block mb-2 text-sm font-medium">Budget range</label>
        <select
          value={form.budget}
          onChange={(e) => update({ budget: e.target.value })}
          className=" w-full p-3 rounded border border-[var(--border-color)]"
        >
          <option value="" className="bg-[#eeeeee]  text-gray-700">
            Select budget
          </option>
          {BUDGET_OPTIONS.map((b) => (
            <option key={b} value={b} className="bg-[#eeeeee]  text-gray-700">
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">
          Expected timeline
        </label>
        <select
          value={form.timeline}
          onChange={(e) => update({ timeline: e.target.value })}
          className="w-full p-3 rounded border bg-transparent border-[var(--border-color)] text-[var(--text-primary)] "
        >
          <option value="" className="bg-[#eeeeee]  text-gray-700">Select timeline</option>
          {TIMELINE_OPTIONS.map((t) => (
            <option key={t} value={t} className="bg-[#eeeeee]  text-gray-700">
              {t}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderAdditional = () => (
    <div>
      <label className="block mb-2 text-sm font-medium">
        Anything else we should know? (optional)
      </label>
      <textarea
        value={form.additional}
        onChange={(e) => update({ additional: e.target.value })}
        rows={5}
        placeholder="Share links, references, or special conditions"
        className="w-full p-3 rounded border bg-transparent border-[var(--border-color)]"
      />
    </div>
  );

  const renderContact = () => (
    <div className="space-y-4">
      <div>
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          value={form.name}
          onChange={(e) => update({ name: e.target.value })}
          placeholder="Your name"
          className="w-full p-3 rounded border bg-transparent border-[var(--border-color)]"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">
          Email (optional)
        </label>
        <input
          value={form.email}
          onChange={(e) => update({ email: e.target.value })}
          placeholder="you@example.com"
          type="email"
          className="w-full p-3 rounded border bg-transparent border-[var(--border-color)]"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">
          Mobile Number 
        </label>
        <input
          value={form.mobile}
          onChange={(e) => update({ mobile: e.target.value })}
          placeholder="Mobile number"
          className="w-full p-3 rounded border bg-transparent border-[var(--border-color)]"
        />
      </div>

      <div className="text-xs text-[var(--text-secondary)]">
        <strong>Note:</strong> Either Email or Mobile is required to proceed.
      </div>
    </div>
  );

  const renderReview = () => {
    const summaryObj = {
      Service: serviceType,
      ...dynamicFields.reduce(
        (acc, f) => ({ ...acc, [f.label]: form[f.name] || "-" }),
        {}
      ),
      Features:
        form.features
          .concat(
            form.otherFeatureText ? [`Other: ${form.otherFeatureText}`] : []
          )
          .join(", ") || "-",
      Budget: form.budget || "-",
      Timeline: form.timeline || "-",
      Additional: form.additional || "-",
      Name: form.name || "-",
      Email: form.email || "-",
      Mobile: form.mobile || "-",
    };

    return (
      <div className="space-y-3">
        <div className="text-sm text-[var(--text-secondary)]">
          Please review your request before sending.
        </div>
        <div className="grid grid-cols-1 gap-2">
          {Object.entries(summaryObj).map(([k, v]) => (
            <div
              key={k}
              className="p-3 rounded border bg-transparent border-[var(--border-color)]"
            >
              <div className="text-xs text-[var(--text-secondary)]">{k}</div>
              <div className="text-sm font-medium">{v}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  /* --------------- main render --------------- */
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <div className="text-xl font-bold">Get a Quote</div>
        <div className="text-sm text-[var(--text-secondary)]">
          Tell us about your project, we will get back with a custom quote.
        </div>
      </div>

      {/* progress bar */}
      <div className="mb-6">
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            style={{ width: `${(step / (totalSteps - 1)) * 100}%` }}
            className="h-full bg-[var(--accent-color)] transition-all"
          ></div>
        </div>
        <div className="text-xs text-[var(--text-secondary)] mt-2">{`Step ${Math.min(
          step + 1,
          totalSteps
        )} of ${totalSteps}`}</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-card p-6 rounded-2xl border border-[var(--border-color)]"
      >
        {/* Step content */}
        {step === 0 && (
          <div>
            <div className="mb-4 text-lg font-semibold">Choose a service</div>
            {renderServiceCards()}
          </div>
        )}

        {step === 1 && (
          <div>
            <div className="mb-4 text-lg font-semibold">{serviceType}</div>
            {renderDynamicFields()}
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="mb-4 text-lg font-semibold">Select Features</div>
            {renderFeaturesStep()}
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="mb-4 text-lg font-semibold">Budget & Timeline</div>
            {renderBudgetTimeline()}
          </div>
        )}

        {step === 4 && (
          <div>
            <div className="mb-4 text-lg font-semibold text-[var(--text-secondary)]">
              Additional requirements
            </div>
            {renderAdditional()}
          </div>
        )}

        {step === 5 && (
          <div>
            <div className="mb-4 text-lg font-semibold">Contact details</div>
            {renderContact()}
          </div>
        )}

        {step === 6 && (
          <div>
            <div className="mb-4 text-lg font-semibold">Review & Submit</div>
            {renderReview()}
          </div>
        )}

        {/* Navigation */}
        <div className="mt-6 flex gap-3">
          {step > 0 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 rounded-lg border border-[var(--border-color)]"
            >
              ← Back
            </button>
          )}

          {step < totalSteps - 1 && (
            <button
              onClick={handleNext}
              className="ml-auto px-4 py-2 rounded-lg bg-[var(--accent-color)] text-white font-semibold"
            >
              Next →
            </button>
          )}

          {step === totalSteps - 1 && (
            <button
              onClick={handleSubmit}
              className="ml-auto px-4 py-2 rounded-lg bg-[var(--accent-color)] text-white font-semibold"
            >
              Send Quote Request
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
