import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostType } from "@/interfaces";
import React from "react";

const Index: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [posts, setPosts] = React.useState<PostType[]>([]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddPost = (post: PostType) => {
    setPosts([post, ...posts]);
  };

  return (
    <>
      <Header />
      <h1>This is the home page</h1>
      <Card title={"Card one"} content={"card content"} />

      <button onClick={handleModalOpen}>Add post</button>

      <PostModal
        isOpen={isModalOpen}
        addPost={handleAddPost}
        onClose={handleModalClose}
      />

      <ul>
        {posts.map(({ title, content }) => (
          <li>
            <h1>{title}</h1>

            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Index;
