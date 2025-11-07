import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactInfoSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
      {/* Google Map Embed */}
      <div className="w-full md:w-[55%]">
        <iframe
          title="Costco Wholesale Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.872767330837!2d-118.80725602484803!3d34.152675673126316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e823bc2e3c8573%3A0xe4e1e58fa2b9b91a!2sCostco%20Wholesale!5e0!3m2!1sen!2sus!4v1689800646032!5m2!1sen!2sus"
          width="100%"
          height="320"
          style={{ border: 0, borderRadius: "16px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Info Cards */}
      <div className="flex flex-col gap-6 w-full md:w-[40%]">
        {/* Address */}
        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 flex items-center gap-4">
          <div className="bg-yellow-100 rounded-full p-3 text-yellow-500">
            <FaMapMarkerAlt size={22} />
          </div>
          <div>
            <div className="font-bold text-lg text-[#173434]">Address</div>
            <div className="text-gray-500 text-[15px]">
              2972 Westheimer Rd. Santa
            </div>
          </div>
        </div>
        {/* Email */}
        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 flex items-center gap-4">
          <div className="bg-orange-100 rounded-full p-3 text-orange-500">
            <FaEnvelope size={22} />
          </div>
          <div>
            <div className="font-bold text-lg text-[#173434]">
              Email Address
            </div>
            <div className="text-gray-500 text-[15px]">
              jeams.sons@example.com
            </div>
          </div>
        </div>
        {/* Phone */}
        <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 flex items-center gap-4">
          <div className="bg-green-100 rounded-full p-3 text-green-500">
            <FaPhone size={22} />
          </div>
          <div>
            <div className="font-bold text-lg text-[#173434]">Phone number</div>
            <div className="text-gray-500 text-[15px]">(704) 555-0127</div>
          </div>
        </div>
      </div>
    </section>
  );
}
