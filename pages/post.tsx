import Router, { useRouter } from "next/router";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Page: NextPage<any> = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(function() {
      router.push("/post?title=10", "", { shallow: true });
    }, 5000);
    // Always do navigations after the first render
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)} />
      <h1>{router.query.title}</h1>
      <p>This is the blog post content. {count}</p>
    </div>
  );
};

Page.getInitialProps = context => {
  console.log("what aaa");
  return {
    name: "name"
  };
};

export default Page;
