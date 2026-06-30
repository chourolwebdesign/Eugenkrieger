/**
 * Lightweight inline SVG icon set (modern, consistent line style).
 * Avoids shipping an icon library for a perfect Lighthouse score.
 */
import type { SVGProps } from "react";

type IconName =
  | "box"
  | "home"
  | "key"
  | "stairs"
  | "roof"
  | "garage"
  | "briefcase"
  | "store"
  | "truck"
  | "phone"
  | "mail"
  | "whatsapp"
  | "pin"
  | "clock"
  | "check"
  | "star"
  | "arrowRight"
  | "arrowDown"
  | "calendar"
  | "shield"
  | "leaf"
  | "bolt"
  | "broom"
  | "smile"
  | "euro"
  | "menu"
  | "close"
  | "upload"
  | "chevron";

const paths: Record<IconName, React.ReactNode> = {
  box: (
    <>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="m3 8 9 5 9-5M12 13v8" />
    </>
  ),
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  key: (
    <>
      <circle cx="7.5" cy="15.5" r="4.5" />
      <path d="m10.5 12.5 9-9M16 6l2 2M14 8l2 2" />
    </>
  ),
  stairs: (
    <>
      <path d="M3 20h4v-4h4v-4h4V8h4V4" />
    </>
  ),
  roof: (
    <>
      <path d="M2 12 12 4l10 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  garage: (
    <>
      <path d="M3 21V8l9-4 9 4v13" />
      <path d="M6 21v-8h12v8" />
      <path d="M6 16h12M6 18.5h12" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </>
  ),
  store: (
    <>
      <path d="M4 9h16l-1-5H5L4 9Z" />
      <path d="M4 9v11h16V9M4 9c0 1.7 1.3 3 3 3s3-1.3 3-3 1.3 3 3 3 3-1.3 3-3 1.3 3 3 3" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  phone: (
    <path d="M3 5.5C3 4.7 3.7 4 4.5 4H7l2 5-2.5 1.5a12 12 0 0 0 5 5L13 13l5 2v2.5c0 .8-.7 1.5-1.5 1.5A14 14 0 0 1 3 5.5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm0 0M8.5 8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4 0 .5l-.4.5c-.2.2-.3.3-.1.6.2.3.8 1.2 1.6 1.8 1 .8 1.6 1 1.9 1.1.2 0 .4 0 .5-.2l.6-.7c.2-.2.4-.2.6-.1l1.5.8c.2.1.4.2.4.3.1.3 0 1-.3 1.4-.3.4-1.1.9-1.6.9-1.6.1-3-.5-5-2.3-1.6-1.5-2.6-3.3-2.9-4.1-.2-.6-.1-1.4.2-1.9Z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  star: (
    <path d="m12 3 2.6 5.6 6 .7-4.4 4.1 1.2 6L12 16.8 6.6 19.5l1.2-6L3.4 9.3l6-.7L12 3Z" />
  ),
  arrowRight: <path d="M5 12h14m-6-6 6 6-6 6" />,
  arrowDown: <path d="M12 5v14m-6-6 6 6 6-6" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.3 3 7.7 7 9 4-1.3 7-4.7 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14a6 6 0 0 1-1-1Z" />
      <path d="M5 19c3-4 6-6 10-7" />
    </>
  ),
  bolt: <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />,
  broom: (
    <>
      <path d="M14 3 9 8M19 8l-7 7-4-4 7-7 4 4ZM8 11l-4 8 8-4" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </>
  ),
  euro: (
    <>
      <path d="M17 6a7 7 0 1 0 0 12M4 10h9M4 14h9" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  upload: (
    <>
      <path d="M12 16V4m-5 5 5-5 5 5" />
      <path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
};

export type { IconName };

export default function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
