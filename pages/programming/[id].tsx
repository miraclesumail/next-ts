import { NextPage } from "next";

const codes = [
  { name: "java", age: 11 },
  { name: "js", age: 11 },
  { name: "php", age: 11 }
];

const Person: NextPage<any> = ({ name }) => (
  <h1>Hello Person! {name}</h1>
);
// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = codes.map(code => `/programming/${code.name}`);

  // We'll pre-render only these paths at build time.
  // /programming/java /programming/js   /programming/php 为有效地址
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }: any) {
  // Pass post data to the page via props
  return { props: { name: params.id } };
}

export default Person;
