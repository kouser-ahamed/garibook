import React from "react";

const SpinningWheel = () => (
  <div className="w-full h-full rounded-full animate-[spin_0.5s_linear_infinite]">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
      {/* Outer Rubber Tire */}
      <circle cx="50" cy="50" r="48" fill="#0f172a" stroke="#1e293b" strokeWidth="3" />
      {/* Brake Disc Backplate */}
      <circle cx="50" cy="50" r="34" fill="#334155" />
      {/* Metallic Multi-Spoke Rims */}
      <g stroke="#f1f5f9" strokeWidth="4" strokeLinecap="round">
        <line x1="50" y1="16" x2="50" y2="84" />
        <line x1="16" y1="50" x2="84" y2="50" />
        <line x1="26" y1="26" x2="74" y2="74" />
        <line x1="26" y1="74" x2="74" y2="26" />
        <line x1="18" y1="38" x2="82" y2="62" />
        <line x1="38" y1="18" x2="62" y2="82" />
        <line x1="18" y1="62" x2="82" y2="38" />
        <line x1="38" y1="82" x2="62" y2="18" />
      </g>
      {/* Center Mercedes Style Hub */}
      <circle cx="50" cy="50" r="10" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="3" fill="#ffffff" />
    </svg>
  </div>
);

export const RunningCar = () => {
  return (
    <div className="relative w-40 sm:w-48 lg:w-56 h-auto select-none pointer-events-none">
      {/* Wheels Placed Behind / Inside the Body Arches */}
      {/* REAR WHEEL (Back) */}
      <div
        className="absolute z-10"
        style={{
          width: "15.9%",
          aspectRatio: "1/1",
          left: "14.4%",
          bottom: "1.0%",
        }}
      >
        <SpinningWheel />
      </div>

      {/* FRONT WHEEL (Front) */}
      <div
        className="absolute z-10"
        style={{
          width: "15.9%",
          aspectRatio: "1/1",
          left: "76.1%",
          bottom: "1.0%",
        }}
      >
        <SpinningWheel />
      </div>

      {/* Main Car Body Cutout (Overlay on top of wheels) */}
      <img
        src="/assets/car-body-no-wheels.png"
        alt="Garibook Luxury Car"
        className="w-full h-auto object-contain block relative z-20"
      />
    </div>
  );
};

export default RunningCar;