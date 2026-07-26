import classes from "./Footer.module.css";
import { useDisclosure } from "@mantine/hooks";
import { Anchor, Group, Modal, Title, Button } from "@mantine/core";
import type { ReactNode } from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import DoomGUI from "../DOOM/DoomGUI";

interface FooterProps {
  logo: ReactNode;
  links?: { url: string; label: string }[];
}

export const Footer = ({ logo, links }: FooterProps) => {
  const { ref, revealed } = useRevealOnScroll();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Group
      ref={ref}
      className={`${classes.footer} ${classes.reveal} ${
        revealed ? classes.revealed : ""
      }`}
    >
      <Title order={2} className={classes.title}>
        <Modal
          size="xl"
          opened={opened}
          onClose={close}
          title="Is this an easter egg?"
        >
          <DoomGUI />
        </Modal>
        <Button variant="light" color="red" radius="md" onClick={open}>
          Don't Click Me
        </Button>
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
