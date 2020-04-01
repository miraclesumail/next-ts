import withRedux from "next-redux-wrapper";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import { initStore } from "../redux";
import React from "react";
import { PageTransition } from 'next-page-transitions'

export const context = React.createContext(null as any);

/**
 * withRedux receive two parameters 第一个是makeStore返回一个store实例
 */
export default withRedux(initStore, { debug: true })(
  class MyApp extends App {
    public state = {
      age: 28
    }

    static async getInitialProps({ Component, ctx }: any) {
      return {
        pageProps: {
          ...Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}
        }
      };
    }

    public addAge = () => {
      this.setState({
        age: 55
      })
    }

    public render() {
      const { Component, pageProps, store } = (this as any).props;
      return (
        <Container>
          <Provider store={store}>
            <context.Provider value={{ name: "dddd", age: this.state.age, addAge: this.addAge }}>
              <Component {...pageProps} />
            </context.Provider>
          </Provider>
        </Container>
      );
    }
  }
);
