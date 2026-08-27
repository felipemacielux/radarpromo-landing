import { WhatsappLogo } from "@phosphor-icons/react";

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/PLACEHOLDER";

interface CTAButtonProps {
  size?: "default" | "large";
  className?: string;
}

export function CTAButton({ size = "default", className = "" }: CTAButtonProps) {
  const sizeClasses =
    size === "large"
      ? "px-8 py-4 text-lg gap-3"
      : "px-6 py-3 text-base gap-2";

  return (
    <a
      href={WHATSAPP_GROUP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center ${sizeClasses} rounded-full bg-brand-green font-semibold text-brand-green-deep shadow-[0_8px_24px_-6px_rgba(24,200,62,0.55)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(24,200,62,0.65)] active:translate-y-0 active:scale-[0.98] ${className}`}
    >
      <WhatsappLogo weight="fill" className="h-6 w-6" />
      Entrar no grupo
    </a>
  );
}
