import React from "react";
import ReactDOM from "react-dom";

interface IPortalProps {
  children: React.ReactNode;
  container?: HTMLElement | null;
}

export default function Portals({ children, container }: IPortalProps) {
  const targetContainer = container || document.body;

  return ReactDOM.createPortal(children, targetContainer);
}
