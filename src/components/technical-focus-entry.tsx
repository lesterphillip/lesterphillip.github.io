import { TechnicalFocus } from "@/data/technical-focus";

export function TechnicalFocusEntry({
  focus,
}: {
  focus: TechnicalFocus;
}) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <h3 className="text-xs text-zinc-500 mt-1">{focus.category}</h3>
      <p className="col-span-3 text-sm text-zinc-600 leading-relaxed">
        {focus.details}
      </p>
    </div>
  );
}
