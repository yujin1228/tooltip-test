import { ReactNode } from "react";
import Tooltip from "../tooltip/Tooltip";
import Button from "../button/Button";

export default function Demo2({ content }: { content: ReactNode }) {
  return (
    <div className="demo2">
      <Tooltip content={content} direction="topLeft" openDelay={1000}>
        <Button size="large">enter-delay 1s</Button>
      </Tooltip>
      <Tooltip content={content} direction="top" closeDelay={1000}>
        <Button size="large">leave-delay 1s</Button>
      </Tooltip>
      <Tooltip content={content} direction="topRight" hoverNotHidden>
        <Button size="large">hover not hidden</Button>
      </Tooltip>
    </div>
  );
}
