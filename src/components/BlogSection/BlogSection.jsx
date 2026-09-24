import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogsData } from '../../data/blogsData';

export default function BlogSection({ onSelectBlog }) {
  const blogs = blogsData;

  const handleOpenBlog = (e, id) => {
    e.preventDefault();
    if (onSelectBlog) {
      onSelectBlog(id);
    } else {
      window.location.hash = `#blog-${id}`;
    }
  };

  return (
    <section className="bg-white section-padding" id="blogs">
      <div className="container">
        {/* Section Header */}
        <div className="blog-header-row gsap-section-header flex items-end justify-between mb-[45px] gap-6 max-md:flex-col max-md:items-start">
          <div className="max-w-[680px]">
            <h2 className="text-[clamp(1.85rem,3.5vw,3rem)] font-bold font-heading text-dark-gb tracking-[-1px]">
              Beyond Destinations
            </h2>
            <p className="text-[1.15rem] leading-[1.6] text-[#666666] mt-3">
              Discover travel hacks, guides, and inspirations for your next intercity trip with Garibook.
            </p>
          </div>
          <div>
            <a
              href="#blogs"
              onClick={(e) => {
                e.preventDefault();
                if (onSelectBlog) onSelectBlog(blogs[0]?.id || 1);
              }}
              className="group inline-flex items-center gap-2.5 text-[1.2rem] font-bold text-primary-gb transition-transform duration-200 hover:translate-x-1 cursor-pointer"
            >
              <span>Show All Blogs</span>
              <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="blogs-grid grid grid-cols-3 max-[991px]:grid-cols-2 max-sm:grid-cols-1 gap-[30px]">
          {blogs.map((blog, idx) => (
            <article
              key={blog.id || idx}
              onClick={(e) => handleOpenBlog(e, blog.id)}
              className="blog-card-item group bg-white rounded-[18px] overflow-hidden border border-border-color shadow-[0_6px_20px_rgba(0,0,0,0.05)] flex flex-col transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] hover:border-[#b0c4de] cursor-pointer select-none"
            >
              <div className="relative w-full h-[240px] overflow-hidden bg-slate-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/images/travel_tour.jpg";
                  }}
                />
                <span className="absolute top-4 left-4 bg-primary-gb/90 text-white py-1.5 px-3.5 rounded-md text-[0.8rem] font-semibold backdrop-blur-sm z-10">
                  {blog.category}
                </span>
              </div>

              <div className="p-6 pt-[26px] flex flex-col flex-grow">
                <div className="flex items-center gap-4.5 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[0.85rem] text-[#888888] font-medium">
                    <Calendar size={14} /> {blog.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[0.85rem] text-[#888888] font-medium">
                    <Clock size={14} /> {blog.readTime}
                  </span>
                </div>

                <h4 className="text-[1.3rem] font-bold font-heading leading-[1.35] text-dark-gb mb-3 group-hover:text-primary-gb transition-colors">
                  {blog.title}
                </h4>
                <p className="text-[0.95rem] leading-[1.55] text-[#666666] mb-5 flex-grow line-clamp-3">
                  {blog.desc || blog.excerpt}
                </p>

                <div>
                  <span className="group/btn inline-flex items-center gap-2 text-[0.95rem] font-bold text-primary-gb transition-all duration-200 group-hover:gap-3">
                    <span>Read Article</span>
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
