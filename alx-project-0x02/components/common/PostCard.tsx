import { PostProps } from "@/interfaces";
import React from "react";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-sm mt-2">{content}</p>
      <p className="text-xs text-gray-500 mt-3">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
