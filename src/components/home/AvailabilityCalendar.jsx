import { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  XCircle,
} from "lucide-react";

import Container from "../common/Container";

function AvailabilityCalendar() {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const [selectedDate, setSelectedDate] = useState(null);

  /*
    ============================================
    WHATSAPP NUMBER YAHAN CHANGE KARNA HAI
    Country code ke saath number likhna hai.
    Example India: 919876543210
    + sign mat lagana.
    ============================================
  */
  const whatsappNumber = "9588559330";

  /*
    ============================================
    BOOKED DATES YAHAN ADD KARNA HAI
    Format: YYYY-MM-DD
    ============================================
  */
  const bookedDates = [
    "2026-07-05",
    "2026-07-06",
    "2026-07-12",
    "2026-07-13",
    "2026-07-18",
    "2026-07-19",
    "2026-07-25",
  ];

  const monthName = currentDate.toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });

  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const days = [];

    // Empty boxes before month starts
    for (let index = 0; index < firstDayIndex; index += 1) {
      days.push({
        type: "empty",
        id: `empty-${index}`,
      });
    }

    // Actual month days
    for (let day = 1; day <= totalDays; day += 1) {
      const date = new Date(year, month, day);

      const dateString = [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0"),
      ].join("-");

      const isBooked = bookedDates.includes(dateString);

      const isPast =
        new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
        ).getTime() <
        new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
        ).getTime();

      days.push({
        type: "day",
        id: dateString,
        day,
        date,
        dateString,
        isBooked,
        isPast,
      });
    }

    return days;
  }, [currentDate]);

  function goToPreviousMonth() {
    setCurrentDate(
      (previousDate) =>
        new Date(
          previousDate.getFullYear(),
          previousDate.getMonth() - 1,
          1,
        ),
    );

    setSelectedDate(null);
  }

  function goToNextMonth() {
    setCurrentDate(
      (previousDate) =>
        new Date(
          previousDate.getFullYear(),
          previousDate.getMonth() + 1,
          1,
        ),
    );

    setSelectedDate(null);
  }

  function selectDate(dayData) {
    if (dayData.isBooked || dayData.isPast) {
      return;
    }

    setSelectedDate(dayData.date);
  }

  function createWhatsAppLink() {
    if (!selectedDate) {
      return "#";
    }

    const formattedDate = selectedDate.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const message = `
Hello Bisguli Team,

I would like to enquire about a village stay.

Preferred date: ${formattedDate}

Please share availability, stay details and pricing.
    `.trim();

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;
  }

  const selectedDateText = selectedDate
    ? selectedDate.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <section
      id="availability"
      className="relative overflow-hidden bg-[#071A12] py-24 text-white sm:py-28"
    >
      {/* Background decorations */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#3E7650]/20 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F0A14A]/10 blur-[120px]" />

      <Container className="relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F0A14A]">
            <CalendarDays size={15} />
            Stay Availability
          </div>

          <h2 className="heading-font mt-6 text-4xl font-semibold leading-tight text-[#FFF8E8] sm:text-5xl lg:text-6xl">
            Choose your preferred village stay date.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
            Select an available date and send a pre-filled enquiry directly
            through WhatsApp.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Calendar */}
          <div className="rounded-32px border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-8">
            {/* Calendar header */}
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={goToPreviousMonth}
                aria-label="Previous month"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="text-center">
                <p className="heading-font text-2xl font-semibold text-[#FFF8E8] sm:text-3xl">
                  {monthName}
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/40">
                  Select an available date
                </p>
              </div>

              <button
                type="button"
                onClick={goToNextMonth}
                aria-label="Next month"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Week headings */}
            <div className="mt-8 grid grid-cols-7 gap-2">
              {weekDays.map((weekDay) => (
                <div
                  key={weekDay}
                  className="py-2 text-center text-[10px] font-bold uppercase tracking-[0.08em] text-white/40 sm:text-xs"
                >
                  {weekDay}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="mt-2 grid grid-cols-7 gap-2">
              {calendarDays.map((dayData) => {
                if (dayData.type === "empty") {
                  return (
                    <div
                      key={dayData.id}
                      className="aspect-square rounded-xl"
                    />
                  );
                }

                const isSelected =
                  selectedDate &&
                  selectedDate.toDateString() ===
                    dayData.date.toDateString();

                let dayClasses =
                  "flex aspect-square items-center justify-center rounded-xl border text-sm font-semibold transition duration-200 sm:text-base";

                if (dayData.isPast) {
                  dayClasses +=
                    " cursor-not-allowed border-white/5 bg-white/[0.02] text-white/20";
                } else if (dayData.isBooked) {
                  dayClasses +=
                    " cursor-not-allowed border-red-400/20 bg-red-400/10 text-red-300";
                } else if (isSelected) {
                  dayClasses +=
                    " border-[#F0A14A] bg-[#F0A14A] text-[#071A12] shadow-[0_8px_25px_rgba(240,161,74,0.25)]";
                } else {
                  dayClasses +=
                    " cursor-pointer border-emerald-300/10 bg-emerald-300/5 text-[#DDF3E3] hover:border-[#F0A14A]/60 hover:bg-[#F0A14A]/10";
                }

                return (
                  <button
                    key={dayData.id}
                    type="button"
                    onClick={() => selectDate(dayData)}
                    disabled={dayData.isBooked || dayData.isPast}
                    className={dayClasses}
                    aria-label={`${dayData.day} ${
                      dayData.isBooked
                        ? "booked"
                        : dayData.isPast
                          ? "past date"
                          : "available"
                    }`}
                  >
                    {dayData.day}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 text-sm text-white/55">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                Available
              </div>

              <div className="flex items-center gap-2 text-sm text-white/55">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                Booked
              </div>

              <div className="flex items-center gap-2 text-sm text-white/55">
                <span className="h-3 w-3 rounded-full bg-[#F0A14A]" />
                Selected
              </div>
            </div>
          </div>

          {/* Booking information */}
          <div className="flex flex-col rounded-32px bg-[#F4EBDD] p-7 text-[#102218] sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#14532D] text-white">
              <MessageCircle size={25} />
            </div>

            <h3 className="heading-font mt-7 text-3xl font-semibold sm:text-4xl">
              Send a stay enquiry
            </h3>

            <p className="mt-4 leading-7 text-[#687269]">
              Select your preferred date from the calendar. We will confirm
              availability, room details and pricing personally.
            </p>

            <div className="mt-8 rounded-2xl border border-[#14532D]/10 bg-white/60 p-5">
              {selectedDate ? (
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[#14532D]"
                    size={21}
                  />

                  <div>
                    <p className="text-sm font-bold text-[#14532D]">
                      Selected date
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#536057]">
                      {selectedDateText}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <XCircle
                    className="mt-0.5 shrink-0 text-[#9C6B38]"
                    size={21}
                  />

                  <div>
                    <p className="text-sm font-bold text-[#594128]">
                      No date selected
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#6B716C]">
                      Select any green date from the calendar.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {selectedDate ? (
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-7 flex items-center justify-center gap-2 rounded-2xl bg-[#1F8F4E] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#18743F]"
              >
                <MessageCircle size={19} />
                Enquire on WhatsApp
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="mt-7 flex cursor-not-allowed items-center justify-center gap-2 rounded-2xl bg-[#9FA8A1] px-6 py-4 text-sm font-bold text-white"
              >
                <MessageCircle size={19} />
                Select a date first
              </button>
            )}

            <div className="mt-auto pt-8">
              <p className="text-xs leading-6 text-[#7B827D]">
                Booking is confirmed only after you receive confirmation from
                the Bisguli team.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AvailabilityCalendar;