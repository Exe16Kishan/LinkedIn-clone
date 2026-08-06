import Card from "@/components/ui/Card";
import { Post } from "@/types/post.Type";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";
import ReactionBar from "./ReactionBar";

interface FeedPostProps {
  post: Post;
}

function FeedPost({ post }: FeedPostProps) {
  return (
    <Card className="overflow-hidden rounded-xl border border-[#e0e0e0] bg-white shadow-sm">
      <PostHeader post={post} />

      <PostBody post={post} />

      <ReactionBar post={post} />
    </Card>
  );
}

export default FeedPost;
