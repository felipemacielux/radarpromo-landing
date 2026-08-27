import { ArrowSquareOut, Tag } from "@phosphor-icons/react";
import type { Oferta } from "../types";

interface OfferRowProps {
  oferta: Oferta;
}

export function OfferRow({ oferta }: OfferRowProps) {
  return (
    <article className="group flex items-center gap-4 rounded-2xl border border-brand-ink/8 bg-white p-3 shadow-[0_1px_2px_rgba(7,61,36,0.06)] dark:border-white/10 dark:bg-[#0d1f15]">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-brand-mint dark:bg-white/5 sm:h-24 sm:w-24">
        <img
          src={oferta.imagem}
          alt={oferta.titulo}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <span className="absolute left-1 top-1 rounded-full bg-brand-orange px-2 py-0.5 text-[11px] font-bold text-white shadow-sm">
          -{oferta.desconto}%
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-ink/50 dark:text-brand-mint/60">
          {oferta.loja}
        </span>
        <h3 className="line-clamp-1 text-sm font-semibold leading-tight text-brand-ink sm:text-base dark:text-brand-mint">
          {oferta.titulo}
        </h3>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-lg font-extrabold text-brand-green-deep dark:text-brand-green">
            R$ {oferta.preco}
          </span>
          <span className="text-xs text-brand-ink/40 line-through dark:text-brand-mint/40">
            R$ {oferta.preco_original}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-brand-green-deep dark:text-brand-yellow">
          <Tag weight="bold" className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">
            Cupom <strong className="font-bold tracking-wide">{oferta.cupom}</strong>
          </span>
        </div>
      </div>

      <a
        href={oferta.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver oferta: ${oferta.titulo}`}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-brand-green-deep text-brand-green-deep transition-colors duration-300 hover:bg-brand-green-deep hover:text-white dark:border-brand-green dark:text-brand-green dark:hover:bg-brand-green dark:hover:text-brand-green-deep"
      >
        <ArrowSquareOut weight="bold" className="h-4 w-4" />
      </a>
    </article>
  );
}
