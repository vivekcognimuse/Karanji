import { P1 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import { toPlainText } from "@/utils/ish";

export default function WebinarHeader({ data }) {
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
    <section className="text-center py-20 ">
      <h2>{data?.title}</h2>
      {data?.description && (
        <P1 className=" mx-auto mt-4">{toPlainText(data.description)}</P1>
      )}

      {(buttons.register || buttons.preview) && (
        <div className="mt-6 flex justify-center gap-4">
          {buttons.register && <Button>{buttons.register}</Button>}
          {buttons.preview && (
            <Button className="bg-white text-black border border-black">
              {buttons.preview}
            </Button>
          )}
        </div>
      )}

      {(data?.date || data?.time || data?.location) && (
        <div className="mt-8 flex justify-center items-center gap-4 flex-wrap max-w-4xl mx-auto">
          {data?.date && (
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg min-w-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <img
                  src="/Icons/Calendar.svg"
                  alt="Calendar"
                  className="w-6 h-6"
                />
              </div>
              <div className="text-left min-w-0">
                <div className="text-sm font-medium text-gray-900 whitespace-nowrap">
                  {dateFormatted.line1}
                </div>
                {dateFormatted.line2 && (
                  <div className="text-sm font-medium text-gray-900 whitespace-nowrap">
                    {dateFormatted.line2}
                  </div>
                )}
              </div>
            </div>
          )}

          {data?.time && (
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg min-w-0">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src="/Icons/Clock.svg" alt="Time" className="w-6 h-6" />
              </div>
              <div className="text-left min-w-0">
                <div className="text-sm font-medium text-gray-900 whitespace-nowrap">
                  {timeFormatted.line1}
                </div>
                {timeFormatted.line2 && (
                  <div className="text-sm font-medium text-gray-900 whitespace-nowrap">
                    {timeFormatted.line2}
                  </div>
                )}
              </div>
            </div>
          )}

          {data?.location && (
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg min-w-0">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <img
                  src="/Icons/weui_location-outlined.svg"
                  alt="Location"
                  className="w-6 h-6"
                />
              </div>
              <div className="text-left min-w-0">
                <div className="text-sm font-medium text-gray-900 whitespace-nowrap">
                  {locationFormatted.line1}
                </div>
                {locationFormatted.line2 && (
                  <div className="text-sm font-medium text-gray-900 whitespace-nowrap">
                    {locationFormatted.line2}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
