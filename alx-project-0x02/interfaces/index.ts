import React from "react";

export interface CardProps {
  title: string;
  content: string;
}

export type PostType = CardProps;

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  addPost: (post: CardProps) => void;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
  styles: string;
  onclick?: () => void;
}

export interface PostProps {
  title: string;
  userId: number;
  content: string;
}

export interface PostsPageProps {
  posts: PostProps[];
}

export interface JsonApiResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type UserCardProps = Pick<UserProps, "name" | "address" | "email">;

export interface UserPageProps {
  users: UserCardProps[];
}
