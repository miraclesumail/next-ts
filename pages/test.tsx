import React, { Component, useState } from "react";
import { connect } from "react-redux";

function Count({ count }: any) {
  const [num, setNum] = useState(5);

  return (
    <div>
      {count} {num}
      <button onClick={() => setNum(num + 1)} />
    </div>
  );
}

class Test extends Component<any, any> {
  public state = {
    count: 1
  };

  componentDidMount() {
    console.log(this.props, "呵呵呵");

    setTimeout(() => {
      this.setState({ count: 10 });
    }, 5000);
  }

  public static getInitialProps = (context: any) => {
    console.log(context, "this is from test page");
    console.log(context.store.getState(), "dddddd");

    // 这里也可以dispatch
    context.store.dispatch({
      type: "delete"
    });
    return {
      name: "sumail"
    };
  };

  render() {
    return (
      <div>
        Test {this.props.name} <Count count={this.state.count} />
      </div>
    );
  }
}

export default connect(state => state)(Test);
