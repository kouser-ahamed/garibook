import React, { useState, useRef, useEffect } from 'react';
import {
  Car,
  MapPin,
  Clock,
  ChevronDown,
  ArrowRight,
  Check,
  CheckCircle2,
  X,
  Users,
  Minus,
  Plus
} from 'lucide-react';
import { homeData } from '../../data/homeData';
import DateTimePickerPopover from './DateTimePickerPopover';

export default function BookingForm() {
  const { cars, airports } = homeData.booking;

  // Tabs state: 'car-rental' | 'airport-rental'
  const [activeTab, setActiveTab] = useState('car-rental');

  // Form states
  const [selectedCar, setSelectedCar] = useState(null);
  const [carDropdownOpen, setCarDropdownOpen] = useState(false);
  const carDropdownRef = useRef(null);

  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  // Hourly stepper state (min 2 hours)
  const [hourlyCount, setHourlyCount] = useState(2);

  const [selectedAirport, setSelectedAirport] = useState(null);
  const [airportDropdownOpen, setAirportDropdownOpen] = useState(false);
  const airportRef = useRef(null);
  const dropoffAirportRef = useRef(null);

  const handleSelectAirport = (airport) => {
    setSelectedAirport(airport);
    setAirportDropdownOpen(false);
    if (airportTripType === 'fromAirport') {
      clearError('pickup');
    } else {
      clearError('dropoff');
    }
  };

  const [pickupDateTime, setPickupDateTime] = useState('');
  const [returnDateTime, setReturnDateTime] = useState('');

  // Trip types: 'oneWay' | 'roundWay' | 'hourly'
  const [tripType, setTripType] = useState('oneWay');

  // Airport trip types: 'fromAirport' | 'fromHome'
  const [airportTripType, setAirportTripType] = useState('fromAirport');

  // Modal / submission state
  const [submittedTrip, setSubmittedTrip] = useState(null);
  const [errors, setErrors] = useState({});

  const clearError = (field) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (carDropdownRef.current && !carDropdownRef.current.contains(e.target)) {
        setCarDropdownOpen(false);
      }
      if (
        airportRef.current && !airportRef.current.contains(e.target) &&
        (!dropoffAirportRef.current || !dropoffAirportRef.current.contains(e.target))
      ) {
        setAirportDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleContinue = (e) => {
    e.preventDefault();

    const newErrors = {};

    // 1. Choose a Car
    if (!selectedCar) {
      newErrors.car = 'Please select a car type.';
    }

    if (activeTab === 'car-rental') {
      // 2. Pickup Location
      if (!pickupLocation.trim()) {
        newErrors.pickup = 'Please enter pickup location.';
      }

      // 3. Drop-off Location or Select Hours
      if (tripType === 'hourly') {
        if (!hourlyCount || hourlyCount < 2) {
          newErrors.dropoff = 'Minimum 2 hours is required for an hourly trip.';
        }
      } else {
        if (!dropoffLocation.trim()) {
          newErrors.dropoff = 'Please enter drop-off location.';
        }
      }

      // 4. Pickup Date & Time
      if (!pickupDateTime) {
        newErrors.pickupDateTime = 'Please select date & time.';
      }

      // 5. Return Date & Time (Round Way)
      if (tripType === 'roundWay' && !returnDateTime) {
        newErrors.returnDateTime = 'Please select date & time.';
      }
    } else if (activeTab === 'airport-rental') {
      if (airportTripType === 'fromAirport') {
        // Pickup Airport
        if (!selectedAirport) {
          newErrors.pickup = 'Please enter pickup location.';
        }
        // Drop-off Location
        if (!dropoffLocation.trim()) {
          newErrors.dropoff = 'Please enter drop-off location.';
        }
      } else {
        // Pickup Location
        if (!pickupLocation.trim()) {
          newErrors.pickup = 'Please enter pickup location.';
        }
        // Drop-off Airport
        if (!selectedAirport) {
          newErrors.dropoff = 'Please enter drop-off location.';
        }
      }

      // Pickup Date & Time
      if (!pickupDateTime) {
        newErrors.pickupDateTime = 'Please select date & time.';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Estimate calculation
    const baseFare = activeTab === 'car-rental' ? 3400 : 2100;
    let estFare = baseFare;
    if (tripType === 'roundWay') estFare = baseFare * 1.85;
    else if (tripType === 'hourly') estFare = hourlyCount * 750;

    const airportObj = typeof selectedAirport === 'object' ? selectedAirport : airports.find((a) => a.code === selectedAirport || a.id === selectedAirport);

    setSubmittedTrip({
      tab: activeTab,
      car: selectedCar,
      pickup:
        activeTab === 'car-rental'
          ? pickupLocation
          : airportTripType === 'fromAirport'
            ? (airportObj?.nameEn || airportObj?.name)
            : pickupLocation,
      dropoff:
        activeTab === 'car-rental'
          ? tripType === 'hourly'
            ? `${hourlyCount} Hours City Travel`
            : dropoffLocation
          : airportTripType === 'fromAirport'
            ? dropoffLocation
            : (airportObj?.nameEn || airportObj?.name),
      pickupDateTime: pickupDateTime || 'Immediate Departure',
      returnDateTime: tripType === 'roundWay' ? returnDateTime : null,
      hourlyCount: tripType === 'hourly' ? hourlyCount : null,
      tripType: activeTab === 'car-rental' ? tripType : airportTripType,
      estimatedFare: estFare
    });
  };

  return (
    <div className="relative z-20 w-full">
      {/* 2. Header Tab Layout (Integrated Shape sitting flush on top-left of the card) */}
      <div className="flex">
        <div className="inline-flex items-center bg-white rounded-t-2xl px-2 sm:px-2.5 pt-2 sm:pt-2.5 pb-2 gap-1 sm:gap-1.5 shadow-[0_-4px_16px_rgba(0,0,0,0.02)] border-t border-x border-gray-100/90">
          <button
            type="button"
            onClick={() => {
              setActiveTab('car-rental');
              setErrors({});
            }}
            className={`font-medium px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm transition-all cursor-pointer ${activeTab === 'car-rental'
                ? 'bg-[#111827] text-white shadow-sm'
                : 'bg-transparent text-gray-900 hover:text-black'
              }`}
          >
            Car Rental
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('airport-rental');
              setErrors({});
            }}
            className={`font-medium px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm transition-all cursor-pointer ${activeTab === 'airport-rental'
                ? 'bg-[#111827] text-white shadow-sm'
                : 'bg-transparent text-gray-900 hover:text-black'
              }`}
          >
            Airport Rental
          </button>
        </div>
      </div>

      {/* 3. Main Filter Container (Vertical Divider Style - NO BOXED INPUTS) */}
      <div className="bg-white rounded-2xl rounded-tl-none shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100">
        <form onSubmit={handleContinue}>
          {/* Main 4/5 Column Filter Row separated by vertical divider lines */}
          <div
            className={`grid gap-4 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 ${activeTab === 'car-rental' && tripType === 'roundWay'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
              }`}
          >
            {/* Column 1: Choose a Car * */}
            <div
              className="px-0 lg:px-5 first:lg:pl-0 last:lg:pr-0 py-2 lg:py-0 relative flex flex-col justify-start min-h-[68px]"
              ref={carDropdownRef}
            >
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-1 select-none">
                <Car size={18} className="text-gray-900" />
                <span>
                  Choose a Car <span className="text-red-500">*</span>
                </span>
              </label>

              <div
                className="flex items-center justify-between cursor-pointer pt-1 group select-none min-h-[28px]"
                onClick={() => setCarDropdownOpen(!carDropdownOpen)}
              >
                <div className="flex items-center gap-2 truncate">
                  {selectedCar?.icon && (
                    <img
                      src={selectedCar.icon}
                      alt={selectedCar.name}
                      className="h-4 w-auto object-contain flex-shrink-0"
                    />
                  )}
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 truncate">
                    {selectedCar
                      ? `${selectedCar.name} (${selectedCar.seats} Seats)`
                      : 'Select Car Type'}
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 group-hover:text-gray-600 transition-transform duration-200 flex-shrink-0 ml-1 ${carDropdownOpen ? 'rotate-180' : ''
                    }`}
                />
              </div>

              {errors.car && (
                <p className="text-[11px] sm:text-xs text-red-500 font-normal mt-1 animate-modalPop">
                  {errors.car}
                </p>
              )}

              {/* Vehicle Selection Modal / Popover (Opens upwards to prevent overlap) */}
              {carDropdownOpen && (
                <div className="absolute bottom-full left-0 mb-3 z-[100] w-[300px] sm:w-[340px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-gray-200/90 p-3 animate-modalPop origin-bottom-left">
                  <div className="px-2 py-1.5 mb-1">
                    <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                      AVAILABLE FLEET
                    </span>
                  </div>

                  <div className="max-h-[260px] overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-thumb-gray-300">
                    {cars.map((car) => {
                      const isCarSelected = selectedCar?.id === car.id;
                      return (
                        <div
                          key={car.id}
                          className={`rounded-xl py-2.5 px-3 border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            isCarSelected
                              ? 'bg-blue-50/60 border-blue-600 ring-1 ring-blue-600'
                              : 'bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50/50'
                          }`}
                          onClick={() => {
                            setSelectedCar(car);
                            setCarDropdownOpen(false);
                            clearError('car');
                          }}
                        >
                          {/* Left: Car icon / illustration */}
                          <div className="w-12 h-10 bg-gray-100/80 rounded-lg p-1 flex items-center justify-center flex-shrink-0">
                            <img
                              src={car.icon}
                              alt={car.name}
                              className="h-full w-full object-contain"
                            />
                          </div>

                          {/* Middle: Vehicle Name + Category Badge */}
                          <div className="flex flex-col min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-sm font-bold text-gray-900 leading-snug">
                                {car.name}
                              </span>
                              {car.badge && (
                                <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">
                                  {car.badge}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Right: Seat capacity badge + blue checkmark */}
                          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                            <span className="inline-flex items-center gap-1 text-xs text-gray-600 font-medium bg-gray-100/90 px-2 py-0.5 rounded-md">
                              <Users size={12} className="text-gray-500" />
                              <span>{car.seats}</span>
                            </span>
                            {isCarSelected && (
                              <Check size={16} className="text-blue-600 stroke-[2.5]" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Column 2: Pickup Location / Pickup Airport * */}
            <div
              className="px-0 lg:px-5 first:lg:pl-0 last:lg:pr-0 py-2 lg:py-0 relative flex flex-col justify-start min-h-[68px]"
              ref={airportRef}
            >
              {activeTab === 'car-rental' ? (
                <>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-1 select-none">
                    <MapPin size={18} className="text-amber-500" />
                    <span>
                      Pickup Location <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {/* STRICT REQUIREMENT: Pure native text input, NO DROPDOWN, NO POPUP */}
                  <input
                    type="text"
                    placeholder="Enter Pickup Location"
                    value={pickupLocation}
                    onChange={(e) => {
                      setPickupLocation(e.target.value);
                      if (e.target.value.trim()) clearError('pickup');
                    }}
                    className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none pt-1 min-h-[28px]"
                  />
                </>
              ) : airportTripType === 'fromAirport' ? (
                <>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-1 select-none">
                    <MapPin size={18} className="text-amber-500" />
                    <span>
                      Pickup Airport <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <div
                    className="flex items-center justify-between cursor-pointer pt-1 group select-none min-h-[28px]"
                    onClick={() => setAirportDropdownOpen(!airportDropdownOpen)}
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 truncate">
                      {selectedAirport?.nameEn || selectedAirport?.name || 'Select Airport'}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-gray-400 group-hover:text-gray-600 transition-transform duration-200 flex-shrink-0 ml-1 ${
                        airportDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {airportDropdownOpen && (
                    <div className="absolute bottom-full left-0 mb-3 z-[100] w-[320px] sm:w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-gray-200/90 p-2.5 animate-modalPop origin-bottom-left">
                      <div className="px-2.5 py-1.5 mb-1.5 flex items-center justify-between border-b border-gray-100">
                        <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                          SELECT AIRPORT
                        </span>
                        <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                          Bangladesh
                        </span>
                      </div>
                      <div className="max-h-[260px] overflow-y-auto space-y-1.5 pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        {airports.map((airport) => {
                          const isAirportSelected =
                            selectedAirport?.id === airport.id ||
                            selectedAirport?.code === airport.code;
                          return (
                            <div
                              key={airport.id || airport.code}
                              onClick={() => handleSelectAirport(airport)}
                              className={`p-3 rounded-xl cursor-pointer transition-all ${
                                isAirportSelected
                                  ? 'bg-blue-50/80 text-blue-900 border border-blue-500 shadow-sm'
                                  : 'bg-white hover:bg-gray-50 border border-gray-100/80 hover:border-gray-200 text-gray-800'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <p className="text-sm font-bold text-gray-900 leading-tight">
                                      {airport.nameEn}
                                    </p>
                                    {airport.code && (
                                      <span className="px-1.5 py-0.2 text-[10px] font-bold bg-blue-100 text-blue-700 rounded">
                                        {airport.code}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-blue-600 font-medium mt-0.5">
                                    {airport.nameBn}
                                  </p>
                                  <p className="text-[11px] text-gray-500 mt-0.5">
                                    {airport.terminal}
                                  </p>
                                </div>
                                {isAirportSelected && (
                                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-white stroke-[3]" />
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-1 select-none">
                    <MapPin size={18} className="text-amber-500" />
                    <span>
                      Pickup Location <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Pickup Location"
                    value={pickupLocation}
                    onChange={(e) => {
                      setPickupLocation(e.target.value);
                      if (e.target.value.trim()) clearError('pickup');
                    }}
                    className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none pt-1 min-h-[28px]"
                  />
                </>
              )}

              {errors.pickup && (
                <p className="text-[11px] sm:text-xs text-red-500 font-normal mt-1 animate-modalPop">
                  {errors.pickup}
                </p>
              )}
            </div>

            {/* Column 3: Drop-off Location * (or Hours stepper if Hourly) */}
            <div
              className="px-0 lg:px-5 first:lg:pl-0 last:lg:pr-0 py-2 lg:py-0 relative flex flex-col justify-start min-h-[68px]"
              ref={dropoffAirportRef}
            >
              {activeTab === 'car-rental' && tripType === 'hourly' ? (
                <>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-1 select-none">
                    <Clock size={18} className="text-blue-600" />
                    <span>
                      Select Hours <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <div className="flex items-center justify-between pt-1 min-h-[28px]">
                    <button
                      type="button"
                      disabled={hourlyCount <= 2}
                      className={`w-7 h-7 rounded-md flex items-center justify-center transition-all ${hourlyCount <= 2
                          ? 'opacity-40 bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer'
                        }`}
                      onClick={() => {
                        setHourlyCount(Math.max(2, hourlyCount - 1));
                        clearError('dropoff');
                      }}
                      aria-label="Decrease hours"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-semibold text-gray-900">
                      {hourlyCount} {hourlyCount === 1 ? 'Hour' : 'Hours'}
                    </span>
                    <button
                      type="button"
                      className="w-7 h-7 rounded-md flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all cursor-pointer"
                      onClick={() => {
                        setHourlyCount(hourlyCount + 1);
                        clearError('dropoff');
                      }}
                      aria-label="Increase hours"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </>
              ) : activeTab === 'airport-rental' && airportTripType === 'fromHome' ? (
                <>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-1 select-none">
                    <MapPin size={18} className="text-blue-600" />
                    <span>
                      Drop-off Airport <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <div
                    className="flex items-center justify-between cursor-pointer pt-1 group select-none min-h-[28px]"
                    onClick={() => setAirportDropdownOpen(!airportDropdownOpen)}
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 truncate">
                      {selectedAirport?.nameEn || selectedAirport?.name || 'Select Airport'}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-gray-400 group-hover:text-gray-600 transition-transform duration-200 flex-shrink-0 ml-1 ${
                        airportDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {airportDropdownOpen && (
                    <div className="absolute bottom-full left-0 mb-3 z-[100] w-[320px] sm:w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-gray-200/90 p-2.5 animate-modalPop origin-bottom-left">
                      <div className="px-2.5 py-1.5 mb-1.5 flex items-center justify-between border-b border-gray-100">
                        <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                          SELECT AIRPORT
                        </span>
                        <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                          Bangladesh
                        </span>
                      </div>
                      <div className="max-h-[260px] overflow-y-auto space-y-1.5 pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        {airports.map((airport) => {
                          const isAirportSelected =
                            selectedAirport?.id === airport.id ||
                            selectedAirport?.code === airport.code;
                          return (
                            <div
                              key={airport.id || airport.code}
                              onClick={() => handleSelectAirport(airport)}
                              className={`p-3 rounded-xl cursor-pointer transition-all ${
                                isAirportSelected
                                  ? 'bg-blue-50/80 text-blue-900 border border-blue-500 shadow-sm'
                                  : 'bg-white hover:bg-gray-50 border border-gray-100/80 hover:border-gray-200 text-gray-800'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <p className="text-sm font-bold text-gray-900 leading-tight">
                                      {airport.nameEn}
                                    </p>
                                    {airport.code && (
                                      <span className="px-1.5 py-0.2 text-[10px] font-bold bg-blue-100 text-blue-700 rounded">
                                        {airport.code}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-blue-600 font-medium mt-0.5">
                                    {airport.nameBn}
                                  </p>
                                  <p className="text-[11px] text-gray-500 mt-0.5">
                                    {airport.terminal}
                                  </p>
                                </div>
                                {isAirportSelected && (
                                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-white stroke-[3]" />
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-1 select-none">
                    <MapPin size={18} className="text-blue-600" />
                    <span>
                      Drop-off Location <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Drop-off Location"
                    value={dropoffLocation}
                    onChange={(e) => {
                      setDropoffLocation(e.target.value);
                      if (e.target.value.trim()) clearError('dropoff');
                    }}
                    className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none pt-1 min-h-[28px]"
                  />
                </>
              )}

              {errors.dropoff && (
                <p className="text-[11px] sm:text-xs text-red-500 font-normal mt-1 animate-modalPop">
                  {errors.dropoff}
                </p>
              )}
            </div>

            {/* Column 4: Pickup Date & Time * */}
            <div className="px-0 lg:px-5 first:lg:pl-0 last:lg:pr-0 py-2 lg:py-0 relative flex flex-col justify-start min-h-[68px]">
              <DateTimePickerPopover
                value={pickupDateTime}
                onChange={(val) => {
                  setPickupDateTime(val);
                  if (val) clearError('pickupDateTime');
                }}
                label="Pickup Date & Time"
                placeholder="MM/DD/YYYY 00:00 PM"
              />
              {errors.pickupDateTime && (
                <p className="text-[11px] sm:text-xs text-red-500 font-normal mt-1 animate-modalPop">
                  {errors.pickupDateTime}
                </p>
              )}
            </div>

            {/* Column 5: Return Date & Time * (Only when Round Way is selected) */}
            {activeTab === 'car-rental' && tripType === 'roundWay' && (
              <div className="px-0 lg:px-5 first:lg:pl-0 last:lg:pr-0 py-2 lg:py-0 relative flex flex-col justify-start min-h-[68px]">
                <DateTimePickerPopover
                  value={returnDateTime}
                  onChange={(val) => {
                    setReturnDateTime(val);
                    if (val) clearError('returnDateTime');
                  }}
                  label="Return Date & Time"
                  placeholder="MM/DD/YYYY 00:00 PM"
                />
                {errors.returnDateTime && (
                  <p className="text-[11px] sm:text-xs text-red-500 font-normal mt-1 animate-modalPop">
                    {errors.returnDateTime}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* 4. Bottom Controls Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mt-6 pt-5 border-t border-gray-100 gap-4">
            {/* Left Radio Group */}
            <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
              {activeTab === 'car-rental' ? (
                <>
                  {[
                    { id: 'oneWay', label: 'One Way' },
                    { id: 'roundWay', label: 'Round Way' },
                    { id: 'hourly', label: 'Hourly' }
                  ].map((item) => {
                    const isSelected = tripType === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setTripType(item.id);
                          setErrors({});
                        }}
                        className={`cursor-pointer px-3 sm:px-4 py-1.5 rounded-lg flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium transition-all ${isSelected
                            ? 'text-blue-600 bg-blue-50/50'
                            : 'text-gray-900 hover:text-black bg-transparent'
                          }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-blue-600' : 'border-gray-300'
                            }`}
                        >
                          {isSelected ? (
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600" />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-transparent" />
                          )}
                        </span>
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </>
              ) : (
                <>
                  {[
                    { id: 'fromAirport', label: 'From Airport' },
                    { id: 'fromHome', label: 'From Home' }
                  ].map((item) => {
                    const isSelected = airportTripType === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setAirportTripType(item.id);
                          setErrors({});
                        }}
                        className={`cursor-pointer px-3 sm:px-4 py-1.5 rounded-lg flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium transition-all ${isSelected
                            ? 'text-blue-600 bg-blue-50/50'
                            : 'text-gray-900 hover:text-black bg-transparent'
                          }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-blue-600' : 'border-gray-300'
                            }`}
                        >
                          {isSelected ? (
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600" />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-transparent" />
                          )}
                        </span>
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </>
              )}
            </div>

            {/* Right Action Button: Bright vibrant blue pill button */}
            <button
              type="submit"
              className="bg-[#1a56db] hover:bg-blue-700 text-white font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl inline-flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer w-full sm:w-auto text-sm sm:text-base"
            >
              <span>Continue</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation / Trip Estimate Modal */}
      {submittedTrip && (
        <div className="fixed inset-0 w-full h-full bg-black/65 backdrop-blur-sm flex items-center justify-center z-[9999] p-3 sm:p-5 animate-modalPop">
          <div className="bg-white w-full max-w-[520px] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl border border-gray-100 max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold font-heading text-gray-900">
                  Trip Bidding Request Ready!
                </h3>
              </div>
              <button
                type="button"
                className="text-gray-400 p-1 hover:text-gray-900 transition-colors cursor-pointer"
                onClick={() => setSubmittedTrip(null)}
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-5">
              Here is your trip overview. In the live Garibook app, drivers will now bid on this request with 0% commission.
            </p>

            <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 flex flex-col gap-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">Vehicle:</span>
                <span className="text-gray-900 font-semibold">
                  {submittedTrip.car.name} ({submittedTrip.car.seats} Seats)
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">Pickup:</span>
                <span className="text-gray-900 font-semibold truncate max-w-[260px] text-right">
                  {submittedTrip.pickup}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">Drop-off:</span>
                <span className="text-gray-900 font-semibold truncate max-w-[260px] text-right">
                  {submittedTrip.dropoff}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">Trip Type:</span>
                <span className="text-gray-900 font-semibold capitalize">
                  {submittedTrip.tripType}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">Departure:</span>
                <span className="text-gray-900 font-semibold">
                  {submittedTrip.pickupDateTime}
                </span>
              </div>
              {submittedTrip.returnDateTime && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-medium">Return:</span>
                  <span className="text-gray-900 font-semibold">
                    {submittedTrip.returnDateTime}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between text-sm pt-2.5 border-t border-blue-100">
                <span className="text-gray-500 font-medium">Est. Bidding Fare:</span>
                <span className="text-lg font-bold text-blue-600">
                  ৳ {submittedTrip.estimatedFare.toLocaleString()} BDT
                </span>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-3 w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-base py-3.5 px-6 rounded-full shadow-lg transition-all cursor-pointer"
                onClick={() => setSubmittedTrip(null)}
              >
                <span>Confirm & Request Driver Bids</span>
                <Check size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
