import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { homeData } from '../../data/homeData';

export default function Testimonials() {
  const { testimonials } = homeData;
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const prevReview = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextReview = () => {
    setCurrentTestimonialIndex((prev) =>
      (prev + 1) % testimonials.length
    );
  };

  return (
    <section className="bg-light-gray-gb section-padding" id="reviews">
      <div className="container">
        {/* Passenger Speak Section */}
        <div className="passenger-header-row gsap-section-header flex items-end justify-between mb-10 gap-7.5 max-md:flex-col max-md:items-start">
          <div className="max-w-[720px]">
            <h2 className="text-[clamp(1.15rem,4.5vw,3rem)] font-bold font-heading text-dark-gb tracking-[-1px] whitespace-nowrap">
              Our Passengers Speak For Us
            </h2>
            <p className="text-[1.15rem] leading-[1.6] text-[#666666] mt-3.5">
              Our journey was seamless and enjoyable from start to finish. The booking process was straightforward, and the drivers were incredibly attentive, ensuring comfortable intercity trips.
            </p>
          </div>

          <div className="flex items-center gap-3.5 max-md:hidden">
            <button
              type="button"
              className="w-[54px] h-[54px] rounded-full bg-white border border-border-color flex items-center justify-center text-dark-gb transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:bg-dark-gb hover:text-white hover:border-dark-gb hover:scale-105"
              onClick={prevReview}
              aria-label="Previous Testimonial"
            >
              <ArrowLeft size={22} />
            </button>
            <button
              type="button"
              className="w-[54px] h-[54px] rounded-full bg-white border border-border-color flex items-center justify-center text-dark-gb transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:bg-dark-gb hover:text-white hover:border-dark-gb hover:scale-105"
              onClick={nextReview}
              aria-label="Next Testimonial"
            >
              <ArrowRight size={22} />
            </button>
          </div>
        </div>

        {/* Testimonials Slider Grid */}
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-4 max-[1200px]:grid-cols-2 max-md:grid-cols-1 gap-6">
            {testimonials.map((t, idx) => {
              const isSelected = idx === currentTestimonialIndex;
              return (
                <div
                  key={idx}
                  className={`bg-white p-[30px] rounded-[18px] border-[1.5px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex flex-col justify-between transition-all duration-350 ${
                    isSelected
                      ? 'border-primary-gb -translate-y-1 shadow-[0_14px_32px_rgba(14,82,255,0.12)]'
                      : 'border-transparent hover:border-primary-gb hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(14,82,255,0.12)]'
                  }`}
                >
                  <div className="flex items-center gap-1 mb-4.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#fdd300" color="#fdd300" />
                    ))}
                    <span className="inline-flex items-center gap-1 ml-auto text-[0.75rem] font-semibold text-[#10b981] bg-[#e6fcf5] py-0.5 px-2 rounded">
                      <ShieldCheck size={14} /> Verified Trip
                    </span>
                  </div>

                  <p className="text-[1.05rem] leading-[1.6] text-[#333333] mb-6 flex-grow">"{t.quote}"</p>

                  <div className="flex items-center gap-3.5 pt-4.5 border-t border-[#f0f0f0]">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-border-color"
                    />
                    <div>
                      <h6 className="text-[1.05rem] font-bold text-dark-gb">{t.name}</h6>
                      <span className="text-[0.85rem] text-primary-gb font-semibold">{t.route}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
