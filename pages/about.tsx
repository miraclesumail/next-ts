import Link from "next/link";
import { context } from "./_app";
import React from "react";

const PostLink = (props: any) => (
  <li>
    <Link href="/blog/[id]" as={`/blog/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const About = ({ name }: any) => {
  const { age } = React.useContext(context);

  return (
    <div>
      <div>{name}</div>
      <PostLink id="hello-nextjs" />
      <PostLink id="learn-nextjs" />
      <PostLink id="deploy-nextjs" />
      <h1>Hello about! {age}</h1>
    </div>
  );
};

export async function getServerSideProps() {
  console.log("getServerSideProps");

  // Fetch data from external API
  // Pass data to the page via props
  return { props: { name: "mmmkkk" } };
}

export default About;
