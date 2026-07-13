import type { SVGProps } from "react";

const UiUx = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path
      d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
      fill="#A259FF"
    />
    <path
      d="M74 182 158 98"
      stroke="#FFF"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M158 98c8-16 24-24 40-24s24 8 16 24-24 24-40 24-24-8-16-24Z"
      fill="#FFF"
    />
    <circle cx="74" cy="182" r="10" fill="#FFF" />
    <circle cx="74" cy="182" r="4" fill="#A259FF" />
    <circle cx="158" cy="98" r="6" fill="#FFF" stroke="#A259FF" strokeWidth="2" />
    <circle cx="112" cy="140" r="4" fill="#FFF" stroke="#A259FF" strokeWidth="1.5" opacity="0.7" />
    <path
      d="M182 158a10 10 0 1 1 0 20 10 10 0 0 1 0-20Z"
      fill="#FFF"
      opacity="0.9"
    />
    <path
      d="M182 172v22M172 178l10-6 10 6"
      stroke="#FFF"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.9"
    />
  </svg>
);

export { UiUx };