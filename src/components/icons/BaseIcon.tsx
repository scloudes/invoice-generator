import { SVGProps } from "react";

export default function BaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1={12} y1={5} x2={12} y2={19} />
      <line x1={18} y1={11} x2={12} y2={5} />
      <line x1={6} y1={11} x2={12} y2={5} />
    </svg>
  );
}
