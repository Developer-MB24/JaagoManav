export default function BlogContent() {
  return (
    <article>
      {/* Image wrapper (blog-details__img) */}
      <div className="relative mb-5">
        <img
          src="/images/blog-details-img-1.jpg"
          alt="Volunteer team"
          className="w-full rounded-[15px] object-cover"
        />
      </div>

      {/* Content (blog-details__content) */}
      <div className="pt-5 pb-7">
        {/* Meta (blog-details__meta) */}
        <ul className="flex items-center gap-5 text-[14px] sm:text-[16px] font-medium uppercase text-slate-500">
          <li className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center text-[16px] text-[#138808]">
              {/* user icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" />
              </svg>
            </span>
            <a
              href="#"
              className="font-medium tracking-[0.04em] hover:text-[#138808] transition-colors"
            >
              By admin
            </a>
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center text-[16px] text-[#138808]">
              {/* chat icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8.5z" />
              </svg>
            </span>
            <a
              href="#"
              className="font-medium tracking-[0.04em] hover:text-[#138808] transition-colors"
            >
              Comments (05)
            </a>
          </li>
        </ul>

        {/* Title (blog-details__title) */}
        <h1 className="text-[26px] sm:text-[32px] md:text-[38px] leading-snug md:leading-[48px] font-extrabold text-black mt-[21px] mb-[19px] capitalize">
          Explore the world like never before travel experience
        </h1>

        {/* Paragraphs (blog-details__text-1, text-2) */}
        <p className="text-[15px] leading-relaxed text-gray-600">
          Web designing in a powerful way of just not an only professions,
          however, in a passion for our Company. We have to a tendency to
          believe the idea that smart looking of any website is the first
          impression on visitors.Web designing in a powerful way of just not an
          only professions, however, in a passion for our Company. We have
        </p>
        <p className="text-[15px] leading-relaxed text-gray-600 mt-5 mb-10">
          Web designing in a powerful way of just not an only professions,
          however, in a passion for our Company. We have to a tendency to
          believe the idea that smart looking of any website is the first
          impression on visitors.Web designing in a powerful way
        </p>

        {/* Author box (blog-details__author-box) */}
        <div className="relative bg-[#F6FCFD] rounded-[20px] px-6 py-7 md:px-10 md:py-9 mb-[30px]">
          <p className="text-[15px] leading-relaxed text-gray-700">
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,
            viverra laoreet augue mattis fermentu m ul amcorper viverra laoreet.
          </p>

          {/* Author name + line (blog-details__author-name) */}
          <div className="flex items-center gap-3 mt-[34px]">
            <span className="inline-block w-10 h-[2px] bg-[#138808]" />
            <span className="text-[18px] leading-[28px] font-bold text-[#111827]">
              Mark wood
            </span>
          </div>

          {/* Quote icon (blog-details__author-quote) */}
          <div className="absolute bottom-[37px] right-[43px] text-[40px] text-[#138808]">
            ❝
          </div>
        </div>

        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Web designing in a powerful way of just not an only professions,
          however, in a passion for our Company. We have to a tendency to
          believe the idea that smart looking of any website is the first
          impression on visitors.Web designing in a powerful way of just not an
          only professions, however, in a passion for our Company. We have
        </p>
      </div>

      {/* Keyword & Tag row (blog-details__keyword-and-tag) */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-y border-black/10 py-5 mt-2">
        {/* Keywords */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-[18px] font-extrabold leading-[28px] text-[#111827]">
            Keyword:
          </span>
          <div className="flex flex-wrap items-center gap-[15px]">
            {["Relief Effort", "Kindness", "Helping"].map((kw) => (
              <a
                key={kw}
                href="#"
                className="inline-block bg-[#F6FCFD] text-gray-600 rounded-[10px] font-medium text-[14px] leading-[26px] px-5 py-2 transition-colors hover:bg-[#138808] hover:text-white"
              >
                {kw}
              </a>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-[18px] font-extrabold leading-[28px] text-[#111827]">
            Tags:
          </span>
          <div className="flex flex-wrap items-center gap-[15px]">
            {["Donation", "Charity"].map((tag) => (
              <a
                key={tag}
                href="#"
                className="text-gray-600 font-medium text-[14px] hover:text-[#138808] transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
