import { ReactNode } from "react";
import Tooltip from "../tooltip/Tooltip";
import Button from "../button/Button";

export default function Demo1({ content }: { content: ReactNode }) {
  return (
    <div className="demo1">
      <div className="box">
        <div className="top-wrapper">
          <Tooltip content={content} direction="topLeft">
            <Button>TL</Button>
          </Tooltip>
          <Tooltip content={content} direction="top">
            <Button>Top</Button>
          </Tooltip>
          <Tooltip content={content} direction="topRight">
            <Button>TR</Button>
          </Tooltip>
        </div>
        <div className="left-wrapper">
          <Tooltip content={content} direction="leftTop">
            <Button>LT</Button>
          </Tooltip>
          <Tooltip content={content} direction="left">
            <Button>Left</Button>
          </Tooltip>
          <Tooltip content={content} direction="leftBottom">
            <Button>LB</Button>
          </Tooltip>
        </div>
        <div className="right-wrapper">
          <Tooltip content={content} direction="rightTop">
            <Button>RT</Button>
          </Tooltip>
          <Tooltip content={content} direction="right">
            <Button>Right</Button>
          </Tooltip>
          <Tooltip content={content} direction="rightBottom">
            <Button>RB</Button>
          </Tooltip>
        </div>
        <div className="bottom-wrapper">
          <Tooltip content={content} direction="bottomLeft">
            <Button>BL</Button>
          </Tooltip>
          <Tooltip content={content} direction="bottom">
            <Button>Bottom</Button>
          </Tooltip>
          <Tooltip content={content} direction="bottomRight">
            <Button>BR</Button>
          </Tooltip>
        </div>
      </div>
      <div className="parent-overflow">
        <div className="box">
          <div className="top-wrapper">
            <Tooltip content={content} direction="topLeft">
              <Button>TL</Button>
            </Tooltip>
            <Tooltip content={content} direction="top">
              <Button>Top</Button>
            </Tooltip>
            <Tooltip content={content} direction="topRight">
              <Button>TR</Button>
            </Tooltip>
          </div>
          <div className="left-wrapper">
            <Tooltip content={content} direction="leftTop">
              <Button>LT</Button>
            </Tooltip>
            <Tooltip content={content} direction="left">
              <Button>Left</Button>
            </Tooltip>
            <Tooltip content={content} direction="leftBottom">
              <Button>LB</Button>
            </Tooltip>
          </div>
          <div className="right-wrapper">
            <Tooltip content={content} direction="rightTop">
              <Button>RT</Button>
            </Tooltip>
            <Tooltip content={content} direction="right">
              <Button>Right</Button>
            </Tooltip>
            <Tooltip content={content} direction="rightBottom">
              <Button>RB</Button>
            </Tooltip>
          </div>
          <div className="bottom-wrapper">
            <Tooltip content={content} direction="bottomLeft">
              <Button>BL</Button>
            </Tooltip>
            <Tooltip content={content} direction="bottom">
              <Button>Bottom</Button>
            </Tooltip>
            <Tooltip content={content} direction="bottomRight">
              <Button>BR</Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
