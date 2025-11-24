import React, { useState } from "react";

const indiaStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const educationOptions = [
  "Bachelor of Arts (B.A.)",
  "Bachelor of Science (B.Sc.)",
  "Bachelor of Commerce (B.Com.)",
  "Bachelor of Education (B.Ed.)",
  "Bachelor of Computer Applications (BCA)",
  "Bachelor of Social Work (BSW)",
  "Bachelor of Business Administration (BBA)",
  "Bachelor of Engineering (B.E.)",
  "Bachelor of Technology (B.Tech)",
  "Bachelor of Pharmacy (B.Pharm)",
  "Bachelor of Nursing (B.Sc Nursing)",
  "Master of Arts (M.A.)",
  "Master of Science (M.Sc.)",
  "Master of Commerce (M.Com.)",
  "Master of Education (M.Ed.)",
  "Master of Computer Applications (MCA)",
  "Master of Social Work (MSW)",
  "Master of Business Administration (MBA)",
  "Other",
];

const volunteerExperienceOptions = [
  "New to Social Work",
  "0–1 Year",
  "1–3 Years",
  "3–7 Years",
  "7+ Years",
];

const RegisterForEducation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    nationality: "",
    aadhar: "",
    pan: "",
    gender: "",
    education: "",
    volunteerExperience: "",
    permanentAddress: "",
    permanentState: "",
    permanentCity: "",
    permanentPincode: "",
    permanentLandmark: "",
    sameAsPermanent: false,
    currentAddress: "",
    currentState: "",
    currentCity: "",
    currentPincode: "",
    currentLandmark: "",
    prefLocation1: "",
    prefPincode1: "",
    prefLocation2: "",
    prefPincode2: "",
    prefLocation3: "",
    prefPincode3: "",
    howKnow: "",
    whyVolunteer: "",
    motivation: "",
    msgConsent: false,
  });

  const [errors, setErrors] = useState({
    permanentPincode: "",
    currentPincode: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Word limit for the long answers
    if (name === "whyVolunteer" || name === "motivation") {
      const words = value.trim().split(/\s+/).filter(Boolean);
      if (words.length > 120) return; // hard limit at 120 words
    }

    if (type === "checkbox") {
      if (name === "sameAsPermanent") {
        const checkedValue = checked;
        setFormData((prev) => ({
          ...prev,
          sameAsPermanent: checkedValue,
          currentAddress: checkedValue ? prev.permanentAddress : "",
          currentState: checkedValue ? prev.permanentState : "",
          currentCity: checkedValue ? prev.permanentCity : "",
          currentPincode: checkedValue ? prev.permanentPincode : "",
          currentLandmark: checkedValue ? prev.permanentLandmark : "",
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validatePincode = (name, value) => {
    if (!/^\d{6}$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        [name]: "Wrong PIN code. Please enter a valid 6-digit PIN.",
      }));
      alert("Wrong PIN code.");
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Preference location PIN check (must be different)
    const { prefPincode1, prefPincode2, prefPincode3 } = formData;
    const pins = [prefPincode1, prefPincode2, prefPincode3].filter(Boolean);

    const duplicatePin =
      new Set(pins).size !== pins.length && pins.length === 3;

    if (duplicatePin) {
      alert(
        "Each preferred location must have a different PIN code. Please enter unique PIN codes for all three preferences."
      );
      return;
    }

    // Simple final required consent check
    if (!formData.msgConsent) {
      alert("Please agree to message consent to submit the form.");
      return;
    }

    // Here you can send `formData` to your backend / API
    console.log("Form submitted:", formData);
    alert("Form submitted successfully (demo).");
  };

  return (
    <div
      className=" flex items-center justify-center  "
      style={{
        backgroundImage: "url('/images/volunteer-registration-bg.png')",
      }}
    >
      {/* light overlay to make text easier to read */}
      <div className="absolute inset-0 bg-[#fef6e8]/60 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl bg-white/90 rounded-2xl shadow-xl p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-2">
          Volunteer Registration for Education
        </h1>
        <p className="text-center text-sm text-slate-600 mb-6">
          Please fill all mandatory fields (*) to register as a volunteer.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Details */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Personal Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone No. *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dob"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Nationality *
                </label>
                <input
                  type="text"
                  name="nationality"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.nationality}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Aadhar No. *
                </label>
                <input
                  type="text"
                  name="aadhar"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.aadhar}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Pan No. *
                </label>
                <input
                  type="text"
                  name="pan"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.pan}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Gender *
                </label>
                <select
                  name="gender"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Non-binary">Non-binary</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Education & Volunteer Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Educational Qualification *
                </label>
                <select
                  name="education"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.education}
                  onChange={handleChange}
                >
                  <option value="">Select qualification</option>
                  {educationOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <label className="block text-xs text-slate-500 mt-2">
                  Upload degree / certificate (multiple files allowed)
                </label>
                <input
                  type="file"
                  multiple
                  className="mt-1 block w-full text-xs text-slate-600 file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-emerald-50 file:text-[#138808] hover:file:bg-emerald-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Volunteer Experience *
                </label>
                <select
                  name="volunteerExperience"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.volunteerExperience}
                  onChange={handleChange}
                >
                  <option value="">Select experience</option>
                  {volunteerExperienceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <label className="block text-xs text-slate-500 mt-2">
                  Upload any experience letters / certificates (optional,
                  multiple)
                </label>
                <input
                  type="file"
                  multiple
                  className="mt-1 block w-full text-xs text-slate-600 file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-emerald-50 file:text-[#138808] hover:file:bg-emerald-100"
                />
              </div>
            </div>
          </div>

          {/* Permanent Address */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Permanent Address
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address *
                </label>
                <textarea
                  name="permanentAddress"
                  required
                  rows={2}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    State *
                  </label>
                  <select
                    name="permanentState"
                    required
                    className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#138808]"
                    value={formData.permanentState}
                    onChange={handleChange}
                  >
                    <option value="">Select state</option>
                    {indiaStates.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    City / District *
                  </label>
                  <input
                    type="text"
                    name="permanentCity"
                    required
                    placeholder="City/District"
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                    value={formData.permanentCity}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="permanentPincode"
                    required
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                    value={formData.permanentPincode}
                    onChange={handleChange}
                    onBlur={(e) =>
                      validatePincode("permanentPincode", e.target.value)
                    }
                  />
                  {errors.permanentPincode && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.permanentPincode}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Landmark / Area (Optional)
                </label>
                <input
                  type="text"
                  name="permanentLandmark"
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.permanentLandmark}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Current Address */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Current Address
            </h2>

            <label className="flex items-center gap-2 text-sm mb-3">
              <input
                type="checkbox"
                name="sameAsPermanent"
                checked={formData.sameAsPermanent}
                onChange={handleChange}
                className="rounded border-slate-300 text-emerald-600 focus:ring-[#138808]"
              />
              <span>Same as Permanent Address</span>
            </label>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address *
                </label>
                <textarea
                  name="currentAddress"
                  required
                  rows={2}
                  disabled={formData.sameAsPermanent}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808] disabled:bg-slate-100"
                  value={formData.currentAddress}
                  onChange={handleChange}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    State *
                  </label>
                  <select
                    name="currentState"
                    required
                    disabled={formData.sameAsPermanent}
                    className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#138808] disabled:bg-slate-100"
                    value={formData.currentState}
                    onChange={handleChange}
                  >
                    <option value="">Select state</option>
                    {indiaStates.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    City / District *
                  </label>
                  <input
                    type="text"
                    name="currentCity"
                    required
                    disabled={formData.sameAsPermanent}
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808] disabled:bg-slate-100"
                    value={formData.currentCity}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="currentPincode"
                    required
                    disabled={formData.sameAsPermanent}
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808] disabled:bg-slate-100"
                    value={formData.currentPincode}
                    onChange={handleChange}
                    onBlur={(e) =>
                      validatePincode("currentPincode", e.target.value)
                    }
                  />
                  {errors.currentPincode && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.currentPincode}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Landmark / Area (Optional)
                </label>
                <input
                  type="text"
                  name="currentLandmark"
                  disabled={formData.sameAsPermanent}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808] disabled:bg-slate-100"
                  value={formData.currentLandmark}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Preference Location To Work */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Preferred Location to Work
            </h2>

            <p className="text-xs text-slate-600 mb-3">
              Each preference must have a different PIN code. If all PIN codes
              are the same, an alert will be shown.
            </p>

            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="grid md:grid-cols-2 gap-4 mb-3 border border-slate-200 rounded-lg p-3"
              >
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Preference {num} - Location *
                  </label>
                  <input
                    type="text"
                    required
                    name={`prefLocation${num}`}
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                    value={formData[`prefLocation${num}`]}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Preference {num} - PIN Code *
                  </label>
                  <input
                    type="text"
                    required
                    name={`prefPincode${num}`}
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                    value={formData[`prefPincode${num}`]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Questions */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              About Your Motivation
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  How did you get to know about Jaago Manav? *
                </label>
                <input
                  type="text"
                  name="howKnow"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.howKnow}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Why do you want to volunteer with Jaago Manav&apos;s Education
                  Program? (max 120 words) *
                </label>
                <textarea
                  name="whyVolunteer"
                  required
                  rows={3}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.whyVolunteer}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  What feelings or experiences motivate you to support children
                  through education? (max 120 words) *
                </label>
                <textarea
                  name="motivation"
                  required
                  rows={3}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                  value={formData.motivation}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Consent & Submit */}
          <div className="border-t border-slate-200 pt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="msgConsent"
                checked={formData.msgConsent}
                onChange={handleChange}
                className="rounded border-slate-300 text-emerald-600 focus:ring-[#138808]"
              />
              <span>
                I agree to receive messages/communication regarding this
                volunteering program. *
              </span>
            </label>

            <button
              type="submit"
              disabled={!formData.msgConsent}
              className="inline-flex justify-center rounded-full bg-[#FF9933] px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#138808] disabled:bg-[#138808] disabled:cursor-not-allowed transition-colors"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForEducation;
