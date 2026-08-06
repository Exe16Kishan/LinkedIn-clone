import Avatar from "@/components/ui/Avatar";
import { Post } from "@/types/post.Type";
import { MoreHorizontal } from "lucide-react";

interface PostHeaderProps {
  post: Post;
}

export default function PostHeader({ post }: PostHeaderProps) {
  return (
    <div className="flex items-start justify-between px-4 pt-3">
      <div className="flex gap-3">
        <Avatar src={post.avatar} className="w-12 h-12 rounded-full" />

        <div>
          <h3 className="font-semibold text-[15px]">{post.author}</h3>

          <p className="text-xs text-zinc-500">{post.headline}</p>

          <p className="text-xs text-zinc-500">{post.time} 🌍</p>
        </div>
      </div>

      <button className="rounded-full p-2 hover:bg-zinc-100">
        <MoreHorizontal size={20} />
      </button>
    </div>
  );
}
