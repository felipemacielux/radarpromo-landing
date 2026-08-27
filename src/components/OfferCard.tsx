import { ArrowSquareOut, Tag } from "@phosphor-icons/react";
import type { Oferta } from "../types";

interface OfferCardProps {
  oferta: Oferta;
  className?: string;
}

export function OfferCard({ oferta, className = "" }: OfferCardProps) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-brand-ink/8 bg-white shadow-[0_1px_2px_rgba(7,61,36,0.06)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 dark:border-white/10 dark:bg-[#0d1f15] ${className}`}
    >
      <div className="relative aspect-square overflow-hidden bg-brand-mint dark:bg-white/5">
        <img
          src={oferta.imagem}
          alt={oferta.titulo}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-orange px-3 py-1 text-sm font-bold text-white shadow-sm">
          -{oferta.desconto}%
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-ink/50 dark:text-brand-mint/60">
            {oferta.loja}
          </span>
        </div>

        <h3 className="line-clamp-2 min-h-[2.75rem] text-base font-semibold leading-tight text-brand-ink dark:text-brand-mint">
          {oferta.titulo}
        </h3>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-extrabold text-brand-green-deep dark:text-brand-green">
            R$ {oferta.preco}
          </span>
          <span className="text-sm text-brand-ink/40 line-through dark:text-brand-mint/40">
            R$ {oferta.preco_original}
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-brand-mint px-3 py-2 text-sm font-medium text-brand-green-deep dark:bg-white/5 dark:text-brand-yellow">
          <Tag weight="bold" className="h-4 w-4 shrink-0" />
          <span>
            Cupom <strong className="font-bold tracking-wide">{oferta.cupom}</strong>
          </span>
        </div>

        <a
          href={oferta.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-brand-green-deep px-4 py-2.5 text-sm font-semibold text-brand-green-deep transition-colors duration-300 hover:bg-brand-green-deep hover:text-white dark:border-brand-green dark:text-brand-green dark:hover:bg-brand-green dark:hover:text-brand-green-deep"
        >
          Ver oferta
          <ArrowSquareOut weight="bold" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
