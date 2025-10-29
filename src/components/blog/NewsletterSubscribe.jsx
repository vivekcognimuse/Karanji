import React from "react";
import Button from "@/components/ui/Button";
import { P3 } from "../CustomTags";
const NewsletterSubscribe = () => {
  return (
    <section className="mt-24 space-y-4">
      <h3 className="text-2xl font-semibold">
        Transform Your Business with Karanji
      </h3>
      <P3 className="text-black-950/50 ">
        Stay ahead with Karanji’s newsletter! Get monthly tips on how our VR
        training, immersive learning, and AI solutions can help your team grow,
        improve operations, and make a real difference.
      </P3>

      <form
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 "
        onSubmit={(e) => {
          e.preventDefault();
          // handle submit logic here
        }}
      >
        <input
          type="email"
          required
          placeholder="yourname@email.com"
          className="w-full border-b border-black focus:outline-none font-outfit text-lg font-light sm:text-xl px-2 py-2"
        />
        <Button
          type="submit"
          className="group bg-black lg:py-1 rounded-full overflow-hidden hover:scale-105 transition-transform"
        >
          Subscribe
        </Button>
      </form>
    </section>
  );
};

export default NewsletterSubscribe;
