import Tooltip from "../tooltip/Tooltip";
import Button from "../button/Button";

export default function DemoColor() {
  return (
    <div className="demo-color">
      <Tooltip
        content="pink"
        customStyle={{
          color: "white",
        }}
        color="pink"
      >
        <Button color="pink">Pink</Button>
      </Tooltip>
      <Tooltip
        content="yellow"
        customStyle={{
          color: "white",
        }}
        color="yellow"
      >
        <Button color="yellow">Yellow</Button>
      </Tooltip>
    </div>
  );
}
