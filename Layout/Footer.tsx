import classes from "./Footer.module.css";
import { Anchor, Group, Title } from "@mantine/core";
import type { ReactNode } from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

interface FooterProps {
  logo: ReactNode;
  links?: { url: string; label: string }[];
}

export const Footer = ({ logo, links }: FooterProps) => {
  const { ref, revealed } = useRevealOnScroll();

  return (
    <Group
      ref={ref}
      className={`${classes.footer} ${classes.reveal} ${
        revealed ? classes.revealed : ""
      }`}
    >
      <Title order={2} className={classes.title}>
        {logo}
      </Title>
      {links && (
        <Group className={classes.links}>
          {links.map((link, index) => {
            return (
              <Anchor
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                c="dimmed"
                className={classes.link}
              >
                {link.label}
              </Anchor>
            );
          })}
        </Group>
      )}
    </Group>
  );
};
