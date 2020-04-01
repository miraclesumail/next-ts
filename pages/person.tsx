import { NextPage } from "next";

const Person: NextPage<any> = ({ persons }) => (
  <h1>Hello Person! {persons.length}</h1>
);

const pro = new Promise((resolve, reject) => {
  resolve([
    { name: "qqqq", age: 11 },
    { name: "wwww", age: 11 },
    { name: "eeee", age: 11 }
  ]);
});

// This function gets called at build time
export async function getStaticProps() {
  const persons = await pro;
  console.log('执行了');
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      persons
    }
  };
}

export default Person;
