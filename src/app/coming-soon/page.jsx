import Button from "@/components/ui/Button";

import Image from "next/image";
import Link from "next/link";

import React from "react";

const Page = () => {
  return (
    <div className=" w-full max-w-[1580px] mx-auto px-4 lg:px-20 space-y-16 lg:space-y-32">
      <div className="flex justify-center flex-col md:flex-row items-center  md:min-h-[calc(100vh-80px)]">
        <div>
          <Image
            src="/coming-soon.webp"
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
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full flex justify-end">
              <Link href="/">
                <Button type="submit" className="px-1">
                  Go back to Home
                </Button>
              </Link>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Page;
