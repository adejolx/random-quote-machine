import { motion } from "framer-motion";
import { quote } from "../utils/useFetch";

type QuoteDisplayProps = {
  quote: quote;
  color: string;
};

export default function QuoteDisplay({ quote, color }: QuoteDisplayProps) {
  const defaultQuote = "You're the writer of your own destiny";
  const defaultAuthor = "Anonymous";
  return (
    <>
      <motion.div
        className="stack-s"
        key={color}
        initial={{ opacity: 0.5 }}
        animate={{ color: `${color}`, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p id="text" className="font-large bold quote center-text">
          {quote.quote ? quote.quote : defaultQuote}
        </p>
        <span id="author" className="block right-text italicize">
          - {quote.author ? quote.author : defaultAuthor}
        </span>
      </motion.div>
    </>
  );
}
