import { LucideIcon } from "lucide-react";

interface SidebarButtonProps {
  title: string;
  Icon: LucideIcon;
}

export default function SidebarButton({
  title,
  Icon,
}: SidebarButtonProps) {
  return (
    <button
      className="w-full flex items-center gap-3 px-4 py-2.5
                 hover:bg-zinc-100 transition text-sm
                 font-medium text-zinc-700"
    >
      <Icon
        size={17}
        strokeWidth={2}
        className="text-zinc-700"
      />

      {title}
    </button>
  );
}