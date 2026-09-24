import React from "react";

export const NewsCard = ({
  article,
  image,
  date,
  title,
  desc,
  publisherLogo,
  publisherName,
  logoStyle,
  newsUrl,
}) => {
  // Normalize props whether passed directly or via an 'article' object
  const data = article || {
    image,
    date,
    title,
    desc,
    publisherLogo,
    publisherName,
    logoStyle,
    newsUrl,
  };

  if (!data || !data.title) return null;

  const currentImage = data.image;
  const currentDate = data.date;
  const currentTitle = data.title;
  const currentDesc = data.desc;
  const currentPublisherLogo = data.publisherLogo;
  const currentPublisherName = data.publisherName || data.logoText;
  const currentLogoStyle = data.logoStyle || data.logoColor || "font-bold text-slate-900 text-base";
  const currentNewsUrl = data.newsUrl || "#";

  return (
    <article className="flex flex-col justify-between h-full group select-none">
      <div>
        {/* Top Image Thumbnail Wrapper */}
        <div className="w-full h-56 sm:h-64 rounded-3xl overflow-hidden mb-4 bg-slate-100 shadow-sm relative">
          <img
            src={currentImage}
            alt={currentTitle || "News Cover"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/600x400/f8fafc/64748b?text=News+Article";
            }}
          />
        </div>

        {/* Article Published Date */}
        <p className="text-xs sm:text-sm font-semibold text-slate-400 mb-2.5">
          {currentDate}
        </p>

        {/* Clickable Headline */}
        <a
          href={currentNewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-lg sm:text-[19px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#0052fe] transition-colors line-clamp-2"
        >
          {currentTitle}
        </a>

        {/* Excerpt Description */}
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6">
          {currentDesc}
        </p>
      </div>

      {/* Card Footer: Publisher Brand & Read Action Link */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
        <div className="flex items-center min-h-[28px]">
          {currentPublisherLogo ? (
            <img
              src={currentPublisherLogo}
              alt={currentPublisherName || "Publisher Logo"}
              className="h-6 max-w-[130px] object-contain"
            />
          ) : (
            <span className={currentLogoStyle}>
              {currentPublisherName}
            </span>
          )}
        </div>

        <a
          href={currentNewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0052fe] font-semibold text-xs sm:text-sm hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
        >
          Read Article →
        </a>
      </div>
    </article>
  );
};

export default NewsCard;
