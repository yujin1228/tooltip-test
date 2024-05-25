import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  color?: string;
  size?: "small" | "medium" | "large";
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default function Button({
  color = "green",
  size = "medium",
  children,
  onClick,
}: IButtonProps) {
  return (
    <button className={`${styles[color]} ${styles[size]}`} onClick={onClick}>
      {children}
    </button>
  );
}
