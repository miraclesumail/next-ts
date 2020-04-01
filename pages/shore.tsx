import React, { Component } from "react";
import TweenOne from "rc-tween-one";
import { connect } from "react-redux";

export default class Shore extends Component<any, any> {
  public componentDidMount() {
    console.log("componentDidMount");
  }

  public static getInitialProps = (context: any) => ({ name: "shore" });

  public render() {
    return (
      <div>
        shore eee {this.props.name}
        <TweenOne
          animation={{
            x: 800,
            duration: 4000,
            type: "from",
            onRepeat: e => {
              console.log(e, "dddd");
            }
          }}
          repeat={3}
        >
          demo
        </TweenOne>
      </div>
    );
  }
}

// export async function getStaticProps(context: any) {
//   console.log('执行了', context);
//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       name: 'pp'
//     }
//   };
// }
