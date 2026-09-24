import React, { useState, useEffect, useRef } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

export default function DateTimePickerPopover({
  value,
  onChange,
  label = 'Pickup Date & Time',
  placeholder = 'MM/DD/YYYY 00:00 PM'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Current calendar view month/year
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('04:00 PM');

  // Time slots in 30-minute intervals
  const timeSlots = [
    '12:00 AM', '12:30 AM', '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM',
    '03:00 AM', '03:30 AM', '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM',
    '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM',
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
    '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
    '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'
  ];

  // Sync initial or updated value
  useEffect(() => {
    if (value && typeof value === 'string') {
      const parts = value.split(' ');
      if (parts.length >= 2) {
        const [datePart, timeVal, ampm] = parts;
        const [m, d, y] = datePart.split('/').map(Number);
        if (m && d && y) {
          const parsed = new Date(y, m - 1, d);
          setSelectedDate(parsed);
          setViewDate(new Date(y, m - 1, 1));
        }
        if (timeVal && ampm) {
          setSelectedTime(`${timeVal} ${ampm}`);
        }
      }
    }
  }, [value]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Calendar calculations
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Previous month trailing days
  const prevMonthLastDate = new Date(year, month, 0).getDate();
  const prevMonthDays = Array.from(
    { length: firstDayIndex },
    (_, i) => prevMonthLastDate - firstDayIndex + i + 1
  );

  // Next month leading days to complete full 7-col grid
  const totalCells = firstDayIndex + daysInMonth;
  const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  const nextMonthDays = Array.from({ length: remainingCells }, (_, i) => i + 1);

  const handlePrevMonth = (e) => {
    e.stopPropagation();
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = (e) => {
    e.stopPropagation();
    setViewDate(new Date(year, month + 1, 1));
  };

  const commitDateTime = (dateObj, timeStr) => {
    const pad = (n) => String(n).padStart(2, '0');
    const formatted = `${pad(dateObj.getMonth() + 1)}/${pad(dateObj.getDate())}/${dateObj.getFullYear()} ${timeStr}`;
    onChange(formatted);
  };

  const handleSelectDay = (day) => {
    const chosen = new Date(year, month, day);
    setSelectedDate(chosen);
    commitDateTime(chosen, selectedTime);
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
    const dateToUse = selectedDate || today;
    setSelectedDate(dateToUse);
    commitDateTime(dateToUse, time);
  };

  const isToday = (day) => {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const isSelected = (day) => {
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      month === selectedDate.getMonth() &&
      year === selectedDate.getFullYear()
    );
  };

  return (
    <div className="relative flex flex-col w-full" ref={containerRef}>
      {/* Label: Calendar icon + Label text + red * */}
      <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-1 select-none">
        <CalendarIcon size={18} className="text-[#0e52ff]" />
        <span>
          {label} <span className="text-red-500">*</span>
        </span>
      </label>

      {/* Pure Transparent Input Trigger */}
      <div
        className="flex items-center justify-between w-full pt-1 cursor-pointer select-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-sm truncate ${value ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
          {value || placeholder}
        </span>
        <Clock size={16} className="text-gray-400 group-hover:text-[#0e52ff] flex-shrink-0 ml-1 transition-colors" />
      </div>

      {/* Ultra-Compact Two-Column Popover (Strictly Matching Image 2 specs) */}
      {isOpen && (
        <div className="absolute top-full left-0 sm:left-auto sm:right-0 mt-2 z-[100] bg-white border border-gray-200 rounded-xl shadow-2xl p-2 w-[240px] sm:w-[260px] max-w-[calc(100vw-48px)] text-[11px] leading-tight select-none animate-modalPop">
          <div className="bg-gray-100/70 p-1.5 rounded">
            <div className="flex divide-x divide-gray-200 gap-1">
              {/* Left Side: Ultra-Compact Month Calendar (Width ~65%) */}
              <div className="w-[65%] pr-1">
                {/* Header: Month & Year + Simple Arrows < and > */}
                <div className="flex items-center justify-between pb-1 mb-1 border-b border-gray-200">
                  <span className="font-semibold text-gray-800 text-[11px]">
                    {monthNames[month]} {year}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-500 text-[10px]">
                    <button
                      type="button"
                      onClick={handlePrevMonth}
                      className="p-0.5 hover:text-black cursor-pointer font-bold select-none leading-none"
                      aria-label="Previous Month"
                    >
                      &lt;
                    </button>
                    <button
                      type="button"
                      onClick={handleNextMonth}
                      className="p-0.5 hover:text-black cursor-pointer font-bold select-none leading-none"
                      aria-label="Next Month"
                    >
                      &gt;
                    </button>
                  </div>
                </div>

                {/* Day labels: Su Mo Tu We Th Fr Sa */}
                <div className="grid grid-cols-7 gap-0.5 text-center mb-0.5">
                  {daysOfWeek.map((d, i) => (
                    <span key={i} className="text-[9px] text-gray-500 font-medium py-0.5">
                      {d}
                    </span>
                  ))}
                </div>

                {/* Date numbers grid */}
                <div className="grid grid-cols-7 gap-0.5 text-center">
                  {/* Previous month padding days */}
                  {prevMonthDays.map((d, i) => (
                    <div
                      key={`prev-${i}`}
                      className="w-5 h-5 flex items-center justify-center text-[10px] text-gray-300 select-none"
                    >
                      {d}
                    </div>
                  ))}

                  {/* Current month days */}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const active = isSelected(day);
                    const currentToday = isToday(day);

                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => handleSelectDay(day)}
                        className={`w-5 h-5 flex items-center justify-center text-[10px] cursor-pointer rounded-sm transition-colors ${
                          active
                            ? 'bg-[#111827] text-white font-bold'
                            : currentToday
                              ? 'border border-gray-400 font-semibold text-gray-900 hover:bg-blue-100'
                              : 'text-gray-700 hover:bg-blue-100'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}

                  {/* Next month padding days */}
                  {nextMonthDays.map((d, i) => (
                    <div
                      key={`next-${i}`}
                      className="w-5 h-5 flex items-center justify-center text-[10px] text-gray-300 select-none"
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Minimal Time List (Width ~35%) */}
              <div className="w-[35%] pl-1 flex flex-col">
                <div className="text-center font-bold text-gray-700 text-[10px] pb-1 border-b border-gray-200">
                  Time
                </div>
                <div className="max-h-[140px] overflow-y-auto pl-0.5 text-[10px] space-y-0.5 custom-scrollbar mt-1">
                  {timeSlots.map((time) => {
                    const isTimeSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleSelectTime(time)}
                        className={`py-0.5 px-1 cursor-pointer rounded-sm block w-full text-center transition-colors ${
                          isTimeSelected
                            ? 'bg-blue-600 text-white font-medium'
                            : 'text-gray-700 hover:bg-blue-50'
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
