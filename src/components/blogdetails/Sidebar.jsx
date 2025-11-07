import { HiOutlineSearch } from "react-icons/hi";

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
    <aside className="space-y-6">
      {/* Search */}
      <div className="bg-[#F6FCFD] rounded-2xl p-4 mb-2 shadow-none">
        <div className="text-sm font-semibold mb-2">Search Here</div>
        <div className="relative">
          <input
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none text-sm"
            placeholder="Search.."
          />
          <HiOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
        </div>
      </div>
      {/* Categories */}
      <div className="bg-[#F6FCFD] rounded-2xl p-4 mb-2 shadow-none">
        <div className="text-base font-semibold mb-2">Categories</div>
        <ul className="divide-y divide-gray-200 text-sm">
          {categories.map((cat) => (
            <li key={cat.name} className="flex justify-between py-1.5">
              <span className="text-gray-700">{cat.name}</span>
              <span className="text-gray-500">{cat.count}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Recent Posts */}
      <div className="bg-[#F6FCFD] rounded-2xl p-4 mb-2 shadow-none">
        <div className="text-base font-semibold mb-2">Recent Post</div>
        <ul className="divide-y divide-gray-200">
          {recentPosts.map((post) => (
            <li key={post.title} className="flex gap-3 items-start py-2">
              <img
                src={post.img}
                alt={post.title}
                className="w-12 h-12 object-cover rounded-md"
              />
              <div className="flex-1">
                <div className="flex items-center gap-1 text-xs text-gray-400 mb-0.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-orange-300 mr-1" />
                  {post.date}
                </div>
                <div className="text-[13px] font-semibold text-gray-800 leading-tight">
                  {post.title}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Popular Tags */}
      <div className="bg-[#F6FCFD] rounded-2xl p-4 shadow-none">
        <div className="text-base font-semibold mb-2">Popular Tags</div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-white text-gray-700 border border-gray-200 px-3 py-1 rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
