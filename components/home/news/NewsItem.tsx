import { NewsItemType } from "@/types/news.Types";

interface Props {
  item: NewsItemType;
}

function NewsItem({ item }: Props) {
  return (
    <div className="cursor-pointer px-4 py-2 hover:bg-[#f3f2ef] transition-colors">
      <div className="flex items-start gap-2">
        <div className="flex-1">
          <h3 className="text-[14px] leading-5 text-[#191919] line-clamp-2">
            {item.title}
          </h3>

          <p className="mt-0.5 text-[12px] text-[#666666]">
            {item.time} • {item.readers}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;