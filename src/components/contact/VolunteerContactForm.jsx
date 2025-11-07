import { FaArrowRight } from "react-icons/fa";

export default function VolunteerContactForm() {
  return (
    <section className="flex flex-col items-center py-12 px-2 bg-[#FCF9EE]">
      <div className="max-w-2xl w-full text-center mb-8">
        <h2 className="font-extrabold text-3xl sm:text-4xl text-black tracking-tight mb-2">
          Get in touch with our team
        </h2>
        <div className="text-gray-500 mb-2 text-base">
          Fill out the form and Feel free to say !!
        </div>
      </div>
      {/* Form */}
      <form className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-none border border-gray-200 p-8 space-y-6">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row md:gap-5 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="flex-1 rounded-md border border-gray-200 px-4 py-3 text-base bg-[#FCFCFC] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="flex-1 rounded-md border border-gray-200 px-4 py-3 text-base bg-[#FCFCFC] focus:outline-none"
          />
        </div>
        {/* Row 2 */}
        <div className="flex flex-col md:flex-row md:gap-5 gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 rounded-md border border-gray-200 px-4 py-3 text-base bg-[#FCFCFC] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Current Location"
            className="flex-1 rounded-md border border-gray-200 px-4 py-3 text-base bg-[#FCFCFC] focus:outline-none"
          />
        </div>
        {/* Message Row */}
        <textarea
          rows={5}
          placeholder="Message"
          className="w-full rounded-md border border-gray-200 px-4 py-3 text-base bg-[#FCFCFC] focus:outline-none resize-none"
        />
        {/* Button */}
        <div className="flex justify-center mt-2">
          <button
            type="submit"
            className="flex items-center gap-2 px-8 py-2 bg-[#FF9933] rounded-full text-base font-medium text-white shadow hover:bg-[#FF9933] transition border-none"
          >
            Submit Now
            <span className="bg-[#173434] ml-2 p-1 rounded-full text-white flex items-center justify-center text-xs">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </form>
    </section>
  );
}
