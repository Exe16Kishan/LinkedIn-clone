import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { ChevronDown, Info } from "lucide-react";

import { news, puzzles } from "@/utils/news";
import NewsItem from "./NewsItem";
import PuzzleCard from "./PuzzleCard";

function News() {
  return (
    <Card className="overflow-hidden rounded-lg border border-[#d6d6d6] bg-white">
      <div className="flex items-center justify-between px-4 pt-4">
        <h2 className="text-[20px] ">LinkedIn News</h2>

        <Info size={16} />
      </div>

      <h3 className="mt-1 px-4 text-[16px] text-[#666]">
        Top stories
      </h3>

      <div className="mt-1 space-y-1">
        {news.slice(0, 4).map((item) => (
          <NewsItem key={item.id} item={item} />
        ))}
      </div>

      <Button
        text="Show more"
        icon={<ChevronDown size={18} />}
        className="mt-2 px-2 py-1 gap-1 hover:bg-zinc-100"
      />

      <h3 className="mt-2 text-[20px] px-4 text-zinc-600">
        Today's puzzles
      </h3>

      <div className="mt-2 space-y-1">
        {puzzles.map((puzzle) => (
          <PuzzleCard key={puzzle.id} puzzle={puzzle} />
        ))}
      </div>

      <Button
        text="Show more"
        icon={<ChevronDown size={18} />}
        className="mt-2 px-2 py-1 gap-1 hover:bg-zinc-100"
      />
    </Card>
  );
}

export default News;
