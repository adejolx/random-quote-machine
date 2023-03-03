import { useEffect, useState } from "react";
import "./App.css";
import useFetch, { Data, quote } from "./utils/useFetch";
import getColors from "./utils/colorsArray";
import randomize from "./utils/randomize";
import QuoteBox from "./components/QuoteBox";
import { motion } from "framer-motion";

function App() {
  const colors = getColors();
  const [quotes, setQuotes] = useState<Data["quotes"]>({} as Data["quotes"]);
  const [quote, setQuote] = useState<quote>({} as quote);
  const [color, setColor] = useState("");
  const { data } = useFetch({
    url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
  });

  useEffect(() => {
    if (data) {
      setQuotes(data.quotes);
      setQuote(randomize(data.quotes, data.quotes.length));
      setColor(randomize(colors, colors.length));
    }
  }, [data]);

  const handleRandomize = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e?.preventDefault();
    setQuote(randomize(quotes, quotes.length));
    setColor(randomize(colors, colors.length));
  };

  return (
    <>
      <motion.div
        className="false-body"
        animate={{ backgroundColor: `${color}` }}
        transition={{ ease: "easeOut" }}
      >
        <div id="quote-box" className="wrapper stack-m bg-white rounded">
          <QuoteBox
            quote={quote}
            color={color}
            randomizeHandler={handleRandomize}
          />
        </div>
      </motion.div>
    </>
  );
}
export default App;
