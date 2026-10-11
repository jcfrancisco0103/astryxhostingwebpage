export function LogoMark({
  className,
  title = "Astryx Hosting",
}: {
  className?: string;
  title?: string;
}) {
  const metal = "astryx-metal";
  const orbit = "astryx-orbit";

  return (
    <svg className={className} viewBox="0 0 86 86" role="img" aria-label={title}>
      <defs>
        <linearGradient id={metal} x1="20" y1="6" x2="40" y2="82" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#d5e8f8" />
          <stop offset="100%" stopColor="#7ec4f3" />
        </linearGradient>
        <linearGradient id={orbit} x1="16" y1="64" x2="78" y2="12" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3ecfff" />
          <stop offset="70%" stopColor="#e9fbff" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${metal})`}
        fillRule="evenodd"
        d="M43 6 L76 80 H60.5 L53.2 61 H32.8 L25.5 80 H10 Z M43 30 L51.4 52.5 H34.6 Z"
      />
      <path
        className="orbit-stroke"
        d="M16 62C32 40 46 38 58 48C66 54 70 40 71 26"
        fill="none"
        stroke={`url(#${orbit})`}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path className="mark-star" fill="#fff" d="M71 14l2.6 7 7.2 2.4-7.2 2.6L71 33l-2.6-7-7.2-2.6 7.2-2.4z" />
    </svg>
  );
}
