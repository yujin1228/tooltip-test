import { ReactNode, useState } from "react";
import Tooltip from "../tooltip/Tooltip";
import Button from "../button/Button";

export default function DemoDisable({ content }: { content: ReactNode }) {
  const [btnDisable, setBtnDisable] = useState(true);

  return (
    <div className="demo-disable">
      <Button
        color={btnDisable ? "black" : "gray"}
        onClick={() => setBtnDisable(!btnDisable)}
      >
        {btnDisable ? "Disable" : "Enable"}
      </Button>
      <Tooltip content={content} disabled={btnDisable}>
        <div className="tooltip-disable-test">{content}</div>
      </Tooltip>
    </div>
  );
}
