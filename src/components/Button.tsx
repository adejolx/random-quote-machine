import { animate, motion } from "framer-motion";
import { MouseEventHandler } from "react";
import { quote } from "../utils/useFetch";

type ButtonProps = {
  quote?: quote;
  id: string;
  image?: React.ReactNode;
  text: string;
  tweetEnabled?: boolean;
  randomizeHandler?: React.MouseEventHandler;
  color: string;
};

export default function Button({
  quote,
  id,
  image,
  text,
  tweetEnabled,
  randomizeHandler,
  color,
}: ButtonProps) {
  return (
    <>
      {tweetEnabled && quote ? (
        <motion.a
          target="_blank"
          id={id}
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"` + quote.quote + `"` + `\n-` + quote.author
          )}`}
          className="button center-text"
          style={{ color: `white` }}
          animate={{ backgroundColor: `${color}` }}
          transition={{ delay: 0.1, ease: "easeOut" }}
        >
          {image ? image : text}
        </motion.a>
      ) : (
        <motion.a
          id={id}
          onClick={randomizeHandler}
          className="button center-text"
          style={{ color: `white` }}
          animate={{ backgroundColor: `${color}` }}
          transition={{ delay: 0.1, ease: "easeOut" }}
        >
          {image ? image : text}
        </motion.a>
      )}
    </>
  );
}
