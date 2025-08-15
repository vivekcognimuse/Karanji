"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the email
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // If validation passes, clear error and open success modal
    setError("");

    // Optional: Reset the form
    setEmail("");
  };

  return (
    <div className="bg-[url('/page/home.svg')] bg-cover   bg-right bg-no-repeat">
      <div className="flex justify-center px-4 sm:px-8 items-center pt-[85px] min-h-screen">
        <div className="bg-white/70 backdrop-blur-[30px] px-5 py-11 rounded-2xl max-w-5xl">
          <p className="w-fit rounded-2xl mb-5 px-3 border border-black text-black text-lg font-normal">
            Coming Soon
          </p>
          <p className="text-black/80 text-3xl lg:text-6xl font-normal mb-5">
            Stay Tuned...
          </p>
          <p className="text-black/80 text-lg lg:text-2xl font-light">
            We're working hard behind the scenes to bring you an exciting new
            experience. Stay tuned — you won't want to miss it!
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full flex-center">
                <Link href="/">
                  <Button type="submit" className="">
                    Got to Home
                  </Button>
                </Link>
              </div>
            </div>{" "}
            {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
