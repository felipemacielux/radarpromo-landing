interface BrandProps {
  iconClassName?: string;
  textClassName?: string;
  className?: string;
}

export function Brand({
  iconClassName = "h-9 w-9",
  textClassName = "text-lg",
  className = "",
}: BrandProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/brand/icon.png"
        alt="RadarPromo"
        width={36}
        height={36}
        className={`${iconClassName} shrink-0 rounded-[28%]`}
      />
      <span
        className={`${textClassName} font-extrabold tracking-tight text-brand-ink dark:text-brand-mint`}
      >
        Radar<span className="text-brand-green">Promo</span>
      </span>
    </div>
  );
}
