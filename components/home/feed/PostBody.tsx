import { Post } from "@/types/post.Type";

interface PostBodyProps {
  post: Post;
}

export default function PostBody({ post }: PostBodyProps) {
  return (
    <>
      <div className="px-4 pt-3 text-[15px]">{post.text}</div>

      <img src={post.image} className="mt-3 w-full object-cover" />
    </>
  );
}
