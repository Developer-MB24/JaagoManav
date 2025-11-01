import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
  useReducer,
} from "react";
import { Upload, CheckCircle2 } from "lucide-react";

export default function Account() {
  const [files, setFiles] = useState({
    aadhaar: null,
    pan: null,
    education: [],
  });
  const [agree, setAgree] = useState(false);

  const h1Ref = useRef(null);
  const logoRef = useRef(null);
  const [logoWidth, setLogoWidth] = useState(null);

  const syncLogoWidth = useCallback(() => {
    const w = h1Ref.current?.offsetWidth || null;
    if (w && Math.abs((logoWidth || 0) - w) > 1) setLogoWidth(w);
  }, [logoWidth]);

  useEffect(() => {
    const id = requestAnimationFrame(syncLogoWidth);

    let ro;
    if (window.ResizeObserver && h1Ref.current) {
      ro = new ResizeObserver(syncLogoWidth);
      ro.observe(h1Ref.current);
    }

    window.addEventListener("resize", syncLogoWidth);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", syncLogoWidth);
      if (ro) ro.disconnect();
    };
  }, [syncLogoWidth]);

  const handleFile =
    (key, multiple = false) =>
    (e) => {
      const f = e.target.files;
      setFiles((prev) => ({
        ...prev,
        [key]: multiple ? Array.from(f || []) : (f && f[0]) || null,
      }));
    };

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const required = [
      "fullName",
      "email",
      "phone",
      "aadhaarNo",
      "panNo",
      "qualification",
      "experience",
      "location",
      "permanentAddress",
      "currentAddress",
      "city",
      "state",
      "pincode",
    ];
    for (const k of required) {
      if (!fd.get(k)) {
        alert("Please fill all required fields.");
        return;
      }
    }
    if (!files.aadhaar || !files.pan || (files.education || []).length === 0) {
      alert(
        "Please attach the required documents (Aadhaar, PAN, Qualification)."
      );
      return;
    }
    if (!agree) {
      alert("Please confirm the declaration checkbox.");
      return;
    }
    console.log("Form submitted!");
    console.log("Text fields:", Object.fromEntries(fd.entries()));
    console.log("Files:", files);
    alert("Form ready to submit. Hook this to your API.");
  };

  return (
    <section className="min-h-[100svh] md:min-h-screen bg-[#FFFFFF] py-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-6">
          <img
            ref={logoRef}
            src="/images/JM-Logo-White-Background.png"
            alt="JaagoManav logo"
            style={{
              width: logoWidth ? `${logoWidth}px` : undefined,
              height: "auto",
            }}
            className="mx-auto w-auto rounded-md ring-1 ring-gray-200"
            onLoad={syncLogoWidth}
          />
        </div>

        <div className="text-center mb-8">
          <h1
            ref={h1Ref}
            className="text-3xl md:text-4xl font-extrabold text-[#138808] inline-block"
          >
            Volunteer Registration
          </h1>
          <p className="mt-2 text-lg font-semibold text-[#FF9933]">
            Education Volunteers
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl bg-white shadow-[0_18px_50px_-18px_rgba(0,0,0,0.15)] p-6 md:p-8"
        >
          <div className="mb-4">
            <Label title="Full Name" required />
            <Input name="fullName" placeholder="Your full name" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label title="Email Address" required />
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <Label title="Phone" required />
              <Input
                type="tel"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <Label title="Aadhaar Card" required />
              <Input name="aadhaarNo" placeholder="Aadhaar number" required />
              <FileField
                label="Attach Aadhaar (PDF/JPG/PNG)"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFile("aadhaar")}
                file={files.aadhaar}
                required
              />
            </div>
            <div>
              <Label title="PAN Card" required />
              <Input name="panNo" placeholder="PAN number" required />
              <FileField
                label="Attach PAN (PDF/JPG/PNG)"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFile("pan")}
                file={files.pan}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <Label title="Educational Qualifications" required />
            <select
              name="qualification"
              className="w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#138808] focus:border-[#138808] px-3 py-2"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select highest qualification
              </option>
              <option>10th Pass</option>
              <option>12th Pass</option>
              <option>Diploma</option>
              <option>Graduate</option>
              <option>Postgraduate</option>
              <option>PhD</option>
              <option>Other</option>
            </select>

            <FileField
              className="mt-2"
              label="Attach Qualification (PDF/JPG/PNG — multiple allowed)"
              accept=".pdf,.jpg,.jpeg,.png"
              multiple
              files={files.education}
              onChange={handleFile("education", true)}
              required
            />
          </div>

          <div className="mb-4">
            <Label title="Experience" required />
            <Input
              name="experience"
              placeholder="Years / brief description"
              required
            />
          </div>

          <div className="mb-4">
            <Label title="Location" required />
            <Input name="location" placeholder="City / Area" required />
          </div>

          {/* Permanent Address */}
          <div className="mb-6">
            <Label title="Permanent Address" required />
            <Input
              name="permanentAddress"
              placeholder="House no., Street, Area"
              required
            />

            {/* NEW: City & State for Permanent Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div>
                <Label title="City" />
                <Input name="permanentCity" placeholder="City" />
              </div>
              <div>
                <Label title="State" />
                <Input name="permanentState" placeholder="State" />
              </div>
            </div>
          </div>

          <label className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  const get = (name) =>
                    document.querySelector(`input[name="${name}"]`);

                  const permAddr = get("permanentAddress")?.value || "";
                  const permCity = get("permanentCity")?.value || "";
                  const permState = get("permanentState")?.value || "";

                  const currentAddr = get("currentAddress");
                  const cityInput = get("city");
                  const stateInput = get("state");

                  if (currentAddr) currentAddr.value = permAddr;
                  if (cityInput) cityInput.value = permCity;
                  if (stateInput) stateInput.value = permState;
                }
              }}
            />
            <span className="text-sm text-gray-700">
              Same as Permanent Address
            </span>
          </label>

          <div className="mb-6">
            <Label title="Current Address" required />
            <Input
              name="currentAddress"
              placeholder="House no., Street, Area"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <Label title="City" />
              <Input name="city" required />
            </div>
            <div>
              <Label title="State" />
              <Input name="state" required />
            </div>
            <div>
              <Label title="PIN Code" />
              <Input
                name="pincode"
                inputMode="numeric"
                pattern="\d{6}"
                placeholder="6 digits"
                required
              />
            </div>
          </div>

          <label className="flex items-start gap-3 mb-6 cursor-pointer select-none">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#138808] focus:ring-[#138808]"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span className="text-sm text-gray-700">
              <span className="font-semibold">
                No criminal record or any case
              </span>
              , and do not have involvement in any smoking or alcoholic
              consumption regularly or even occasionally.
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#FF9933] text-white font-semibold py-3 hover:bg-[#e7892b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9933]"
          >
            Submit
          </button>
        </form>

        <div className="mt-8 h-1 w-full flex">
          <div className="h-1 flex-1 bg-[#FF9933]" />
          <div className="h-1 flex-1 bg-[#FFFFFF]" />
          <div className="h-1 flex-1 bg-[#138808]" />
        </div>
      </div>
    </section>
  );
}

function Label({ title, required = false }) {
  return (
    <label className="block mb-1 text-sm font-semibold text-[#000080]">
      {title} {required && <span className="text-[#FF9933]">*</span>}
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#138808] focus:border-[#138808] placeholder:text-gray-400 ${
        props.className || ""
      }`}
    />
  );
}

function FileField({
  label,
  accept,
  onChange,
  file,
  files,
  multiple = false,
  required = false,
  className = "",
}) {
  return (
    <div className={className}>
      <div className="mt-2 flex items-center justify-between gap-3 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-3 py-2">
        <div className="flex items-center gap-2 min-w-0">
          <Upload className="h-5 w-5 text-[#000080]" />
          <span className="text-sm text-gray-700 truncate">{label}</span>
        </div>
        <label className="relative inline-flex cursor-pointer items-center justify-center rounded-md bg-white px-3 py-1.5 text-sm font-medium text-[#000080] ring-1 ring-gray-300 hover:bg-gray-100">
          Browse
          <input
            type="file"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            accept={accept}
            onChange={onChange}
            multiple={multiple}
            required={required}
          />
        </label>
      </div>

      <div className="mt-1 space-y-1">
        {file && <SelectedFile name={file.name} size={file.size} />}
        {Array.isArray(files) &&
          files.map((f, i) => (
            <SelectedFile key={i} name={f.name} size={f.size} />
          ))}
      </div>
    </div>
  );
}

function SelectedFile({ name, size = 0 }) {
  const kb = Math.max(1, Math.round((size || 0) / 1024));
  return (
    <div className="flex items-center gap-2 text-xs text-gray-600">
      <CheckCircle2 className="h-4 w-4 text-[#138808]" />
      <span className="truncate">{name}</span>
      <span className="text-gray-400">({kb} KB)</span>
    </div>
  );
}
