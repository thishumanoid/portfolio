import type { SVGProps } from "react";

const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 38 57" preserveAspectRatio="xMidYMid">
    <path
      d="M19 57c5.523 0 10-4.477 10-10V38H19a9.5 9.5 0 1 0 0 19Z"
      fill="#0ACF83"
    />
    <path
      d="M0 28.5C0 23.253 4.253 19 9.5 19H19v19H9.5C4.253 38 0 33.747 0 28.5Z"
      fill="#A259FF"
    />
    <path
      d="M0 9.5C0 4.253 4.253 0 9.5 0H19v19H9.5C4.253 19 0 14.747 0 9.5Z"
      fill="#F24E1E"
    />
    <path
      d="M19 0h9.5C33.747 0 38 4.253 38 9.5S33.747 19 28.5 19H19V0Z"
      fill="#FF7262"
    />
    <path
      d="M38 28.5c0 5.247-4.253 9.5-9.5 9.5S19 33.747 19 28.5s4.253-9.5 9.5-9.5 9.5 4.253 9.5 9.5Z"
      fill="#1ABCFE"
    />
  </svg>
);

export { Figma };