import { InstagramLogo, TiktokLogo } from "@phosphor-icons/react";
import { Brand } from "./Brand";

const socialLinks = [
  { label: "TikTok", href: "https://www.tiktok.com/@radarpromo", Icon: TiktokLogo },
  { label: "Instagram", href: "https://www.instagram.com/radarpromo", Icon: InstagramLogo },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-ink/8 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:px-6">
        <Brand iconClassName="h-7 w-7" textClassName="text-sm" />

        <p className="max-w-xs text-center text-xs text-brand-ink/50 sm:text-left dark:text-brand-mint/50">
          Preços e cupons podem mudar sem aviso. Confira o valor final na loja
          antes de finalizar a compra.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink/15 text-brand-ink/60 transition-colors duration-300 hover:border-brand-green hover:text-brand-green dark:border-white/15 dark:text-brand-mint/60"
            >
              <Icon weight="fill" className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
