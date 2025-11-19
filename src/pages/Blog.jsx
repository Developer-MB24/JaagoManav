import React from "react";
import BlogHero from "../components/blog/BlogHero";
import BlogCard from "../components/blog/BlogCard";
import BlogSidebar from "../components/blog/BlogSidebar";
import CallToAction from "../components/blog/CallToAction";

export default function Blog() {
  const posts = [
    {
      image: "/images/about-two-img-1.jpg",
      date: "03 Aug 2024",
      title: "Caring For The Elderly And Vulnerable Strategy",
      excerpt:
        "We poor standard chunk nibh velit majority suffered alteration in some form aliquet sollicitudin.",
      link: "/blog/elderly",
    },
    {
      image: "/images/about-two-img-1.jpg",
      date: "03 Aug 2024",
      title: "Help This People In Needleoo Blog.",
      excerpt:
        "We poor standard chunk nibh velit majority suffered alteration in some form aliquet sollicitudin.",
      link: "/blog/needleoo",
    },
    {
      image: "/images/about-two-img-1.jpg",
      date: "27 Aug 2024",
      title: "Education For Poor Children Is A Must",
      excerpt:
        "We poor standard chunk nibh velit majority suffered alteration in some form aliquet sollicitudin.",
      link: "/blog/education",
    },
    {
      image: "/images/about-two-img-1.jpg",
      date: "27 Aug 2024",
      title: "Capitalize On Low Hanging Fruit",
      excerpt:
        "We poor standard chunk nibh velit majority suffered alteration in some form aliquet sollicitudin.",
      link: "/blog/low-hanging-fruit",
    },
    {
      image: "/images/about-two-img-1.jpg",
      date: "21 Aug 2024",
      title: "A Quick Solutions For Daily Problem",
      excerpt:
        "We poor standard chunk nibh velit majority suffered alteration in some form aliquet sollicitudin.",
      link: "/blog/quick-solutions",
    },
    {
      image: "/images/about-two-img-1.jpg",
      date: "21 Aug 2024",
      title: "Podcasting Operational Change",
      excerpt:
        "We poor standard chunk nibh velit majority suffered alteration in some form aliquet sollicitudin.",
      link: "/blog/podcasting",
    },
  ];

  const recent = [
    {
      image: "/images/about-two-img-1.jpg",
      date: "October 19, 2022",
      title: "Funding Research for a Cure Charity",
      link: "/blog/funding-research",
    },
    {
      image: "/images/about-two-img-1.jpg",
      date: "October 19, 2022",
      title: "Supporting Mental Health Initiatives Donations",
      link: "/blog/mental-health",
    },
    {
      image: "/images/about-two-img-1.jpg",
      date: "October 19, 2022",
      title: "Caring for the Elderly and Vulnerable at a Time",
      link: "/blog/caring-elderly",
    },
  ];

  const categories = [
    ["Donation Drive", 59],
    ["Community Outreach", 35],
    ["Volunteer Assistance", 12],
    ["Fundraising Event", 46],
    ["Support Network", 78],
    ["Philanthropic Initiative", 89],
  ];

  const tags = [
    "Giving Back",
    "Relief Effort",
    "Care",
    "Positive Impact",
    "Kindness",
    "Helping",
  ];

  return (
    <>
      <BlogHero />

      <section className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {posts.map((p) => (
            <BlogCard key={p.title} {...p} />
          ))}
        </div>

        <aside>
          <BlogSidebar
            categories={categories}
            recent={recent}
            tags={tags}
            onSearch={(q) => console.log("search:", q)}
          />
        </aside>
      </section>
      <CallToAction />
    </>
  );
}
