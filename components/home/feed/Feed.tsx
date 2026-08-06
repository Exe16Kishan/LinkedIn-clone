"use client";

import { posts } from "@/utils/post";
import { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import FeedPost from "./FeedPost";

const PAGE_SIZE = 5;

export default function Feed() {
  const [visiblePosts, setVisiblePosts] = useState(posts.slice(0, PAGE_SIZE));

  useEffect(() => {
    function handleScroll() {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (!bottom) return;

      setVisiblePosts((prev) => [
        ...prev,
        ...posts.slice(prev.length, prev.length + PAGE_SIZE),
      ]);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="space-y-2">
      <CreatePost />

      {visiblePosts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </div>
  );
}
