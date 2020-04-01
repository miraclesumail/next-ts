import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// in this file we are initializing the redux store by passing initial state and instance of reducer, we are applying thunk middleware to support async data flow.
// 服务端和客户端都会执行  ctx.isServer 判断是不是服务端
export const initStore = (initialState = {}, ctx: any) => {
  console.log(ctx, '这是还是')
  return createStore(reducer, initialState as any, applyMiddleware(thunk));
};