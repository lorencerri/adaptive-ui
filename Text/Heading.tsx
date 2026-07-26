import classes from "./Heading.module.css";

import { Title } from "@mantine/core";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

interface HeadingProps {
  text: string;
  highlight?: string;
}

export const Heading = ({ text, highlight }: HeadingProps) => {
  const { ref, revealed } = useRevealOnScroll();

  return (
    <Title
      ref={ref}
      order={3}
      className={`${classes.title} ${classes.reveal} ${
        revealed ? classes.revealed : ""
      }`}
    >
      {highlight
        ? text.split(" ").map((word, index) =>
            word.toLowerCase() === highlight.toLowerCase() ? (
              <span key={index} className="highlight">
                {word}{" "}
              </span>
            ) : (
              `${word} `
            )
          )
        : text}
    </Title>
  );
};
