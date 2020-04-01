const initialState = [
  { task: "qqqqqq", name: "www" },
  { task: "wwwwww", name: "eee" },
  { task: "eeeeee", name: "fff" }
];

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      const temp = [...state];
      temp.pop();
      return temp;
    default:
      return state;
  }
};
