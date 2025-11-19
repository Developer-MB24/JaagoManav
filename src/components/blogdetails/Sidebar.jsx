import { HiOutlineSearch, HiOutlineCalendar } from "react-icons/hi";

const categories = [
  { name: "Donation Drive", count: 59 },
  { name: "Community Outreach", count: 35 },
  { name: "Volunteer Assistance", count: 12 },
  { name: "Fundraising Event", count: 46 },
  { name: "Support Network", count: 78 },
  { name: "Philanthropic Initiative", count: 89 },
];

const recentPosts = [
  {
    img: "/images/about-two-img-2.jpg",
    date: "October 19, 2022",
    title: "Funding Research for a Cure Charity",
  },
  {
    img: "/images/about-two-img-1.jpg",
    date: "October 19, 2022",
    title: "Supporting Mental Health Initiatives Donations",
  },
  {
    img: "/images/about-two-img-3.jpg",
    date: "October 19, 2022",
    title: "Caring for the Elderly and Vulnerable at a Time",
  },
];

const tags = [
  "Giving Back",
  "Relief Effort",
  "Positive Impact",
  "Kindness",
  "Care",
  "Helping",
];

export default function Sidebar() {
  return (
    <aside className="w-full space-y-5">
      {/* Search */}
      <div className="bg-[#F6FCFD] rounded-2xl p-7 shadow-none">
        <div className="mb-7">
          <h3 className="text-[22px] font-bold leading-[34px] border-b border-black/15 pb-[11px]">
            Search Here
          </h3>
        </div>
        <form className="relative">
          <input
            type="search"
            className="w-full h-[60px] px-5 pr-12 rounded-[10px] border-none outline-none bg-white text-[16px] text-gray-600"
            placeholder="Search.."
          />
          <button
            type="submit"
            className="absolute top-1/2 right-[15px] -translate-y-1/2 max-w-[40px] w-full flex items-center justify-center text-[22px] text-gray-500 hover:text-[#138808] transition"
          >
            <HiOutlineSearch />
          </button>
        </form>
      </div>

      {/* Categories */}
      <div className="bg-[#F6FCFD] rounded-2xl p-7 shadow-none">
        <div className="mb-5">
          <h3 className="text-[22px] font-bold leading-[34px] border-b border-black/15 pb-[11px]">
            Categories
          </h3>
        </div>
        <ul className="space-y-[11px]">
          {categories.map((cat) => (
            <li key={cat.name}>
              <a
                href="#"
                className="flex items-center justify-between text-[15px] text-gray-600 bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] bg-[length:0_1px] bg-no-repeat bg-[position:0_95%] transition-[background-size,color] duration-500 hover:text-[#138808] hover:bg-[length:100%_1px]"
              >
                <span>{cat.name}</span>
                <span>{cat.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-[#F6FCFD] rounded-2xl px-7 py-7 pr-5 shadow-none">
        <div className="mb-[17px]">
          <h3 className="text-[22px] font-bold leading-[34px] border-b border-black/15 pb-[11px]">
            Recent Post
          </h3>
        </div>
        <ul>
          {recentPosts.map((post, idx) => (
            <li
              key={post.title}
              className={`flex items-center ${idx > 0 ? "mt-[17px]" : ""}`}
            >
              <div className="max-w-[80px] w-full">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="ml-[15px] flex-1">
                <p className="mt-[6px] text-sm text-gray-500 flex items-center gap-2">
                  <span className="text-[#138808] font-black mr-[10px]">
                    <HiOutlineCalendar className="w-4 h-4" />
                  </span>
                  {post.date}
                </p>
                <h4 className="text-[18px] leading-[28px] font-bold">
                  <a
                    href="#"
                    className="text-[#111827] hover:text-[#138808] transition-colors"
                  >
                    {post.title}
                  </a>
                </h4>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Tags */}
      <div className="bg-[#F6FCFD] rounded-2xl p-7 shadow-none">
        <div className="mb-[21px]">
          <h3 className="text-[22px] font-bold leading-[34px] border-b border-black/15 pb-[11px]">
            Popular Tags
          </h3>
        </div>
        <div className="-ml-[10px] flex flex-wrap">
          {tags.map((tag) => (
            <a
              href="#"
              key={tag}
              className="ml-[10px] mt-[10px] inline-block rounded-[10px] bg-white px-[14px] py-[9px] text-[16px] font-medium leading-[26px] text-gray-600 transition-all duration-500 hover:bg-[#138808] hover:text-white"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
