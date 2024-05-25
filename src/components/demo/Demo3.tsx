import Tooltip from "../tooltip/Tooltip";
import Button from "../button/Button";
import ConfirmContent from "../confirm/ConfirmContent";

export default function Demo3() {
  return (
    <div className="demo3">
      <Tooltip
        content={<ConfirmContent />}
        direction="top"
        color="white"
        hoverNotHidden
      >
        <Button>Top</Button>
      </Tooltip>
      <Tooltip
        content={<ConfirmContent />}
        direction="left"
        color="white"
        hoverNotHidden
      >
        <Button>Left</Button>
      </Tooltip>
      <Tooltip
        content={<ConfirmContent />}
        direction="right"
        color="white"
        hoverNotHidden
      >
        <Button>Right</Button>
      </Tooltip>
      <Tooltip
        content={<ConfirmContent />}
        direction="bottom"
        color="white"
        hoverNotHidden
      >
        <Button>Bottom</Button>
      </Tooltip>
    </div>
  );
}
