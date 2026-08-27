import { BellRinging } from "@phosphor-icons/react";
import { CTAButton } from "./CTAButton";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-brand-ink/15 bg-brand-mint/40 px-6 py-16 text-center dark:border-white/15 dark:bg-white/5">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green-deep text-brand-mint">
        <BellRinging weight="fill" className="h-7 w-7" />
      </span>
      <h3 className="text-xl font-bold text-brand-ink dark:text-brand-mint">
        Sem ofertas novas por enquanto
      </h3>
      <p className="max-w-xs text-sm text-brand-ink/60 dark:text-brand-mint/60">
        Estamos garimpando os melhores preços do dia. Entre no grupo para
        receber o aviso assim que sair uma oferta boa.
      </p>
      <CTAButton />
    </div>
  );
}
