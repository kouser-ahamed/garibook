import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Tag, Car, Share2, CheckCircle2, ChevronRight, PhoneCall } from 'lucide-react';
import { blogsData } from '../../data/blogsData';

export default function BlogDetail({ blogId, onBack, onSelectBlog }) {
  const blog = blogsData.find((b) => b.id === Number(blogId)) || blogsData[0];
  const relatedBlogs = blogsData.filter((b) => b.id !== blog.id);

  // Scroll to top when blog changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [blogId]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.desc,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('আর্টিকেলের লিঙ্ক কপি করা হয়েছে!');
    }
  };

  return (
    <article className="min-h-screen bg-slate-50/60 pb-20 pt-[140px] sm:pt-[160px] lg:pt-[176px]">
      <div className="max-w-[1040px] mx-auto px-5 sm:px-8">
        {/* Navigation Breadcrumb & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-primary-gb hover:border-primary-gb hover:bg-blue-50/40 font-semibold text-sm transition-all duration-200 shadow-sm cursor-pointer group active:scale-95"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1 text-primary-gb" />
            <span>সকল ব্লগে ফিরে যান</span>
          </button>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <span
              onClick={onBack}
              className="hover:text-primary-gb cursor-pointer transition-colors"
            >
              হোম
            </span>
            <ChevronRight size={14} />
            <span
              onClick={onBack}
              className="hover:text-primary-gb cursor-pointer transition-colors"
            >
              Beyond Destinations
            </span>
            <ChevronRight size={14} />
            <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-xs">
              {blog.category}
            </span>
          </div>
        </div>

        {/* Article Header Card */}
        <header className="bg-white rounded-[28px] p-6 sm:p-10 border border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.04)] mb-8">
          {/* Category & Read Time */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0052fe]/10 text-primary-gb text-xs sm:text-sm font-bold">
              <Tag size={14} />
              {blog.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 font-medium">
              <Clock size={15} />
              {blog.readTime}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-black text-slate-900 leading-[1.25] tracking-tight font-heading mb-6">
            {blog.title}
          </h1>

          {/* Published Meta & Share */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0052fe] to-sky-400 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                GB
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">
                  {blog.author?.name || 'Garibook Editorial Team'}
                </p>
                <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                  <Calendar size={13} />
                  {blog.publishTime || blog.date}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              title="শেয়ার করুন"
            >
              <Share2 size={16} />
              <span>শেয়ার</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden mb-10 shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-slate-200/80 bg-slate-900 aspect-[16/9] max-h-[520px]">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Article Body Content */}
        <div className="bg-white rounded-[28px] p-6 sm:p-12 border border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.04)] text-slate-700">
          {blog.sections && blog.sections.length > 0 ? (
            <div className="space-y-6">
              {blog.sections.map((section, idx) => {
                if (section.type === 'heading') {
                  return (
                    <h2
                      key={idx}
                      className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 pt-6 pb-2 border-b border-slate-100 font-heading tracking-tight"
                    >
                      {section.title}
                    </h2>
                  );
                }

                if (section.type === 'paragraph') {
                  return (
                    <p
                      key={idx}
                      className="text-base sm:text-lg leading-[1.8] text-slate-700 font-normal"
                    >
                      {section.text}
                    </p>
                  );
                }

                if (section.type === 'callout') {
                  return (
                    <div
                      key={idx}
                      className="my-6 p-5 sm:p-6 rounded-2xl bg-blue-50/80 border-l-4 border-primary-gb text-slate-800 text-base sm:text-lg leading-relaxed shadow-sm font-medium"
                    >
                      {section.text}
                    </div>
                  );
                }

                if (section.type === 'list') {
                  return (
                    <ul key={idx} className="space-y-3 my-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-base sm:text-lg text-slate-700">
                          <CheckCircle2 size={20} className="text-primary-gb shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (section.type === 'spot') {
                  return (
                    <div
                      key={idx}
                      className="my-6 p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 rounded-full bg-primary-gb text-white font-bold text-sm flex items-center justify-center shrink-0">
                          {section.number}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {section.name}
                        </h3>
                      </div>
                      <p className="text-base sm:text-lg leading-relaxed text-slate-700 mb-4">
                        {section.desc}
                      </p>
                      {section.meta && section.meta.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-slate-200/70">
                          {section.meta.map((m, mIdx) => (
                            <div key={mIdx} className="text-sm bg-white p-2.5 rounded-xl border border-slate-200/60">
                              <span className="font-bold text-slate-900">{m.label}: </span>
                              <span className="text-slate-600">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (section.type === 'foods') {
                  return (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                      {section.items.map((food, fIdx) => (
                        <div
                          key={fIdx}
                          className="bg-amber-50/50 border border-amber-200/80 p-5 rounded-2xl flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                              ঐতিহ্যবাহী খাবার
                            </span>
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-2">
                              {food.title}
                            </h4>
                            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                              {food.desc}
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-amber-200/70 text-sm font-bold text-amber-900">
                            আনুমানিক মূল্য: {food.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }

                if (section.type === 'hotels') {
                  return (
                    <div key={idx} className="space-y-4 my-6">
                      {section.categories.map((cat, cIdx) => (
                        <div key={cIdx} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                          <h4 className="font-bold text-slate-900 text-base mb-2">
                            {cat.tier}
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                            {cat.list.map((h, hIdx) => (
                              <li key={hIdx}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ) : (
            <p className="text-lg leading-relaxed text-slate-700">
              {blog.desc}
            </p>
          )}

          {/* Garibook Travel Booking Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
                <Car size={14} /> নিরাপদ ইন্টারসিটি ভ্রমণ
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading">
                পরিকল্পিত ভ্রমণের জন্য আজই গাড়ি বুক করুন
              </h3>
              <p className="text-sm sm:text-base text-blue-100 mt-1 max-w-lg">
                Garibook-এ পাচ্ছেন ভেরিফাইড চালক, নো-হিডেন চার্জ এবং ৪ সিট থেকে ১১ সিটের আধুনিক সব গাড়ি।
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onBack}
                className="px-6 py-3 rounded-xl bg-primary-gb hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              >
                গাড়ি বুকিং করুন
              </button>
              <a
                href="https://garibook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20"
              >
                ভিজিট Garibook
              </a>
            </div>
          </div>
        </div>

        {/* Other Related Blogs */}
        {relatedBlogs.length > 0 && (
          <div className="mt-14">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-slate-900 font-heading">
                আরও পড়ুন
              </h3>
              <button
                type="button"
                onClick={onBack}
                className="text-sm font-bold text-primary-gb hover:underline cursor-pointer"
              >
                সব ব্লগ দেখুন →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedBlogs.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectBlog ? onSelectBlog(rel.id) : (window.location.hash = `#blog-${rel.id}`)}
                  className="group bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col sm:flex-row gap-4 hover:-translate-y-1"
                >
                  <div className="w-full sm:w-44 h-36 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-xs font-bold text-primary-gb bg-blue-50 px-2 py-0.5 rounded">
                        {rel.category}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-primary-gb transition-colors mt-2 line-clamp-2">
                        {rel.title}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium mt-3 pt-2 border-t border-slate-100">
                      <span>{rel.readTime}</span>
                      <span className="font-bold text-primary-gb group-hover:translate-x-1 transition-transform">
                        পড়ুন →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
