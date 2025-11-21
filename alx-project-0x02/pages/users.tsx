import UserCard from "@/components/common/UserCard";
import { UserCardProps, UserPageProps, UserProps } from "@/interfaces";
import React from "react";

const Users: React.FC<UserPageProps> = ({ users }) => {
  return (
    <div>
      {users.map((users: UserCardProps) => (
        <UserCard
          name={users.name}
          key={users.email}
          email={users.email}
          address={users.address}
        />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const formattedUsers: UserCardProps[] = data.map((users: UserCardProps) => ({
    name: users.name,
    email: users.email,
    address: users.address,
  }));

  return {
    props: {
      users: formattedUsers,
    },
  };
}
export default Users;
