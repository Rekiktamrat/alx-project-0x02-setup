import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { JsonApiResponse, PostProps, PostsPageProps } from "@/interfaces";
import React from "react";

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />

      <div>
        {posts.map((posts: PostProps) => (
          <PostCard
            userId={posts.userId}
            key={posts.userId}
            title={posts.title}
            content={posts.content}
          />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const formattedPosts: PostProps[] = data.map(
    (post: Pick<JsonApiResponse, "title" | "body" | "userId">) => ({
      title: post.title,
      userId: post.userId,
      content: post.body, // convert body -> content
    })
  );

  return {
    props: {
      posts: formattedPosts,
    },
  };
}
export default Posts;
