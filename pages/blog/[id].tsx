import { useRouter } from "next/router";
import { NextPage } from "next";
import { useState, useCallback } from "react";

const useReducer = (
  initialState: any,
  reducer: (state: any, action: any) => any
) => {
  const [state, setState] = useState(initialState);

  const dispatch = useCallback(
    (action: any) => {
      setState(reducer(state, action));
    },
    [state]
  );

  return [state, dispatch];
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        count: state.count + 1
      };
    case "dec":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

const Post: NextPage<any> = () => {
  const router = useRouter();
  const [state, dispatch] = useReducer({ count: 1 }, reducer);

  return (
    <div>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content. {state.count}</p>
      <button onClick={() => dispatch({ type: "inc" })}>add</button>
      <style jsx>{`
        h1 {
            color: yellow
        }
      
      `}</style>
    </div>
  );
};

Post.getInitialProps = ({ req, ...rest }) => {
  console.log(rest, "blog");
  return { age: 18 };
};

export default Post;
