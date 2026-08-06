import { Post } from "@/types/post.Type";
import { MessageCircle, Repeat2, Send, ThumbsUp } from "lucide-react";
import React from "react";

interface ReactionBarProps {
  post: Post;
}

interface ActionProps {
  icon : React.ReactNode
  count ?: number
}

function Action({ icon ,count }: ActionProps) {
  return (
    <button className="flex flex-1 items-center justify-center gap-2 rounded-md py-3 text-sm font-medium text-zinc-600 hover:bg-zinc-100">
      {icon}
      {" "}
      {count}
    </button>
  );
}

export default function ReactionBar({ post }: ReactionBarProps) {
  return (
    <>
      <div className="mx-4 mt-3 border-t" />

      <div className="flex px-2">
        <Action icon={<ThumbsUp size={20} />}    count={post.likes}/>

        <Action icon={<MessageCircle size={20} />}   count={post.comments}/>

        <Action icon={<Repeat2 size={20} />}  count={post.reposts} />

        <Action icon={<Send size={20} />} />
      </div>
    </>
  );
}
