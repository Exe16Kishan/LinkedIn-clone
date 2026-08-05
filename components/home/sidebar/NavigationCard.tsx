import NavigationButton from "@/components/ui/NavigationButton";
import {
  Bookmark,
  Users,
  CalendarDays,
  Newspaper,
} from "lucide-react";


const navigationItems = [
  {
    title: "Saved items",
    Icon: Bookmark,
  },
  {
    title: "Groups",
    Icon: Users,
  },
  {
    title: "Events",
    Icon: CalendarDays,
  },
  {
    title: "Newsletters",
    Icon: Newspaper,
  },
];

function NavigationCard() {
  return (
    <div className=" mt-3 rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
      {navigationItems.map((item) => (
        <NavigationButton
          key={item.title}
          title={item.title}
          Icon={item.Icon}
        />
      ))}
    </div>
  );
}

export default NavigationCard;