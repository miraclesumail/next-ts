import cookies from "../../utils/cookie";

const handler = (req: any, res) => {
  res.cookie("Next.js", "api-middleware!");
  res.end("Hello Next.js middleware!");
};

export default cookies(handler)

