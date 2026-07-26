import { useInViewport } from "@mantine/hooks";
import { useEffect, useState } from "react";

export function useRevealOnScroll() {
  const { ref, inViewport } = useInViewport();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (inViewport) setRevealed(true);
  }, [inViewport]);

  return { ref, revealed };
}
