import { PostModalProps, PostType } from "@/interfaces";
import React from "react";

const PostModal: React.FC<PostModalProps> = ({ isOpen, addPost, onClose }) => {
  const [formData, setFormData] = React.useState<PostType>({
    title: "",
    content: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.title && !formData.content) return;
    addPost(formData);

    setFormData({
      title: "",
      content: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (!isOpen) return null;

  return (
    <form onClick={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>

        <input
          name="title"
          type="text"
          placeholder="title"
          onChange={handleChange}
          value={formData.title}
        />
      </div>

      <div>
        <label htmlFor="content">Content</label>

        <input
          name="content"
          type="text"
          placeholder="content"
          onChange={handleChange}
          value={formData.content}
        />
      </div>

      <button type="submit">Submit</button>
      <button type="submit" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default PostModal;
