import { useEffect, useRef, useState } from "react";
import styles from "./Tooltip.module.scss";
import Portals from "../Portals";
import calculateTooltipPosition from "../../utils/tooltipPositionCalculator";

interface ITooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  direction?:
    | `left`
    | `right`
    | `top`
    | `bottom`
    | `topLeft`
    | `topRight`
    | `bottomLeft`
    | `bottomRight`
    | `leftTop`
    | `leftBottom`
    | `rightTop`
    | `rightBottom`;
  openDelay?: number;
  closeDelay?: number;
  customStyle?: React.CSSProperties;
  color?: "dark-gray" | "pink" | "yellow" | "white";
  disabled?: boolean;
  hoverNotHidden?: boolean;
}

export default function Tooltip({
  content,
  children,
  direction = "top",
  openDelay = 0,
  closeDelay = 0,
  customStyle,
  color = "dark-gray",
  disabled = false,
  hoverNotHidden = false,
}: ITooltipProps) {
  const [isActvie, setIsActive] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  useEffect(() => {
    if (isActvie && !disabled) {
      const openTooltip = setTimeout(() => {
        setIsShow(true);
      }, openDelay);
      return () => clearTimeout(openTooltip);
    } else {
      const closeTooltip = setTimeout(() => {
        setIsShow(false);
      }, closeDelay);
      return () => clearTimeout(closeTooltip);
    }
  }, [isActvie, disabled, openDelay, closeDelay]);

  const handleMouseOver = () => {
    if (tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      const position = calculateTooltipPosition(rect, direction);
      setTooltipPosition(position);
    }
    setIsActive(true);
  };
  const handleMouseOut = () => setIsActive(false);

  return (
    <>
      <div
        className={styles["tooltip-container"]}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        ref={tooltipRef}
      >
        {children}
      </div>
      {isShow && (
        <Portals
          container={document.getElementById("tooltip-container-layout")}
        >
          <div
            className={`${styles["tooltip-inner"]} ${styles[direction]} ${styles[color]}`}
            style={{
              top: tooltipPosition.y,
              left: tooltipPosition.x,
              ...customStyle,
            }}
            onMouseOver={hoverNotHidden ? handleMouseOver : undefined}
            onMouseOut={hoverNotHidden ? handleMouseOut : undefined}
          >
            {content}
          </div>
        </Portals>
      )}
    </>
  );
}
