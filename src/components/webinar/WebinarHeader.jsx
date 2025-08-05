import { P1 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";

export default function WebinarHeader({ data }) {
  return (
    <section className="text-center py-20 ">
      <h2>{data.title}</h2>
      <P1 className=" mx-auto mt-4">{data.description}</P1>
      <div className="mt-6 flex justify-center gap-4">
        <Button>{data.buttons.register}</Button>
        <Button className="bg-white text-black border border-black">
          {data.buttons.preview}
        </Button>
      </div>
      <div className="mt-8 text-lg p4">
        <p>
          <strong>{data.date}</strong> · <strong>{data.time}</strong>
        </p>
        <p>{data.location}</p>
      </div>
    </section>
  );
}
