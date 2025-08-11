import { P1 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import { toPlainText } from "@/utils/ish";

export default function WebinarHeader({ data }) {
  const buttons = Array.isArray(data?.buttons)
    ? data.buttons[0] ?? {}
    : data?.buttons ?? {};

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
        <div className="mt-8 text-lg p4">
          {(data?.date || data?.time) && (
            <p>
              {data?.date && <strong>{data.date}</strong>}
              {data?.date && data?.time && " · "}
              {data?.time && <strong>{data.time}</strong>}
            </p>
          )}
          {data?.location && <p>{data.location}</p>}
        </div>
      )}
    </section>
  );
}
