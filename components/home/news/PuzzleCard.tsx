import { ChevronRight } from "lucide-react";
import { Puzzle } from "@/types/news.Types";

interface Props {
  puzzle: Puzzle;
}

function PuzzleCard({ puzzle }: Props) {
  return (
    <div className="flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-[#f3f2ef] transition-colors">
      <div className="flex items-center gap-3">
        <img
          src={puzzle.image}
          alt={puzzle.name}
          className="h-5 w-5 rounded"
        />

        <div>
          <h3 className="text-[15px] leading-5 text-[#191919]">
            {puzzle.name} #{puzzle.number}
          </h3>

          <p className="text-[12px] text-[#666666]">
            {puzzle.played}
          </p>
        </div>
      </div>

      <ChevronRight
        size={18}
        className="text-[#666666]"
      />
    </div>
  );
}

export default PuzzleCard;