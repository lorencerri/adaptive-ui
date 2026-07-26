import { type ReactNode } from "react";

import { useElementSize } from "@mantine/hooks";

import { DotsBackground } from "../Decorative/DotsBackground";

interface AdaptiveLayoutProps {
  dots?: { seed: string; count?: number };
  children: ReactNode;
}

export const AdaptiveLayout = ({ children, dots }: AdaptiveLayoutProps) => {
  const { ref, width, height } = useElementSize();

  return (
    <div ref={ref} id="main-content" tabIndex={-1}>
      {dots && (
        <DotsBackground
          width={width}
          height={height}
          seed={dots.seed}
          count={dots.count}
        />
      )}
      {children}
    </div>
  );
};
