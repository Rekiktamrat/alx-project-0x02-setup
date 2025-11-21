import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import React, { ReactNode } from "react";

const About: React.FC<ReactNode> = () => {
  return (
    <>
      <Header />
      <h1>This is the About page</h1>
      <Button shape="rounded-sm" size="small" styles="bg-black">
        small
      </Button>

      <Button shape="rounded-md" size="medium" styles="bg-green-600">
        Medium
      </Button>

      <Button shape="rounded-full" size="large" styles="bg-red-600">
        Large
      </Button>
    </>
  );
};

export default About;
