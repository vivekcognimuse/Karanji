"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const CookieNotification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)showCookieNotification\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (cookieValue !== "false") {
      setTimeout(() => setShow(true), 5000);
    }
  }, []);

  const handleClick = () => {
    // Set both cookies - one to hide notification, one for analytics consent
    document.cookie = "showCookieNotification=false; max-age=31536000";
    document.cookie =
      "acceptedCookies=true; max-age=31536000; SameSite=Lax; Secure";

    // Dispatch event to notify Google Analytics component
    const event = new Event("cookieAccepted");
    window.dispatchEvent(event);

    setShow(false);
  };

  const handleCancel = () => {
    // Only hide the notification, don't set analytics consent
    document.cookie = "showCookieNotification=false; max-age=31536000";
    setShow(false);
  };

  return (
    show && (
      <div className="fixed bottom-10 inset-x-0 z-[9999] flex w-full justify-center">
        <div className=" bg-hover max-w-[1480px]  w-full   bg-[#BAABFC] lg:p-4 lg:flex items-center justify-between p-3 pb-2 mx-4 rounded-lg shadow-lg">
          <div className="sm:mb-0  mb-2 lg:flex  items-center flex-1">
            <p className="lg:text-right lg:ml-3  text-center ">
              This site uses cookies for personalization and analytics. You can
              read about our cookie policy{" "}
              <Link
                href="/terms-policies"
                className="hover:underline text-blue-900">
                here.
              </Link>
            </p>
          </div>
          <div className=" lg:gap-8 lg:my-0 flex justify-center gap-4 my-4">
            <button
              onClick={handleClick}
              className="hover:bg-gray-200 flex items-center font-sans cursor-pointer justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent rounded-md shadow-sm">
              Close
            </button>

            {/* <button
              onClick={handleCancel}
              className="hover:bg-gray-200 flex items-center font-sans cursor-pointer justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent rounded-md shadow-sm">
              Reject
            </button> */}
          </div>
        </div>{" "}
      </div>
    )
  );
};

export default CookieNotification;
