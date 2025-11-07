export default function BlogContent() {
  return (
    <article>
      {/* Blog Image */}
      <img
        src="/images/blog-details-img-1.jpg"
        alt="Volunteer team"
        className="w-full h-96 object-cover rounded-xl mb-6"
      />

      {/* Meta */}
      <div className="flex items-center gap-7 mb-2 text-[13px] text-[#FF8345] font-semibold">
        <div className="flex items-center gap-1">
          <span className="inline-block">🖋️</span>
          BY ADMIN
        </div>
        <div className="flex items-center gap-1">
          <span className="inline-block">💬</span>
          COMMENTS (05)
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-[#144A52] mb-3 leading-tight">
        Explore The World Like Never Before Travel Experience
      </h1>

      {/* Paragraphs */}
      <p className="text-gray-600 mb-2 text-[15px] leading-relaxed">
        Web designing in a powerful way of just not only as professionals,
        however, in a passion for our Company. We have a tendency to believe the
        idea that smart looking at any website is the first impression on
        visitors. Web designing in a powerful way of just not only as
        professionals, however, in a passion for our Company. We have...
      </p>
      <p className="text-gray-600 mb-2 text-[15px] leading-relaxed">
        Web designing in a powerful way of just not only as professionals,
        however, in a passion for our Company. We have a tendency to believe the
        idea that smart looking at any website is the first impression on
        visitors. Web designing in a powerful way...
      </p>

      {/* Blockquote */}
      <div className="bg-[#E6F6FA] rounded-lg px-5 py-4 flex flex-col my-6">
        <div className="text-gray-600 text-[15px] mb-2">
          Aliquam eros justo, posuere lobortis viverra laoreet mattis
          ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis,
          viverra laoreet augue mattis fermentum ut ullamcorper viverra laoreet.
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[#144A52] font-semibold text-[14px]">
            Mark wood
          </span>
          <span className="text-[#FF8345] text-xl font-bold">❞</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 text-[15px] leading-relaxed">
        Web designing in a powerful way of just not only as professionals,
        however, in a passion for our Company. We have a tendency to believe the
        idea that smart looking at any website is the first impression on
        visitors.
      </p>

      {/* Keywords/Tags */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <span className="font-medium text-gray-600 text-[15px]">Keyword:</span>
        <span className="bg-[#F6FCFD] px-3 py-1 rounded-md text-[#144A52] text-xs font-semibold border border-gray-200">
          Relief Effort
        </span>
        <span className="bg-[#F6FCFD] px-3 py-1 rounded-md text-[#144A52] text-xs font-semibold border border-gray-200">
          Kindness
        </span>
        <span className="bg-[#F6FCFD] px-3 py-1 rounded-md text-[#144A52] text-xs font-semibold border border-gray-200">
          Helping
        </span>
        <span className="font-medium text-gray-600 text-[15px] ml-5">
          Tags:
        </span>
        <span className="bg-[#F6FCFD] px-3 py-1 rounded-md text-[#FF8345] text-xs font-semibold border border-gray-200">
          Donation
        </span>
        <span className="bg-[#F6FCFD] px-3 py-1 rounded-md text-[#FF8345] text-xs font-semibold border border-gray-200">
          Charity
        </span>
      </div>
    </article>
  );
}
