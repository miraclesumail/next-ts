import { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import React from "react";
import { context } from "./_app";
import Loader from "../components/loader";

function fetcher(url: string) {
  console.log(url, "请求的url");
  return fetch(url).then(r => r.json());
}

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  const { data, error } = useSWR("/api/randomCode", fetcher);
  const { name, addAge } = React.useContext(context);
  return (
    <div>
      <Link href="/about">
        <a title="about page">About Page {process.env.name}</a>
      </Link>
      <Loader />
      <h1 onClick={addAge}>
        Hello world! - user agent: {userAgent} {name}
      </h1>
    </div>
  );
};

// getInitialProps can only be added to a component in this page
// Home.getInitialProps = ({ req, ...rest }) => {
//   console.log(rest, "上海市");
//   const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
//   return { userAgent };
// };

function aryForEach(ary: any, fn: any) {
  ary.length && ary.forEach(fn);
}

class Element {
  private tagName: string;
  private count: number = 0;
  private props: any;
  private children: any[];

  constructor(tagName: string, props: any, children: any[]) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;

    if (!Array.isArray(children)) {
      console.error("cannot initial the instance");
    }
    let count = 0;

    children.forEach((item: any, index) => {
      if (item instanceof Element) {
        count += item.count;
      } else {
        this.children[index] = { nodeText: item };
        count++;
      }
    });
    this.count = count;
  }

  render() {
    const dom = document.createElement(this.tagName);

    for (const [key, val] of Object.entries(this.props)) {
      dom.setAttribute(key, val as any);
    }

    aryForEach(this.children, (child: any) => {
      const childDom =
        child instanceof Element
          ? child.render() // If the child node is also a virtual DOM, the DOM node is constructed recursively
          : document.createTextNode(child); // If the string, only the text node is constructed
      dom.appendChild(childDom as Node);
    });
  }
}

export async function getStaticProps(context: any) {
  console.log("执行了", context);
  console.log(process.env.USERNAME, "用户名");
  console.log(process.env.name, "环境变量");
  const response = await fetch("http://localhost:3000/api/cookie");
  console.log(response.headers.get("set-cookie"), "ffff");
  // By returning { props: post1s }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      persons: "pp"
    }
  };
}
export default Home;
