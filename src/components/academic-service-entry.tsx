import { AcademicService, Award } from "@/data/academic-service";

export function AcademicServiceEntry({
  service,
}: {
  service: AcademicService;
}) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{service.date}</span>
      <div className="col-span-3">
        <h3 className="text-base font-serif">{service.role}</h3>
        <p className="text-sm text-zinc-600 mt-1">{service.organization}</p>
        {service.venue && (
          <p className="text-sm text-zinc-500 italic mt-1">{service.venue}</p>
        )}
      </div>
    </div>
  );
}

export function AwardEntry({ award }: { award: Award }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{award.category}</span>
      <p className="col-span-3 text-sm text-zinc-600 leading-relaxed">
        {award.name}
      </p>
    </div>
  );
}
