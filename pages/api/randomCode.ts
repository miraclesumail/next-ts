import quotes from "../../quotes.json";

export default (req: any, res: any) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  // res.setPreviewData({date: '2020-2020'});

  res.status(200).json(quote);
};
