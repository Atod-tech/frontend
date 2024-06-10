import { InformationCircleIcon } from "@heroicons/react/24/solid";

export function InformationAlert({ content }: { content: string }) {
  return (
    <div className="col-span-full flex items-start gap-x-1 bg-sky-200 rounded px-2 py-2.5 mb-4 cursor-pointer">
      <InformationCircleIcon className="w-6 h-6 text-blue-600" />
      <p className="text-gray-700 text-sm">{content}</p>
    </div>
  );
}
