import { MouseEventHandler } from "react";
import { quote } from "../utils/useFetch";
import Button from "./Button";
import QuoteDisplay from "./QuoteDisplay";

type QuoteBoxProps = {
  color: string;
  quote: quote;
  randomizeHandler: React.MouseEventHandler;
};

export default function QuoteBox({
  color,
  quote,
  randomizeHandler,
}: QuoteBoxProps) {
  return (
    <>
      <QuoteDisplay quote={quote} color={color} />
      <div className="flex-apart button-group">
        <Button
          id={"tweet-quote"}
          text={"Tweet"}
          color={color}
          tweetEnabled={true}
          quote={quote}
        />
        <Button
          id={"new-quote"}
          randomizeHandler={randomizeHandler}
          text={"New quote"}
          color={color}
        />
      </div>
    </>
  );
}
