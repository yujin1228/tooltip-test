interface ITooltipPosition {
  x: number;
  y: number;
}

export default function calculateTooltipPosition(
  rect: DOMRect,
  direction: string
) {
  const position: ITooltipPosition = { x: 0, y: 0 };

  switch (direction) {
    case "top":
      position.x = rect.x + rect.width / 2;
      position.y = rect.y;
      break;
    case "bottom":
      position.x = rect.x + rect.width / 2;
      position.y = rect.bottom;
      break;
    case "left":
      position.x = rect.x;
      position.y = rect.y + rect.height / 2;
      break;
    case "right":
      position.x = rect.right;
      position.y = rect.y + rect.height / 2;
      break;
    case "topLeft":
      position.x = rect.x;
      position.y = rect.y;
      break;
    case "topRight":
      position.x = rect.right;
      position.y = rect.y;
      break;
    case "bottomLeft":
      position.x = rect.x;
      position.y = rect.bottom;
      break;
    case "bottomRight":
      position.x = rect.right;
      position.y = rect.bottom;
      break;
    case "leftTop":
      position.x = rect.x;
      position.y = rect.y;
      break;
    case "leftBottom":
      position.x = rect.x;
      position.y = rect.bottom;
      break;
    case "rightTop":
      position.x = rect.right;
      position.y = rect.y;
      break;
    case "rightBottom":
      position.x = rect.right;
      position.y = rect.bottom;
      break;
    default:
      break;
  }

  return position;
}
