import { P1 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import { toPlainText } from "@/utils/ish";
import Image from "next/image";
export default function WebinarHeader({ data, bgImage }) {
  const buttons = Array.isArray(data?.buttons)
    ? data.buttons[0] ?? {}
    : data?.buttons ?? {};

  // Function to split date into month/day and year
  const formatDate = (dateString) => {
    if (!dateString) return { line1: "", line2: "" };

    // Split "March 20, 2025" into "March 20" and "2025"
    const parts = dateString.split(",");
    if (parts.length >= 2) {
      return {
        line1: parts[0].trim(), // "March 20"
        line2: parts[1].trim(), // "2025"
      };
    }

    // Fallback if no comma found
    return { line1: dateString, line2: "" };
  };

  // Function to split time into time and timezone
  const formatTime = (timeString) => {
    if (!timeString) return { line1: "", line2: "" };

    // Split "2:00 PM EST" into "2:00 PM" and "EST"
    const parts = timeString.split(" ");
    if (parts.length >= 3) {
      return {
        line1: `${parts[0]} ${parts[1]}`, // "2:00 PM"
        line2: parts[2], // "EST"
      };
    }

    return { line1: timeString, line2: "" };
  };

  // Function to split location into two lines
  const formatLocation = (locationString) => {
    if (!locationString) return { line1: "", line2: "" };

    // Split "Virtual Event - Join from Anywhere" at the dash
    if (locationString.includes(" - ")) {
      const parts = locationString.split(" - ");
      return {
        line1: parts[0].trim(), // "Virtual Event"
        line2: parts[1].trim(), // "Join from Anywhere"
      };
    }

    return { line1: locationString, line2: "" };
  };

  const dateFormatted = formatDate(data?.date);
  const timeFormatted = formatTime(data?.time);
  const locationFormatted = formatLocation(data?.location);

  return (
    <section
      className="relative bg-no-repeat  bg-center bg-cover"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="w-full flex  lg:min-h-[calc(100vh-80px)] justify-center  flex-col items-center h-fit pt-16 md:pt-0 max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
        {/* Main Content Container - Following HeroSection pattern */}
        <div className="space-y-6 sm:space-y-8 lg:flex-grow flex flex-col justify-center max-w-[1580px] lg:mx-auto px-4 sm:px-6">
          {/* Title and Description - Following HeroSection spacing */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-center">{data?.title}</h2>

            {data?.description && (
              <P1 className="text-center mx-auto max-w-4xl">
                {toPlainText(data.description)}
              </P1>
            )}
          </div>

          {/* Buttons - Following HeroSection CTA pattern */}
          {(buttons.register || buttons.preview) && (
            <div className="flex justify-center gap-4 flex-wrap">
              {buttons.register && (
                <Button className="whitespace-nowrap cursor-not-allowed">
                  {buttons.register}
                </Button>
              )}
              {buttons.preview && (
                <Button
                  variant="secondary"
                  className="bg-white text-black border border-black whitespace-nowrap cursor-not-allowed"
                >
                  {buttons.preview}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Event Details Section - Following HeroSection stats pattern */}
        {/* Event Details Section - Following HeroSection stats pattern */}
        {(data?.date || data?.time || data?.location) && (
          <div className="w-full my-8 sm:my-12 lg:my-16 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              {/* Date */}
              {data?.date && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg min-w-0 w-full sm:w-auto justify-center sm:justify-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image
                      height={40}
                      width={40}
                      unoptimized
                      src="/Icons/Calendar.svg"
                      alt="Calendar"
                      className="w-6 h-6 sm:w-8 sm:h-8" // Slightly larger on bigger screens
                    />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-sm sm:text-base font-medium text-gray-900 whitespace-nowrap">
                      {dateFormatted.line1}
                    </div>
                    {dateFormatted.line2 && (
                      <div className="text-sm sm:text-base font-medium text-gray-900 whitespace-nowrap">
                        {dateFormatted.line2}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Time */}
              {data?.time && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg min-w-0 w-full sm:w-auto justify-center sm:justify-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image
                      unoptimized
                      height={40}
                      width={40}
                      src="/Icons/Clock.svg"
                      alt="Time"
                      className="w-6 h-6 sm:w-8 sm:h-8" // Slightly larger on bigger screens
                    />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-sm sm:text-base font-medium text-gray-900 whitespace-nowrap">
                      {timeFormatted.line1}
                    </div>
                    {timeFormatted.line2 && (
                      <div className="text-sm sm:text-base font-medium text-gray-900 whitespace-nowrap">
                        {timeFormatted.line2}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Location */}
              {data?.location && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg min-w-0 w-full sm:w-auto justify-center sm:justify-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image
                      height={40}
                      width={40}
                      unoptimized
                      src="/Icons/weui_location-outlined.svg"
                      alt="Location"
                      className="w-6 h-6 sm:w-8 sm:h-8" // Slightly larger on bigger screens
                    />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-sm sm:text-base font-medium text-gray-900 whitespace-nowrap">
                      {locationFormatted.line1}
                    </div>
                    {locationFormatted.line2 && (
                      <div className="text-sm sm:text-base font-medium text-gray-900 whitespace-nowrap">
                        {locationFormatted.line2}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
