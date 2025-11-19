export default function CommentsSection() {
  return (
    <section className="mt-10">
      {/* Comment wrapper (comment-one) */}
      <div className="mb-8">
        {/* Title (comment-one__title) */}
        <h3 className="text-[25px] leading-[35px] font-bold mb-5 capitalize">
          2 comments
        </h3>

        {/* Comment 1 */}
        <div className="flex items-start gap-7">
          {/* Avatar */}
          <div className="max-w-[80px] w-full">
            <img
              src="/images/about-two-img-1.jpg"
              alt="Stanio lainton"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative flex-1">
            <h4 className="text-[20px] leading-[30px] font-bold text-[#111827]">
              Stanio lainton
            </h4>
            <span className="block text-[16px] font-semibold text-[#6b7280]">
              September 16, 2025
            </span>
            <p className="mt-5 mb-5 text-[15px] leading-relaxed text-gray-600">
              Ished fact that a reader will be distrol acted bioii the.ished
              fact that a reader will be distrol acted laoreet Aliquam fact that
              a reader will be distrol acted Aliquam eros justo. Ished fact that
              a reader will be distrol acted bioii the.i
            </p>

            {/* Reply button in top-right (comment-one__btn-box) */}
            <div className="absolute top-0 right-0">
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-[#138808] px-5 py-1.5 text-[15px] leading-[25px] font-semibold text-white shadow hover:bg-[#FF9933] transition-colors"
              >
                reply
              </a>
            </div>
          </div>
        </div>

        {/* Comment 2 (with top border, extra spacing) */}
        <div className="mt-5 pt-10 border-t border-black/15 flex items-start gap-7">
          {/* Avatar */}
          <div className="max-w-[80px] w-full">
            <img
              src="/images/about-two-img-1.jpg"
              alt="Junal Alex"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative flex-1">
            <h4 className="text-[20px] leading-[30px] font-bold text-[#111827]">
              Junal Alex
            </h4>
            <span className="block text-[16px] font-semibold text-[#6b7280]">
              September 16, 2025
            </span>
            <p className="mt-5 mb-5 text-[15px] leading-relaxed text-gray-600">
              Ished fact that a reader will be distrol acted bioii the.ished
              fact that a reader will be distrol acted laoreet Aliquam fact that
              a reader will be distrol acted Aliquam eros justo. Ished fact that
              a reader will be distrol acted bioii the.i
            </p>

            {/* Reply button */}
            <div className="absolute top-0 right-0">
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-[#138808] px-5 py-1.5 text-[15px] leading-[25px] font-semibold text-white shadow hover:bg-[#FF9933] transition-colors"
              >
                reply
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Comment Form (comment-form) */}
      <div className="bg-[#F6FCFD] rounded-[20px] px-6 py-8 md:px-10 md:py-10 mt-8">
        <h3 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold leading-[36px] md:leading-[50px]">
          Add a comment
        </h3>
        <p className="text-[14px] sm:text-[15px] text-[#111827] mt-2 mb-7">
          By using form u agree with the message sorage, you can contact us
          directly now
        </p>

        <form className="space-y-5">
          {/* Three inputs row (name/email/website) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="h-[50px] w-full rounded-[16px] bg-white px-7 text-[15px] text-gray-600 outline-none border-none shadow-sm"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="h-[50px] w-full rounded-[16px] bg-white px-7 text-[15px] text-gray-600 outline-none border-none shadow-sm"
              />
            </div>
            <div>
              <input
                type="text"
                name="website"
                placeholder="Your Website"
                className="h-[50px] w-full rounded-[16px] bg-white px-7 text-[15px] text-gray-600 outline-none border-none shadow-sm"
              />
            </div>
          </div>

          {/* Textarea */}
          <div>
            <textarea
              name="message"
              placeholder="Write your messege"
              className="w-full h-[165px] rounded-[16px] bg-white px-7 py-4 text-[15px] text-gray-600 outline-none border-none shadow-sm resize-none"
            />
          </div>

          {/* Checkbox + Button row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-4">
            {/* ✅ Simple, reliable checkbox (tick will show) */}
            <label className="flex items-center text-[14px] text-[#111827] cursor-pointer select-none">
              <input
                type="checkbox"
                defaultChecked
                name="skipper1"
                className="h-[16px] w-[16px] rounded-[3px] border border-[#111827] mr-2 accent-[#138808]"
              />
              Save my name email and website
            </label>

            {/* Submit button (comment-form__btn-box / thm-btn-ish) */}
            <div className="comment-form__btn-box">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-[#138808] bg-transparent px-6 py-2 text-[15px] font-semibold text-[#138808] hover:bg-[#FF9933] hover:text-white transition-colors"
              >
                <span>Send Messege</span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#138808] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#138808]">
                  {/* arrow icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </form>

        {/* result div placeholder */}
        <div className="mt-3 text-sm text-green-600 hidden">{/* result */}</div>
      </div>
    </section>
  );
}
