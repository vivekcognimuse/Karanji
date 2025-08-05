import Button from "@/components/ui/Button";
import { P2 } from "../CustomTags";

export default function RegisterForWebinar({ data }) {
  return (
    <section className="py-20 bg-gradient-to-r ">
      <div className=" mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <h3>{data.title}</h3>
          <P2 className="p3 mb-6">{data.description}</P2>
          <ul className="list-disc list-inside space-y-3 p4">
            {data.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
        <form className="bg-white p-8 rounded-lg  space-y-4">
          <input
            type="text"
            placeholder="Name *"
            className="w-full p-3 border-b border-black-950/50 "
          />
          <input
            type="text"
            placeholder="Company *"
            className="w-full p-3 border-b border-black-950/50"
          />
          <input
            type="email"
            placeholder="Email *"
            className="w-full p-3 border-b border-black-950/50"
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            className="w-full p-3 border-b border-black-950/50"
          />
          <Button type="submit" className="w-full">
            {data.buttonLabel}
          </Button>
        </form>
      </div>
    </section>
  );
}
