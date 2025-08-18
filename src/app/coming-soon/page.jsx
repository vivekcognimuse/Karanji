"use client";

import Button from "@/components/ui/Button";
import Head from "next/head";
import Image from "next/image";
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
    <div className=" w-full   max-w-[1580px] mx-auto px-4 lg:px-20 space-y-16 lg:space-y-32">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="flex justify-center flex-col md:flex-row items-center pt-[85px] min-h-screen">
        <div>
          <Image
            src="/coming-soon.svg"
            alt="Home"
            width={500}
            height={500}
            className="w-full"
          />
        </div>

        <div className=" backdrop-blur-[30px] px-5 py-11 rounded-2xl max-w-5xl">
          <p className="text-black/80 font-sans text-3xl lg:text-6xl font-normal mb-5">
            Coming Soon
          </p>
          <p className="text-black/80 text-lg lg:text-2xl font-light">
            We are in the final stages of development and we’ll be ready to
            share something exciting with you soon.
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full flex justify-end">
                <Link href="/">
                  <Button type="submit" className="px-1">
                    Go back to home
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
