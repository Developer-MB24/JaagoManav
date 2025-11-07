export default function CommentsSection() {
  return (
    <section className="mt-10">
      {/* Comment Count */}
      <div className="text-base font-semibold mb-3">2 Comments</div>

      {/* Single Comment */}
      <div className="flex gap-3 items-start py-4 border-b border-gray-100">
        <img
          src="/images/about-two-img-2.jpg"
          alt="Stanio lainton"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold text-[#144A52] text-[15px]">
                Stanio lainton
              </span>
              <span className="text-xs text-gray-400 block">
                September 16, 2025
              </span>
            </div>
            <button className="border-2 border-[#FF8345] rounded-full px-4 py-1 text-[14px] text-[#144A52] font-semibold hover:bg-[#FFF2E8] transition">
              Reply
            </button>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            Ished fact that a reader will be distrol acted bioi thesished fact
            that a reader will be distrol acted laoreet Aliquam eros justo...
          </div>
        </div>
      </div>
      {/* Second Comment */}
      <div className="flex gap-3 items-start py-4 border-b border-gray-100">
        <img
          src="/images/about-two-img-2.jpg"
          alt="Junal Alex"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold text-[#144A52] text-[15px]">
                Junal Alex
              </span>
              <span className="text-xs text-gray-400 block">
                September 16, 2025
              </span>
            </div>
            <button className="border-2 border-[#FF8345] rounded-full px-4 py-1 text-[14px] text-[#144A52] font-semibold hover:bg-[#FFF2E8] transition">
              Reply
            </button>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            Ished fact that a reader will be distrol acted bioi thesished fact
            that a reader will be distrol acted laoreet Aliquam eros justo...
          </div>
        </div>
      </div>

      {/* Add a Comment Form */}
      <div className="bg-[#F6FCFD] rounded-2xl p-6 mt-8">
        <div className="text-xl font-bold text-[#144A52] mb-2">
          Add a comment
        </div>
        <div className="text-sm text-gray-500 mb-4">
          By using form u agree with the message storage, you can contact us
          directly now
        </div>
        <form className="space-y-4">
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 min-w-[140px] rounded-md border border-gray-200 px-3 py-2 text-sm bg-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 min-w-[140px] rounded-md border border-gray-200 px-3 py-2 text-sm bg-white"
            />
            <input
              type="text"
              placeholder="Your Website"
              className="flex-1 min-w-[140px] rounded-md border border-gray-200 px-3 py-2 text-sm bg-white"
            />
          </div>
          <textarea
            rows={3}
            placeholder="Write your message"
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm bg-white"
          ></textarea>
          <div className="flex items-center justify-between mt-2">
            <label className="flex items-center gap-1 text-xs text-gray-500 cursor-pointer">
              <input type="checkbox" className="accent-[#FF8345]" />
              Save my name email and website
            </label>
            <button
              type="submit"
              className="flex items-center gap-1 border-2 border-[#FF8345] rounded-full px-5 py-1 text-[15px] text-[#144A52] font-semibold focus:outline-none hover:bg-[#FFF2E8] transition"
            >
              Send Message
              <span className="text-[#FF8345] text-lg font-bold">+</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
