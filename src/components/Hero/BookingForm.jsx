import React, { useState } from 'react';
import {
  Car,
  Plane,
  MapPin,
  Calendar,
  ChevronDown,
  ArrowRight,
  Check,
  CheckCircle2,
  X,
  Users,
  Briefcase
} from 'lucide-react';
import { homeData } from '../../data/homeData';

export default function BookingForm() {
  const { cars, popularLocations, airports } = homeData.booking;

  // Tabs state: 'car-rental' | 'airport-rental'
  const [activeTab, setActiveTab] = useState('car-rental');

  // Form states
  const [selectedCar, setSelectedCar] = useState(null);
  const [carDropdownOpen, setCarDropdownOpen] = useState(false);

  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupSuggestionsOpen, setPickupSuggestionsOpen] = useState(false);

  const [dropoffLocation, setDropoffLocation] = useState('');
  const [dropoffSuggestionsOpen, setDropoffSuggestionsOpen] = useState(false);

  const [selectedAirport, setSelectedAirport] = useState(airports[0].code);
  const [airportDropdownOpen, setAirportDropdownOpen] = useState(false);

  const [dateTime, setDateTime] = useState('');

  // Trip types: 'oneWay' | 'roundWay' | 'hourly'
  const [tripType, setTripType] = useState('oneWay');

  // Airport trip types: 'fromAirport' | 'fromHome'
  const [airportTripType, setAirportTripType] = useState('fromAirport');

  // Modal / submission state
  const [submittedTrip, setSubmittedTrip] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Location suggestions filter
  const filteredPickup = popularLocations.filter(loc =>
    loc.toLowerCase().includes(pickupLocation.toLowerCase())
  );
  const filteredDropoff = popularLocations.filter(loc =>
    loc.toLowerCase().includes(dropoffLocation.toLowerCase())
  );

  const handleContinue = (e) => {
    e.preventDefault();

    if (!selectedCar) {
      setErrorMessage('Please select a car type.');
      return;
    }

    if (activeTab === 'car-rental' && (!pickupLocation.trim() || !dropoffLocation.trim())) {
      setErrorMessage('Please enter both pickup and drop-off locations.');
      return;
    }

    if (activeTab === 'airport-rental' && !dropoffLocation.trim()) {
      setErrorMessage('Please enter your destination location.');
      return;
    }

    setErrorMessage('');

    // Simulated trip pricing estimate
    const baseFare = activeTab === 'car-rental' ? 3200 : 1800;
    const estFare =
      tripType === 'roundWay'
        ? baseFare * 1.8
        : tripType === 'hourly'
        ? baseFare * 0.7
        : baseFare;

    setSubmittedTrip({
      tab: activeTab,
      car: selectedCar,
      pickup:
        activeTab === 'car-rental'
          ? pickupLocation
          : airportTripType === 'fromAirport'
          ? airports.find(a => a.code === selectedAirport)?.name
          : dropoffLocation,
      dropoff:
        activeTab === 'car-rental'
          ? dropoffLocation
          : airportTripType === 'fromAirport'
          ? dropoffLocation
          : airports.find(a => a.code === selectedAirport)?.name,
      dateTime: dateTime || 'Immediate Departure',
      tripType: activeTab === 'car-rental' ? tripType : airportTripType,
      estimatedFare: estFare
    });
  };

  return (
    <div className="ctd-wrap relative bg-transparent w-full">
      {/* Tab Switcher */}
      <div className="inline-flex gap-2 bg-transparent" role="tablist">
        <button
          type="button"
          className={`inline-flex items-center gap-2.5 py-3.5 px-8 text-[1.1rem] font-semibold rounded-t-[14px] transition-all duration-300 ${
            activeTab === 'car-rental'
              ? 'bg-white text-primary-gb shadow-[0_-4px_16px_rgba(0,0,0,0.04)]'
              : 'bg-[#f0f4fc] text-[#555555] hover:bg-[#e2eafc] hover:text-[#121212]'
          }`}
          onClick={() => {
            setActiveTab('car-rental');
            setErrorMessage('');
          }}
        >
          <Car size={20} />
          <span>Car Rental</span>
        </button>

        <button
          type="button"
          className={`inline-flex items-center gap-2.5 py-3.5 px-8 text-[1.1rem] font-semibold rounded-t-[14px] transition-all duration-300 ${
            activeTab === 'airport-rental'
              ? 'bg-white text-primary-gb shadow-[0_-4px_16px_rgba(0,0,0,0.04)]'
              : 'bg-[#f0f4fc] text-[#555555] hover:bg-[#e2eafc] hover:text-[#121212]'
          }`}
          onClick={() => {
            setActiveTab('airport-rental');
            setErrorMessage('');
          }}
        >
          <Plane size={20} />
          <span>Airport Rental</span>
        </button>
      </div>

      {/* Main Tab Content Card */}
      <div className="bg-white p-8 max-md:p-5 rounded-tr-[18px] rounded-b-[18px] shadow-[0_16px_45px_rgba(14,82,255,0.1)] border border-[#dee7f2]/80">
        <form onSubmit={handleContinue}>
          <div className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-md:grid-cols-1 gap-5">
            {/* 1. Choose a Car Dropdown */}
            <div className="relative flex flex-col">
              <label className="flex items-center gap-2 text-[0.95rem] font-semibold text-[#222222] mb-2">
                <Car size={18} className="text-primary-gb" />
                <span>Choose a Car <span className="text-[#ff3b30]">*</span></span>
              </label>

              <div className="relative w-full">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-3.5 px-4 text-[0.95rem] font-medium bg-[#fafcff] border-[1.5px] border-border-color rounded-[10px] transition-all text-left hover:border-[#b0c4de]"
                  onClick={() => setCarDropdownOpen(!carDropdownOpen)}
                >
                  <span className={`truncate ${selectedCar ? 'text-[#121212] font-semibold' : 'text-[#888888]'}`}>
                    {selectedCar ? selectedCar.name : 'Select Car Type'}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#666666] transition-transform duration-250 ${carDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {carDropdownOpen && (
                  <div className="absolute top-[calc(100%+6px)] left-0 w-full min-w-[280px] bg-white border border-border-color rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.12)] z-[100] max-h-[280px] overflow-y-auto p-1.5">
                    {cars.map((car) => (
                      <div
                        key={car.id}
                        className={`flex flex-col gap-1 p-2.5 px-3.5 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-light-gray-gb ${
                          selectedCar?.id === car.id ? 'bg-[#eaf0ff] border-l-[3px] border-primary-gb' : ''
                        }`}
                        onClick={() => {
                          setSelectedCar(car);
                          setCarDropdownOpen(false);
                          setErrorMessage('');
                        }}
                      >
                        <div className="flex flex-col">
                          <span className="text-[0.95rem] font-semibold text-[#121212]">{car.name}</span>
                          <span className="text-[0.8rem] text-[#777777]">{car.description}</span>
                        </div>
                        <div className="flex gap-3 mt-1">
                          <span className="inline-flex items-center gap-1 text-[0.75rem] text-[#555555] bg-[#eeeeee] py-0.5 px-2 rounded">
                            <Users size={12} /> {car.seats} Seats
                          </span>
                          <span className="inline-flex items-center gap-1 text-[0.75rem] text-[#555555] bg-[#eeeeee] py-0.5 px-2 rounded">
                            <Briefcase size={12} /> {car.luggage}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 2. Pickup Location / Airport Selection */}
            {activeTab === 'car-rental' ? (
              <div className="relative flex flex-col">
                <label className="flex items-center gap-2 text-[0.95rem] font-semibold text-[#222222] mb-2">
                  <MapPin size={18} className="text-primary-gb" />
                  <span>Pickup Location <span className="text-[#ff3b30]">*</span></span>
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Enter Pickup Location"
                    className="w-full py-3.5 px-4 text-[0.95rem] font-medium text-[#121212] bg-[#fafcff] border-[1.5px] border-border-color rounded-[10px] transition-all duration-200 focus:border-primary-gb focus:bg-white focus:ring-4 focus:ring-primary-gb/15 outline-none"
                    value={pickupLocation}
                    onChange={(e) => {
                      setPickupLocation(e.target.value);
                      setPickupSuggestionsOpen(true);
                    }}
                    onFocus={() => setPickupSuggestionsOpen(true)}
                  />
                  {pickupSuggestionsOpen && filteredPickup.length > 0 && (
                    <div className="absolute top-[calc(100%+6px)] left-0 w-full bg-white border border-border-color rounded-[10px] shadow-[0_10px_25px_rgba(0,0,0,0.1)] z-[100] max-h-[220px] overflow-y-auto p-1.5">
                      {filteredPickup.slice(0, 5).map((loc, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 py-2.5 px-3 text-[0.9rem] font-medium text-[#222222] rounded-md cursor-pointer transition-colors duration-200 hover:bg-light-gray-gb hover:text-primary-gb"
                          onClick={() => {
                            setPickupLocation(loc);
                            setPickupSuggestionsOpen(false);
                          }}
                        >
                          <MapPin size={14} className="text-[#888888]" />
                          <span>{loc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="relative flex flex-col">
                <label className="flex items-center gap-2 text-[0.95rem] font-semibold text-[#222222] mb-2">
                  <Plane size={18} className="text-primary-gb" />
                  <span>Pickup Airport <span className="text-[#ff3b30]">*</span></span>
                </label>
                <div className="relative w-full">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-3.5 px-4 text-[0.95rem] font-medium bg-[#fafcff] border-[1.5px] border-border-color rounded-[10px] text-left hover:border-[#b0c4de] transition-colors"
                    onClick={() => setAirportDropdownOpen(!airportDropdownOpen)}
                  >
                    <span className="text-[#121212] font-semibold truncate">
                      {airports.find(a => a.code === selectedAirport)?.name}
                    </span>
                    <ChevronDown size={18} className={`text-[#666666] transition-transform duration-250 ${airportDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {airportDropdownOpen && (
                    <div className="absolute top-[calc(100%+6px)] left-0 w-full min-w-[280px] bg-white border border-border-color rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.12)] z-[100] max-h-[280px] overflow-y-auto p-1.5">
                      {airports.map((airport) => (
                        <div
                          key={airport.code}
                          className={`flex flex-col gap-1 p-2.5 px-3.5 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-light-gray-gb ${
                            selectedAirport === airport.code ? 'bg-[#eaf0ff] border-l-[3px] border-primary-gb' : ''
                          }`}
                          onClick={() => {
                            setSelectedAirport(airport.code);
                            setAirportDropdownOpen(false);
                          }}
                        >
                          <span className="text-[0.95rem] font-semibold text-[#121212]">{airport.name}</span>
                          <span className="inline-flex items-center w-fit text-[0.75rem] text-[#555555] bg-[#eeeeee] py-0.5 px-2 rounded">{airport.terminal}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 3. Drop-off Location */}
            <div className="relative flex flex-col">
              <label className="flex items-center gap-2 text-[0.95rem] font-semibold text-[#222222] mb-2">
                <MapPin size={18} className="text-[#ff3b30]" />
                <span>Drop-off Location <span className="text-[#ff3b30]">*</span></span>
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Enter Drop-off Location"
                  className="w-full py-3.5 px-4 text-[0.95rem] font-medium text-[#121212] bg-[#fafcff] border-[1.5px] border-border-color rounded-[10px] transition-all duration-200 focus:border-primary-gb focus:bg-white focus:ring-4 focus:ring-primary-gb/15 outline-none"
                  value={dropoffLocation}
                  onChange={(e) => {
                    setDropoffLocation(e.target.value);
                    setDropoffSuggestionsOpen(true);
                  }}
                  onFocus={() => setDropoffSuggestionsOpen(true)}
                />
                {dropoffSuggestionsOpen && filteredDropoff.length > 0 && (
                  <div className="absolute top-[calc(100%+6px)] left-0 w-full bg-white border border-border-color rounded-[10px] shadow-[0_10px_25px_rgba(0,0,0,0.1)] z-[100] max-h-[220px] overflow-y-auto p-1.5">
                    {filteredDropoff.slice(0, 5).map((loc, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 py-2.5 px-3 text-[0.9rem] font-medium text-[#222222] rounded-md cursor-pointer transition-colors duration-200 hover:bg-light-gray-gb hover:text-primary-gb"
                        onClick={() => {
                          setDropoffLocation(loc);
                          setDropoffSuggestionsOpen(false);
                        }}
                      >
                        <MapPin size={14} className="text-[#888888]" />
                        <span>{loc}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 4. Pickup Date & Time */}
            <div className="relative flex flex-col">
              <label className="flex items-center gap-2 text-[0.95rem] font-semibold text-[#222222] mb-2">
                <Calendar size={18} className="text-primary-gb" />
                <span>Pickup Date & Time <span className="text-[#ff3b30]">*</span></span>
              </label>
              <input
                type="datetime-local"
                className="w-full py-3.5 px-4 text-[0.95rem] font-medium text-[#121212] bg-[#fafcff] border-[1.5px] border-border-color rounded-[10px] transition-all duration-200 focus:border-primary-gb focus:bg-white focus:ring-4 focus:ring-primary-gb/15 outline-none cursor-pointer"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
              />
            </div>
          </div>

          {/* Validation Error Message */}
          {errorMessage && (
            <div className="mt-4 py-2.5 px-4 bg-[#ffebe9] border border-[#ffc2bd] rounded-lg text-[#c92a2a] text-[0.9rem] font-semibold">
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Bottom Bar: Radio Buttons & Continue CTA */}
          <div className="flex items-center justify-between mt-7 pt-5 border-t border-[#f0f0f0] max-md:flex-col max-md:items-stretch max-md:gap-5">
            {activeTab === 'car-rental' ? (
              <div className="flex items-center gap-7 max-md:justify-between">
                {[
                  { id: 'oneWay', label: 'One Way' },
                  { id: 'roundWay', label: 'Round Way' },
                  { id: 'hourly', label: 'Hourly' }
                ].map(item => (
                  <label key={item.id} className="inline-flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="radio"
                      name="tripType"
                      value={item.id}
                      checked={tripType === item.id}
                      onChange={() => setTripType(item.id)}
                      className="sr-only peer"
                    />
                    <span className="w-[22px] h-[22px] border-2 border-[#b5c7e0] rounded-md flex items-center justify-center transition-all peer-checked:bg-primary-gb peer-checked:border-primary-gb text-white text-xs font-bold">
                      {tripType === item.id && '✓'}
                    </span>
                    <span className={`text-base font-semibold transition-colors ${tripType === item.id ? 'text-primary-gb' : 'text-[#333333]'}`}>
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-7 max-md:justify-between">
                {[
                  { id: 'fromAirport', label: 'From Airport' },
                  { id: 'fromHome', label: 'From Home' }
                ].map(item => (
                  <label key={item.id} className="inline-flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="radio"
                      name="airportTripType"
                      value={item.id}
                      checked={airportTripType === item.id}
                      onChange={() => setAirportTripType(item.id)}
                      className="sr-only peer"
                    />
                    <span className="w-[22px] h-[22px] border-2 border-[#b5c7e0] rounded-md flex items-center justify-center transition-all peer-checked:bg-primary-gb peer-checked:border-primary-gb text-white text-xs font-bold">
                      {airportTripType === item.id && '✓'}
                    </span>
                    <span className={`text-base font-semibold transition-colors ${airportTripType === item.id ? 'text-primary-gb' : 'text-[#333333]'}`}>
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            )}

            <button type="submit" className="theme-primary-btn py-4 px-9 max-md:w-full max-md:justify-center">
              <span>Continue</span>
              <ArrowRight size={20} className="btn-icon" />
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation / Trip Estimate Modal */}
      {submittedTrip && (
        <div className="fixed inset-0 w-full h-full bg-black/65 backdrop-blur-sm flex items-center justify-center z-[9999] p-5">
          <div className="bg-white w-full max-w-[520px] rounded-[20px] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.25)] animate-modalPop">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={24} className="text-[#10b981]" />
                <h3 className="text-xl font-bold font-heading text-dark-gb">Trip Bidding Request Ready!</h3>
              </div>
              <button
                type="button"
                className="text-[#888888] p-1 hover:text-[#121212] transition-colors"
                onClick={() => setSubmittedTrip(null)}
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-[0.95rem] text-[#666666] mb-5">
              Here is your trip overview. In the live Garibook app, drivers will now bid on this request with 0% commission.
            </p>

            <div className="bg-[#f7faff] border border-border-color rounded-xl p-[18px] flex flex-col gap-3 mb-6">
              <div className="flex items-center justify-between text-[0.95rem]">
                <span className="text-[#777777] font-medium">Vehicle:</span>
                <span className="text-[#121212] font-semibold">{submittedTrip.car.name}</span>
              </div>
              <div className="flex items-center justify-between text-[0.95rem]">
                <span className="text-[#777777] font-medium">Pickup:</span>
                <span className="text-[#121212] font-semibold">{submittedTrip.pickup}</span>
              </div>
              <div className="flex items-center justify-between text-[0.95rem]">
                <span className="text-[#777777] font-medium">Drop-off:</span>
                <span className="text-[#121212] font-semibold">{submittedTrip.dropoff}</span>
              </div>
              <div className="flex items-center justify-between text-[0.95rem]">
                <span className="text-[#777777] font-medium">Trip Type:</span>
                <span className="text-[#121212] font-semibold capitalize">{submittedTrip.tripType}</span>
              </div>
              <div className="flex items-center justify-between text-[0.95rem]">
                <span className="text-[#777777] font-medium">Schedule:</span>
                <span className="text-[#121212] font-semibold">{submittedTrip.dateTime}</span>
              </div>
              <div className="flex items-center justify-between text-[0.95rem] pt-2.5 border-t border-border-color">
                <span className="text-[#777777] font-medium">Est. Bidding Fare:</span>
                <span className="text-[1.25rem] font-bold text-primary-gb">৳ {submittedTrip.estimatedFare.toLocaleString()} BDT</span>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="theme-warning-btn w-full justify-center"
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
