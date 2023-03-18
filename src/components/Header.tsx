import { Sparkle } from "phosphor-react";

import "./Header.css";

interface HeraderProps {
  title: string;
}

export function Header(props: HeraderProps) {
  return (
    <div className="timeline-header">
      {props.title} <Sparkle />
    </div>
  );
}
